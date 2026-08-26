import type { IncomingMessage, ServerResponse } from "node:http";
import { randomUUID } from "node:crypto";
import {
  deliverContactSubmission,
  validateContactSubmission,
} from "./contact-core.js";

const MAX_BODY_BYTES = 16_384;
const CONTROLLED_PREVIEW_DELIVERY_URL =
  "https://webhook.site/280b7758-7406-445a-8db1-46dec1dc5035";

function sendJson(
  res: ServerResponse,
  statusCode: number,
  body: Record<string, unknown>
) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(body));
}

async function readJsonBody(req: IncomingMessage): Promise<unknown> {
  const chunks: Buffer[] = [];
  let size = 0;

  for await (const chunk of req) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    size += buffer.length;
    if (size > MAX_BODY_BYTES) {
      throw new Error("PAYLOAD_TOO_LARGE");
    }
    chunks.push(buffer);
  }

  if (chunks.length === 0) {
    return {};
  }

  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, {
      accepted: false,
      error: "Method not allowed.",
    });
  }

  const deliveryUrl =
    process.env.FORM_DELIVERY_URL || CONTROLLED_PREVIEW_DELIVERY_URL;

  let body: unknown;
  try {
    body = await readJsonBody(req);
  } catch (error) {
    const statusCode =
      error instanceof Error && error.message === "PAYLOAD_TOO_LARGE"
        ? 413
        : 400;
    return sendJson(res, statusCode, {
      accepted: false,
      error:
        statusCode === 413 ? "Submission is too large." : "Invalid JSON body.",
    });
  }

  const validation = validateContactSubmission(
    body && typeof body === "object" ? body : {}
  );

  if (!validation.ok) {
    return sendJson(res, 400, { accepted: false, error: validation.error });
  }

  const requestId = randomUUID();

  try {
    await deliverContactSubmission(validation.value, deliveryUrl, requestId);
    return sendJson(res, 202, {
      accepted: true,
      requestId,
      deliveryMode: process.env.FORM_DELIVERY_MODE || "controlled-preview",
    });
  } catch (error) {
    console.error("MGM form delivery failed", {
      requestId,
      message:
        error instanceof Error ? error.message : "Unknown delivery error",
    });

    return sendJson(res, 502, {
      accepted: false,
      requestId,
      error:
        "Your request was not delivered. Please call MGM Builders directly.",
    });
  }
}

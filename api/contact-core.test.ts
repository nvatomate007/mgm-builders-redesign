import { describe, expect, it, vi } from "vitest";
import {
  deliverContactSubmission,
  validateContactSubmission,
  type ValidatedContact,
} from "./contact-core";

const validInput = {
  name: "Preview Tester",
  email: "preview@example.test",
  phone: "407-555-0199",
  address: "123 Test Lane",
  city: "Orlando",
  zip: "32801",
  service: "Roofing",
  details: "Controlled preview delivery verification only.",
  company: "",
  consent: true,
};

const validatedContact: ValidatedContact = {
  name: "Preview Tester",
  email: "preview@example.test",
  phone: "407-555-0199",
  address: "123 Test Lane",
  city: "Orlando",
  zip: "32801",
  service: "Roofing",
  details: "Controlled preview delivery verification only.",
  source: "MGM Builders Website",
  consent: true,
};

describe("validateContactSubmission", () => {
  it("accepts a complete controlled-test submission", () => {
    const result = validateContactSubmission(validInput);
    expect(result).toEqual({ ok: true, value: validatedContact });
  });

  it("rejects missing required project details", () => {
    const result = validateContactSubmission({ ...validInput, details: "" });
    expect(result.ok).toBe(false);
  });

  it("rejects an invalid email when one is supplied", () => {
    const result = validateContactSubmission({
      ...validInput,
      email: "not-an-email",
    });
    expect(result.ok).toBe(false);
  });

  it("requires explicit contact consent", () => {
    const result = validateContactSubmission({ ...validInput, consent: false });
    expect(result.ok).toBe(false);
  });

  it("rejects honeypot submissions", () => {
    const result = validateContactSubmission({
      ...validInput,
      company: "spam bot",
    });
    expect(result.ok).toBe(false);
  });
});

describe("deliverContactSubmission", () => {
  it("resolves only after a successful downstream response", async () => {
    const fetcher = vi
      .fn<typeof fetch>()
      .mockResolvedValue(new Response("ok", { status: 200 }));

    await expect(
      deliverContactSubmission(
        validatedContact,
        "https://sink.example.test/form",
        "request-1",
        fetcher
      )
    ).resolves.toBeUndefined();

    expect(fetcher).toHaveBeenCalledOnce();
    const [, init] = fetcher.mock.calls[0];
    expect(init?.method).toBe("POST");
    expect(init?.headers).toMatchObject({ "X-MGM-Request-ID": "request-1" });
    expect(JSON.parse(String(init?.body))).toMatchObject({
      ...validatedContact,
      requestId: "request-1",
    });
  });

  it("throws when the downstream endpoint rejects the delivery", async () => {
    const fetcher = vi
      .fn<typeof fetch>()
      .mockResolvedValue(new Response("failure", { status: 503 }));

    await expect(
      deliverContactSubmission(
        validatedContact,
        "https://sink.example.test/form",
        "request-2",
        fetcher
      )
    ).rejects.toThrow("HTTP 503");
  });

  it("rejects insecure delivery endpoints", async () => {
    await expect(
      deliverContactSubmission(
        validatedContact,
        "http://sink.example.test/form",
        "request-3"
      )
    ).rejects.toThrow("secure form delivery endpoint");
  });
});

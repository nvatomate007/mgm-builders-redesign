export type ContactSubmission = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  address?: unknown;
  city?: unknown;
  zip?: unknown;
  service?: unknown;
  details?: unknown;
  company?: unknown;
  source?: unknown;
  consent?: unknown;
};

export type ValidatedContact = {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zip: string;
  service: string;
  details: string;
  source: "MGM Builders Website";
  consent: true;
};

type ValidationResult =
  | { ok: true; value: ValidatedContact }
  | { ok: false; error: string };

const SERVICE_OPTIONS = new Set([
  "Roofing",
  "Siding",
  "Windows",
  "Doors",
  "Remodeling",
  "Additions",
  "Multiple / Not Sure",
]);

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9+().\-\s]{7,25}$/;
const ZIP_PATTERN = /^\d{5}(?:-\d{4})?$/;

function clean(value: unknown, maxLength: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export function validateContactSubmission(
  input: ContactSubmission
): ValidationResult {
  const honeypot = clean(input.company, 100);
  if (honeypot) {
    return { ok: false, error: "Submission rejected." };
  }

  const value: ValidatedContact = {
    name: clean(input.name, 100),
    email: clean(input.email, 200),
    phone: clean(input.phone, 25),
    address: clean(input.address, 200),
    city: clean(input.city, 100),
    zip: clean(input.zip, 10),
    service: clean(input.service, 100),
    details: clean(input.details, 2000),
    source: "MGM Builders Website",
    consent: true,
  };

  if (
    !value.name ||
    !value.phone ||
    !value.zip ||
    !value.service ||
    !value.details
  ) {
    return {
      ok: false,
      error: "Name, phone, ZIP, service, and project details are required.",
    };
  }

  if (input.consent !== true) {
    return { ok: false, error: "Contact consent is required." };
  }

  if (value.email && !EMAIL_PATTERN.test(value.email)) {
    return { ok: false, error: "Enter a valid email address." };
  }

  if (!PHONE_PATTERN.test(value.phone)) {
    return { ok: false, error: "Enter a valid phone number." };
  }

  if (!ZIP_PATTERN.test(value.zip)) {
    return { ok: false, error: "Enter a valid ZIP code." };
  }

  if (!SERVICE_OPTIONS.has(value.service)) {
    return { ok: false, error: "Select a valid service." };
  }

  return { ok: true, value };
}

export async function deliverContactSubmission(
  submission: ValidatedContact,
  deliveryUrl: string,
  requestId: string,
  fetcher: typeof fetch = fetch
): Promise<void> {
  if (!deliveryUrl.startsWith("https://")) {
    throw new Error("A secure form delivery endpoint is not configured.");
  }

  const response = await fetcher(deliveryUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-MGM-Request-ID": requestId,
    },
    body: JSON.stringify({
      ...submission,
      requestId,
      receivedAt: new Date().toISOString(),
    }),
    signal: AbortSignal.timeout(8_000),
  });

  if (!response.ok) {
    throw new Error(`Delivery endpoint returned HTTP ${response.status}.`);
  }
}

// Shared basic security/validation helpers for public form-submission API
// routes (booking, inquiry). Not a replacement for a full WAF/rate-limiter,
// but covers the common cheap-bot and malformed-input cases.

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: unknown): email is string {
  return (
    typeof email === "string" &&
    email.trim().length > 0 &&
    email.length <= 254 &&
    EMAIL_REGEX.test(email.trim())
  );
}

export function isNonEmptyString(value: unknown, maxLength = 200): value is string {
  return (
    typeof value === "string" &&
    value.trim().length > 0 &&
    value.length <= maxLength
  );
}

export function truncate(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.slice(0, maxLength);
}

/**
 * Honeypot spam check. The client form includes a hidden field (name
 * "website") that real users never see or fill in, but simple bots often
 * auto-fill every field they find. If it's non-empty, treat as spam.
 */
export function isHoneypotTriggered(payload: Record<string, unknown>): boolean {
  return (
    typeof payload.website === "string" && payload.website.trim().length > 0
  );
}

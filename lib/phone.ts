/**
 * Normalize phone to E.164 to match the backend (love-line) storage.
 * Keep in sync with love-line: src/utils/conference.ts — normalizePhoneNumber().
 */
export function normalizePhone(input: string): string {
  const digits = input.replace(/[^\d+]/g, "");
  if (digits.startsWith("+")) return digits;
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return digits;
}

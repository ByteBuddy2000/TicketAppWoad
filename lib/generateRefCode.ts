import crypto from "crypto";

/**
 * Generates a random alphanumeric referral code.
 * @param length Length of the code (default: 6)
 * @returns A random string, e.g. "2we455"
 */
export function generateRefCode(length = 6): string {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from(crypto.randomBytes(length))
    .map((byte) => chars[byte % chars.length])
    .join("");
}
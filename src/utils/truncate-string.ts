/**
 * @module utils/truncate-string
 * @description Utility function for truncating
 *   strings to a maximum length with an ellipsis
 *   suffix when the string exceeds the limit.
 *
 * @since 0.1.0
 * @author Claude Code
 * @license MIT
 */

// ─────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────

/**
 * The default maximum length for truncated
 * strings. Strings longer than this will be
 * truncated with an ellipsis.
 *
 * @constant {number}
 * @default 80
 */
const DEFAULT_MAX_LENGTH = 80

/**
 * The default ellipsis string appended to
 * truncated strings.
 *
 * @constant {string}
 * @default '...'
 */
const DEFAULT_ELLIPSIS = '...'

// ─────────────────────────────────────────────
// Main function
// ─────────────────────────────────────────────

/**
 * Truncates a string to the specified maximum
 * length, appending an ellipsis if the string
 * exceeds the limit.
 *
 * @param {string} input - The string to truncate
 * @param {number} maxLength - Maximum length
 * @param {string} ellipsis - Ellipsis string
 * @returns {string} The truncated string
 *
 * @example
 *   ```typescript
 *   truncateString('Hello', 10)
 *   // 'Hello'
 *
 *   truncateString('Hello World', 8)
 *   // 'Hello...'
 *   ```
 */
export function truncateString(
  input: string,
  maxLength: number = DEFAULT_MAX_LENGTH,
  ellipsis: string = DEFAULT_ELLIPSIS,
): string {
  // Check if truncation is needed
  if (input.length <= maxLength) {
    // No truncation needed
    return input
  }

  // Calculate the truncation point
  const truncateAt =
    maxLength - ellipsis.length

  // Truncate and append ellipsis
  const truncated =
    input.slice(0, truncateAt) + ellipsis

  // Return the truncated string
  return truncated
}

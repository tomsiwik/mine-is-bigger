/**
 * @module utils/format-number
 * @description Utility function for formatting
 *   numbers with locale-aware thousand separators
 *   for improved readability in CLI output.
 *
 * @since 0.1.0
 * @author Claude Code
 * @license MIT
 */

// ─────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────

/**
 * The default locale for number formatting.
 *
 * @constant {string}
 * @default 'en-US'
 */
const DEFAULT_LOCALE = 'en-US'

// ─────────────────────────────────────────────
// Main function
// ─────────────────────────────────────────────

/**
 * Formats a number with locale-aware thousand
 * separators for improved readability.
 *
 * @param {number} value - The number to format
 * @param {string} locale - The locale to use
 * @returns {string} The formatted number string
 *
 * @example
 *   ```typescript
 *   formatNumber(1000)     // '1,000'
 *   formatNumber(1000000)  // '1,000,000'
 *   formatNumber(42)       // '42'
 *   ```
 */
export function formatNumber(
  value: number,
  locale: string = DEFAULT_LOCALE,
): string {
  // Use Intl.NumberFormat for formatting
  const formatter = new Intl.NumberFormat(
    locale,
  )

  // Format and return
  return formatter.format(value)
}

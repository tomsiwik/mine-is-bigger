/**
 * @module utils/format-duration
 * @description Utility function for formatting a
 *   duration in milliseconds into a human-readable
 *   string with appropriate units.
 *
 * @since 0.1.0
 * @author Claude Code
 * @license MIT
 */

// ─────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────

/**
 * Milliseconds in one second.
 *
 * @constant {number}
 * @default 1000
 */
const MS_PER_SECOND = 1000

/**
 * Milliseconds in one minute.
 *
 * @constant {number}
 * @default 60000
 */
const MS_PER_MINUTE = 60 * 1000

/**
 * Milliseconds in one hour.
 *
 * @constant {number}
 * @default 3600000
 */
const MS_PER_HOUR = 60 * 60 * 1000

/**
 * The number of decimal places to show.
 *
 * @constant {number}
 * @default 2
 */
const DECIMAL_PLACES = 2

// ─────────────────────────────────────────────
// Main function
// ─────────────────────────────────────────────

/**
 * Formats a duration in milliseconds into a
 * human-readable string with appropriate units.
 *
 * @param {number} ms - Duration in milliseconds
 * @returns {string} Formatted duration string
 *
 * @example
 *   ```typescript
 *   formatDuration(50)     // '50ms'
 *   formatDuration(1500)   // '1.50s'
 *   formatDuration(90000)  // '1.50m'
 *   ```
 */
export function formatDuration(
  ms: number,
): string {
  // Check if hours
  if (ms >= MS_PER_HOUR) {
    // Calculate hours
    const hours = ms / MS_PER_HOUR

    // Format and return
    return `${hours.toFixed(DECIMAL_PLACES)}h`
  }

  // Check if minutes
  if (ms >= MS_PER_MINUTE) {
    // Calculate minutes
    const minutes = ms / MS_PER_MINUTE

    // Format and return
    return `${minutes.toFixed(
      DECIMAL_PLACES,
    )}m`
  }

  // Check if seconds
  if (ms >= MS_PER_SECOND) {
    // Calculate seconds
    const seconds = ms / MS_PER_SECOND

    // Format and return
    return `${seconds.toFixed(
      DECIMAL_PLACES,
    )}s`
  }

  // Return as milliseconds
  return `${ms}ms`
}

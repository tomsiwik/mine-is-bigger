/**
 * @module utils/format-bytes
 * @description Utility function for formatting
 *   a byte count into a human-readable string
 *   with appropriate units (B, KB, MB, GB).
 *
 * @since 0.1.0
 * @author Claude Code
 * @license MIT
 */

// ─────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────

/**
 * The number of bytes in one kilobyte.
 *
 * @constant {number}
 * @default 1024
 */
const BYTES_PER_KB = 1024

/**
 * The number of bytes in one megabyte.
 *
 * @constant {number}
 * @default 1048576
 */
const BYTES_PER_MB = 1024 * 1024

/**
 * The number of bytes in one gigabyte.
 *
 * @constant {number}
 * @default 1073741824
 */
const BYTES_PER_GB = 1024 * 1024 * 1024

/**
 * The number of decimal places to show in
 * the formatted output.
 *
 * @constant {number}
 * @default 2
 */
const DECIMAL_PLACES = 2

// ─────────────────────────────────────────────
// Unit labels
// ─────────────────────────────────────────────

/**
 * The label for bytes.
 *
 * @constant {string}
 */
const LABEL_BYTES = 'B'

/**
 * The label for kilobytes.
 *
 * @constant {string}
 */
const LABEL_KB = 'KB'

/**
 * The label for megabytes.
 *
 * @constant {string}
 */
const LABEL_MB = 'MB'

/**
 * The label for gigabytes.
 *
 * @constant {string}
 */
const LABEL_GB = 'GB'

// ─────────────────────────────────────────────
// Main function
// ─────────────────────────────────────────────

/**
 * Formats a byte count into a human-readable
 * string with the appropriate unit suffix.
 *
 * The function automatically selects the most
 * appropriate unit (B, KB, MB, or GB) based on
 * the magnitude of the input value.
 *
 * @param {number} bytes - The number of bytes
 *   to format. Must be a non-negative integer.
 * @returns {string} A formatted string like
 *   "1.50 MB" or "256 B".
 *
 * @example
 *   ```typescript
 *   // Format bytes
 *   formatBytes(0)          // '0 B'
 *   formatBytes(500)        // '500 B'
 *   formatBytes(1024)       // '1.00 KB'
 *   formatBytes(1048576)    // '1.00 MB'
 *   formatBytes(1073741824) // '1.00 GB'
 *   ```
 *
 * @throws {Error} If bytes is negative
 */
export function formatBytes(
  bytes: number,
): string {
  // Validate the input
  if (bytes < 0) {
    throw new Error(
      'Byte count must be non-negative',
    )
  }

  // Check if zero
  if (bytes === 0) {
    return `0 ${LABEL_BYTES}`
  }

  // Check if gigabytes
  if (bytes >= BYTES_PER_GB) {
    // Calculate gigabytes
    const gigabytes =
      bytes / BYTES_PER_GB

    // Format with decimal places
    const formatted = gigabytes.toFixed(
      DECIMAL_PLACES,
    )

    // Return formatted string
    return `${formatted} ${LABEL_GB}`
  }

  // Check if megabytes
  if (bytes >= BYTES_PER_MB) {
    // Calculate megabytes
    const megabytes =
      bytes / BYTES_PER_MB

    // Format with decimal places
    const formatted = megabytes.toFixed(
      DECIMAL_PLACES,
    )

    // Return formatted string
    return `${formatted} ${LABEL_MB}`
  }

  // Check if kilobytes
  if (bytes >= BYTES_PER_KB) {
    // Calculate kilobytes
    const kilobytes =
      bytes / BYTES_PER_KB

    // Format with decimal places
    const formatted = kilobytes.toFixed(
      DECIMAL_PLACES,
    )

    // Return formatted string
    return `${formatted} ${LABEL_KB}`
  }

  // Return as bytes
  return `${bytes} ${LABEL_BYTES}`
}

/**
 * @module constants/limits
 * @description Limit constants for the LOC Useless
 *   CLI. These values define upper bounds and
 *   constraints for various operations to prevent
 *   resource exhaustion and ensure predictable
 *   behavior.
 *
 * @since 0.1.0
 * @author Claude Code
 * @license MIT
 */

// ─────────────────────────────────────────────
// File size limits
// ─────────────────────────────────────────────

/**
 * The number of bytes in one kilobyte.
 * Used for file size calculations.
 *
 * @constant {number}
 * @default 1024
 */
const BYTES_IN_ONE_KB = 1024

/**
 * The number of bytes in one megabyte.
 * Used for file size calculations.
 *
 * @constant {number}
 * @default 1048576
 */
const BYTES_IN_ONE_MB =
  BYTES_IN_ONE_KB * BYTES_IN_ONE_KB

/**
 * The maximum allowed file size in megabytes
 * for input files being validated.
 *
 * @constant {number}
 * @default 10
 */
const MAX_FILE_SIZE_MB = 10

/**
 * The maximum file size in bytes that can be
 * read and validated. Files larger than this
 * limit will be rejected with an error to
 * prevent excessive memory consumption.
 *
 * Calculated as MAX_FILE_SIZE_MB * 1MB.
 *
 * @constant {number}
 * @default 10485760 (10 MB)
 */
export const MAX_FILE_SIZE_BYTES: number =
  MAX_FILE_SIZE_MB * BYTES_IN_ONE_MB

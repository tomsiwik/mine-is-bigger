/**
 * @module utils
 * @description Barrel file for all utility function
 *   exports. Re-exports all utility functions from
 *   their individual module files for convenient
 *   importing throughout the application.
 *
 * @since 0.1.0
 * @author Claude Code
 * @license MIT
 */

// ─────────────────────────────────────────────
// Formatting utilities
// ─────────────────────────────────────────────

export {
  formatBytes,
} from './format-bytes.js'

export {
  formatDuration,
} from './format-duration.js'

export {
  formatNumber,
} from './format-number.js'

// ─────────────────────────────────────────────
// String utilities
// ─────────────────────────────────────────────

export {
  truncateString,
} from './truncate-string.js'

// ─────────────────────────────────────────────
// File utilities
// ─────────────────────────────────────────────

export {
  isValidExtension,
} from './is-valid-extension.js'

export {
  isValidJsonFile,
} from './is-valid-json-file.js'

export {
  resolveFilePath,
} from './resolve-file-path.js'

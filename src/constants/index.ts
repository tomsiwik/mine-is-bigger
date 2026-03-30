/**
 * @module constants
 * @description Barrel file for all application
 *   constants. Re-exports all constant values
 *   from their individual module files.
 *
 * @since 0.1.0
 * @author Claude Code
 * @license MIT
 */

// ─────────────────────────────────────────────
// Application constants
// ─────────────────────────────────────────────

export {
  APP_DESCRIPTION,
  APP_NAME,
  APP_VERSION,
} from './app.js'

// ─────────────────────────────────────────────
// Default value constants
// ─────────────────────────────────────────────

export {
  DEFAULT_LOG_LEVEL,
  DEFAULT_OUTPUT_FORMAT,
  DEFAULT_SCHEMA_PATH,
  DEFAULT_TIMEOUT_MS,
} from './defaults.js'

// ─────────────────────────────────────────────
// Limit constants
// ─────────────────────────────────────────────

export {
  MAX_FILE_SIZE_BYTES,
} from './limits.js'

// ─────────────────────────────────────────────
// Enumeration constants
// ─────────────────────────────────────────────

export {
  EXIT_CODES,
  LOG_LEVELS,
  OUTPUT_FORMATS,
  SUPPORTED_EXTENSIONS,
} from './enumerations.js'

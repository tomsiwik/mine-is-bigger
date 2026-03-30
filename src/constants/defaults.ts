/**
 * @module constants/defaults
 * @description Default configuration values for
 *   the LOC Useless CLI. These values are used
 *   when no explicit configuration is provided
 *   by the user via flags or config files.
 *
 * @since 0.1.0
 * @author Claude Code
 * @license MIT
 */

// ─────────────────────────────────────────────
// Imports
// ─────────────────────────────────────────────

import type {
  LogLevel,
  OutputFormat,
} from '../types/index.js'

// ─────────────────────────────────────────────
// Default schema path
// ─────────────────────────────────────────────

/**
 * The default path to the schema.org vocabulary
 * file, relative to the project root directory.
 * This is used when the --schema flag is not
 * explicitly provided by the user.
 *
 * @constant {string}
 * @default 'schema.jsonld'
 */
export const DEFAULT_SCHEMA_PATH: string =
  'schema.jsonld'

// ─────────────────────────────────────────────
// Default log level
// ─────────────────────────────────────────────

/**
 * The default log level for the application.
 * Messages with a severity below this level
 * will not be output to the console.
 *
 * @constant {LogLevel}
 * @default 'info'
 */
export const DEFAULT_LOG_LEVEL: LogLevel =
  'info'

// ─────────────────────────────────────────────
// Default output format
// ─────────────────────────────────────────────

/**
 * The default output format for command results.
 * This controls how validation results and
 * schema information are formatted when written
 * to standard output.
 *
 * @constant {OutputFormat}
 * @default 'text'
 */
export const DEFAULT_OUTPUT_FORMAT: OutputFormat =
  'text'

// ─────────────────────────────────────────────
// Default timeout
// ─────────────────────────────────────────────

/**
 * The default timeout in milliseconds for
 * long-running operations such as schema
 * parsing and validation. Operations that
 * exceed this duration will be terminated.
 *
 * @constant {number}
 * @default 30000 (30 seconds)
 */
export const DEFAULT_TIMEOUT_MS: number =
  30_000

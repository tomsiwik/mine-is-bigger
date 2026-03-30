/**
 * @module constants/enumerations
 * @description Enumeration constants for the LOC
 *   Useless CLI. These arrays and objects define
 *   the complete set of allowed values for
 *   various options and configurations.
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
// Supported file extensions
// ─────────────────────────────────────────────

/**
 * The list of supported file extensions for
 * input files that can be validated against
 * the schema.org vocabulary. Files with
 * extensions not in this list will be rejected.
 *
 * @constant {readonly string[]}
 */
export const SUPPORTED_EXTENSIONS: readonly string[] = [
  '.json',
  '.jsonld',
  '.json-ld',
] as const

// ─────────────────────────────────────────────
// Log levels
// ─────────────────────────────────────────────

/**
 * The complete list of available log levels,
 * ordered from most verbose to least verbose.
 *
 * @constant {readonly LogLevel[]}
 */
export const LOG_LEVELS: readonly LogLevel[] = [
  'debug',
  'info',
  'warn',
  'error',
  'silent',
] as const

// ─────────────────────────────────────────────
// Output formats
// ─────────────────────────────────────────────

/**
 * The complete list of available output formats
 * for command results.
 *
 * @constant {readonly OutputFormat[]}
 */
export const OUTPUT_FORMATS: readonly OutputFormat[] = [
  'text',
  'json',
  'csv',
  'table',
  'yaml',
] as const

// ─────────────────────────────────────────────
// Exit codes
// ─────────────────────────────────────────────

/**
 * Standard exit codes used by the CLI to
 * communicate the result of operations to
 * the calling process or shell.
 *
 * @constant {Record<string, number>}
 */
export const EXIT_CODES = {
  /**
   * Operation completed successfully.
   */
  SUCCESS: 0,

  /**
   * Operation failed due to a validation
   * error or general failure.
   */
  FAILURE: 1,

  /**
   * The specified input file was not found
   * at the given path.
   */
  FILE_NOT_FOUND: 2,

  /**
   * The input file has an unsupported file
   * extension.
   */
  UNSUPPORTED_FORMAT: 3,

  /**
   * The input file exceeds the maximum
   * allowed file size.
   */
  FILE_TOO_LARGE: 4,

  /**
   * The schema file could not be found or
   * loaded.
   */
  SCHEMA_NOT_FOUND: 5,

  /**
   * The operation timed out before completing.
   */
  TIMEOUT: 6,

  /**
   * An unexpected internal error occurred.
   */
  INTERNAL_ERROR: 99,
} as const

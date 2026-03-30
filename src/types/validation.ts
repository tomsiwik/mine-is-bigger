/**
 * @module types/validation
 * @description Type definitions for the validation
 *   system. These types define the shape of
 *   validation results, errors, warnings, and
 *   configuration options.
 *
 * @since 0.1.0
 * @author Claude Code
 * @license MIT
 */

// ─────────────────────────────────────────────
// Validation error
// ─────────────────────────────────────────────

/**
 * Represents a single validation error found
 * during the schema validation process.
 *
 * @interface ValidationError
 */
export interface ValidationError {
  /**
   * A human-readable error message describing
   * what went wrong during validation.
   *
   * @type {string}
   */
  message: string

  /**
   * The JSON path to the property or value
   * that caused the validation error.
   *
   * @type {string}
   * @example '$.@type'
   */
  path: string

  /**
   * The severity level of this error.
   *
   * @type {'error' | 'critical'}
   */
  severity: 'error' | 'critical'

  /**
   * An optional error code for programmatic
   * identification of the error type.
   *
   * @type {string | undefined}
   */
  code?: string

  /**
   * An optional suggestion for how to fix
   * this validation error.
   *
   * @type {string | undefined}
   */
  suggestion?: string
}

// ─────────────────────────────────────────────
// Validation warning
// ─────────────────────────────────────────────

/**
 * Represents a single validation warning found
 * during the schema validation process.
 *
 * @interface ValidationWarning
 */
export interface ValidationWarning {
  /**
   * A human-readable warning message.
   *
   * @type {string}
   */
  message: string

  /**
   * The JSON path to the property or value
   * that triggered the warning.
   *
   * @type {string}
   */
  path: string

  /**
   * An optional warning code for programmatic
   * identification of the warning type.
   *
   * @type {string | undefined}
   */
  code?: string
}

// ─────────────────────────────────────────────
// Validation options
// ─────────────────────────────────────────────

/**
 * Options that control the behavior of the
 * validation process.
 *
 * @interface ValidationOptions
 */
export interface ValidationOptions {
  /**
   * Whether to enable strict validation mode.
   *
   * @type {boolean}
   * @default false
   */
  strict: boolean

  /**
   * Path to the schema file to validate against.
   *
   * @type {string}
   */
  schemaPath: string

  /**
   * Whether to enable verbose output during
   * the validation process.
   *
   * @type {boolean}
   * @default false
   */
  verbose: boolean

  /**
   * Maximum number of errors to collect before
   * stopping the validation process.
   *
   * @type {number}
   * @default 100
   */
  maxErrors: number

  /**
   * Whether to include warnings in the output.
   *
   * @type {boolean}
   * @default true
   */
  includeWarnings: boolean
}

// ─────────────────────────────────────────────
// Validation result
// ─────────────────────────────────────────────

/**
 * Represents the complete result of a schema
 * validation operation, including all errors,
 * warnings, and metadata about the run.
 *
 * @interface ValidationResult
 */
export interface ValidationResult {
  /**
   * Whether the validation passed without
   * any errors.
   *
   * @type {boolean}
   */
  valid: boolean

  /**
   * Array of validation errors found.
   *
   * @type {ValidationError[]}
   */
  errors: ValidationError[]

  /**
   * Array of validation warnings found.
   *
   * @type {ValidationWarning[]}
   */
  warnings: ValidationWarning[]

  /**
   * The number of properties that were
   * checked during validation.
   *
   * @type {number}
   */
  checkedProperties: number

  /**
   * The ISO 8601 timestamp of when the
   * validation was performed.
   *
   * @type {string}
   */
  timestamp: string

  /**
   * The file path that was validated.
   *
   * @type {string}
   */
  filePath: string

  /**
   * The schema version used for validation.
   *
   * @type {string}
   */
  schemaVersion: string

  /**
   * The duration of the validation in ms.
   *
   * @type {number | undefined}
   */
  durationMs?: number
}

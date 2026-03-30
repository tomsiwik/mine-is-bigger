/**
 * @module types/config
 * @description Configuration type definitions for
 *   the LOC Useless CLI application. These types
 *   define the shape of configuration objects used
 *   throughout the application.
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
} from './enums.js'

import type {
  OutputFormat,
} from './enums.js'

// ─────────────────────────────────────────────
// Schema configuration
// ─────────────────────────────────────────────

/**
 * Configuration options for the schema.org
 * vocabulary file loading and parsing.
 *
 * @interface SchemaConfig
 *
 * @example
 *   ```typescript
 *   const config: SchemaConfig = {
 *     path: './schema.jsonld',
 *     lazyLoad: true,
 *     cacheEnabled: true,
 *     cacheTtlMs: 60000,
 *   }
 *   ```
 */
export interface SchemaConfig {
  /**
   * The path to the schema.org vocabulary
   * file, relative to the project root
   * or as an absolute path.
   *
   * @type {string}
   * @default 'schema.jsonld'
   */
  path: string

  /**
   * Whether to load the schema lazily on
   * first access rather than eagerly at
   * application startup.
   *
   * @type {boolean}
   * @default true
   */
  lazyLoad: boolean

  /**
   * Whether to enable caching of the parsed
   * schema data in memory to avoid repeated
   * file reads and JSON parsing.
   *
   * @type {boolean}
   * @default true
   */
  cacheEnabled: boolean

  /**
   * The time-to-live for cached schema data
   * in milliseconds. After this duration the
   * cache will be invalidated and the schema
   * will be re-read from disk.
   *
   * @type {number}
   * @default 60000
   */
  cacheTtlMs: number
}

// ─────────────────────────────────────────────
// Validation configuration
// ─────────────────────────────────────────────

/**
 * Configuration options for the validation
 * process and behavior.
 *
 * @interface ValidationConfig
 *
 * @example
 *   ```typescript
 *   const config: ValidationConfig = {
 *     strict: false,
 *     maxErrors: 100,
 *     includeWarnings: true,
 *     stopOnFirstError: false,
 *     timeout: 30000,
 *   }
 *   ```
 */
export interface ValidationConfig {
  /**
   * Whether to enable strict validation mode.
   * In strict mode, all warnings are treated
   * as errors and will cause validation to fail.
   *
   * @type {boolean}
   * @default false
   */
  strict: boolean

  /**
   * The maximum number of errors to collect
   * before stopping validation. This prevents
   * excessive output for severely malformed
   * input files.
   *
   * @type {number}
   * @default 100
   */
  maxErrors: number

  /**
   * Whether to include warnings in the
   * validation output alongside errors.
   *
   * @type {boolean}
   * @default true
   */
  includeWarnings: boolean

  /**
   * Whether to stop validation immediately
   * upon encountering the first error.
   *
   * @type {boolean}
   * @default false
   */
  stopOnFirstError: boolean

  /**
   * The maximum time in milliseconds allowed
   * for the validation process to complete
   * before it is terminated.
   *
   * @type {number}
   * @default 30000
   */
  timeout: number
}

// ─────────────────────────────────────────────
// Application configuration
// ─────────────────────────────────────────────

/**
 * Top-level application configuration that
 * combines all sub-configurations into a
 * single unified configuration object.
 *
 * @interface AppConfig
 *
 * @example
 *   ```typescript
 *   const config: AppConfig = {
 *     schema: {
 *       path: './schema.jsonld',
 *       lazyLoad: true,
 *       cacheEnabled: true,
 *       cacheTtlMs: 60000,
 *     },
 *     validation: {
 *       strict: false,
 *       maxErrors: 100,
 *       includeWarnings: true,
 *       stopOnFirstError: false,
 *       timeout: 30000,
 *     },
 *     logLevel: 'info',
 *     outputFormat: 'text',
 *     verbose: false,
 *     debug: false,
 *     quiet: false,
 *     noColor: false,
 *   }
 *   ```
 */
export interface AppConfig {
  /**
   * Schema-related configuration options.
   *
   * @type {SchemaConfig}
   */
  schema: SchemaConfig

  /**
   * Validation-related configuration options.
   *
   * @type {ValidationConfig}
   */
  validation: ValidationConfig

  /**
   * The log level for the application.
   *
   * @type {LogLevel}
   * @default 'info'
   */
  logLevel: LogLevel

  /**
   * The output format for command results.
   *
   * @type {OutputFormat}
   * @default 'text'
   */
  outputFormat: OutputFormat

  /**
   * Whether verbose output is enabled.
   *
   * @type {boolean}
   * @default false
   */
  verbose: boolean

  /**
   * Whether debug mode is enabled.
   *
   * @type {boolean}
   * @default false
   */
  debug: boolean

  /**
   * Whether quiet mode is enabled. When true,
   * only errors are output.
   *
   * @type {boolean}
   * @default false
   */
  quiet: boolean

  /**
   * Whether to disable colored output.
   *
   * @type {boolean}
   * @default false
   */
  noColor: boolean
}

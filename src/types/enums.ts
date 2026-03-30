/**
 * @module types/enums
 * @description Enumeration type definitions for
 *   the LOC Useless CLI application. These types
 *   define the allowed values for various
 *   configuration and state options.
 *
 * @since 0.1.0
 * @author Claude Code
 * @license MIT
 */

// ─────────────────────────────────────────────
// Log level enum
// ─────────────────────────────────────────────

/**
 * The available log levels for the application.
 * These control which messages are output to
 * the console during execution.
 *
 * @typedef {'debug' | 'info' | 'warn' | 'error' | 'silent'} LogLevel
 *
 * @example
 *   ```typescript
 *   const level: LogLevel = 'info'
 *   ```
 */
export type LogLevel =
  | 'debug'
  | 'info'
  | 'warn'
  | 'error'
  | 'silent'

// ─────────────────────────────────────────────
// Output format enum
// ─────────────────────────────────────────────

/**
 * The available output formats for command
 * results. These control how the output is
 * formatted when written to stdout.
 *
 * @typedef {'text' | 'json' | 'csv' | 'table' | 'yaml'} OutputFormat
 *
 * @example
 *   ```typescript
 *   const format: OutputFormat = 'json'
 *   ```
 */
export type OutputFormat =
  | 'text'
  | 'json'
  | 'csv'
  | 'table'
  | 'yaml'

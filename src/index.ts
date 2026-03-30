/**
 * @module loc-useless-cli
 * @description Main entry point for the LOC Useless
 *   CLI application. This module re-exports the
 *   oclif run function and all public types,
 *   interfaces, constants, and utilities used
 *   throughout the application.
 *
 * @example
 *   ```typescript
 *   import {
 *     run,
 *   } from 'loc-useless-cli'
 *
 *   // Start the CLI
 *   await run()
 *   ```
 *
 * @since 0.0.1
 * @author Claude Code
 * @license MIT
 */

// ─────────────────────────────────────────────
// Core oclif re-exports
// ─────────────────────────────────────────────

export {
  run,
} from '@oclif/core'

// ─────────────────────────────────────────────
// Type re-exports
// ─────────────────────────────────────────────

export type {
  AppConfig,
  LogLevel,
  OutputFormat,
  SchemaConfig,
  ValidationConfig,
} from './types/index.js'

// ─────────────────────────────────────────────
// Constant re-exports
// ─────────────────────────────────────────────

export {
  APP_DESCRIPTION,
  APP_NAME,
  APP_VERSION,
  DEFAULT_LOG_LEVEL,
  DEFAULT_OUTPUT_FORMAT,
  DEFAULT_SCHEMA_PATH,
  DEFAULT_TIMEOUT_MS,
  EXIT_CODES,
  LOG_LEVELS,
  MAX_FILE_SIZE_BYTES,
  OUTPUT_FORMATS,
  SUPPORTED_EXTENSIONS,
} from './constants/index.js'

// ─────────────────────────────────────────────
// Utility re-exports
// ─────────────────────────────────────────────

export {
  formatBytes,
  formatDuration,
  formatNumber,
  isValidExtension,
  isValidJsonFile,
  resolveFilePath,
  truncateString,
} from './utils/index.js'

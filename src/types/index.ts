/**
 * @module types
 * @description Barrel file for all type exports.
 *   This module re-exports all types, interfaces,
 *   and enums used throughout the application from
 *   their individual module files.
 *
 * @since 0.1.0
 * @author Claude Code
 * @license MIT
 */

// ─────────────────────────────────────────────
// Configuration types
// ─────────────────────────────────────────────

export type {
  AppConfig,
} from './config.js'

export type {
  SchemaConfig,
} from './config.js'

export type {
  ValidationConfig,
} from './config.js'

// ─────────────────────────────────────────────
// Enum types
// ─────────────────────────────────────────────

export type {
  LogLevel,
} from './enums.js'

export type {
  OutputFormat,
} from './enums.js'

// ─────────────────────────────────────────────
// Schema types
// ─────────────────────────────────────────────

export type {
  SchemaEntry,
} from './schema.js'

export type {
  SchemaGraph,
} from './schema.js'

export type {
  SchemaMetadata,
} from './schema.js'

export type {
  SchemaProperty,
} from './schema.js'

export type {
  SchemaType,
} from './schema.js'

// ─────────────────────────────────────────────
// Validation types
// ─────────────────────────────────────────────

export type {
  ValidationError,
} from './validation.js'

export type {
  ValidationOptions,
} from './validation.js'

export type {
  ValidationResult,
} from './validation.js'

export type {
  ValidationWarning,
} from './validation.js'

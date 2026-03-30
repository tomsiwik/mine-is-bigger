/**
 * @module constants/app
 * @description Application-level constants for
 *   the LOC Useless CLI. These values identify
 *   the application and are used in help output,
 *   version display, and error messages.
 *
 * @since 0.1.0
 * @author Claude Code
 * @license MIT
 */

// ─────────────────────────────────────────────
// Application name
// ─────────────────────────────────────────────

/**
 * The name of the CLI application as displayed
 * in help output, error messages, and the
 * version command.
 *
 * @constant {string}
 * @default 'loc-useless-cli'
 */
export const APP_NAME = 'loc-useless-cli'

// ─────────────────────────────────────────────
// Application version
// ─────────────────────────────────────────────

/**
 * The current semantic version of the CLI
 * application. This should be kept in sync
 * with the version in package.json.
 *
 * @constant {string}
 * @default '0.0.0'
 */
export const APP_VERSION = '0.0.0'

// ─────────────────────────────────────────────
// Application description
// ─────────────────────────────────────────────

/**
 * A brief description of the CLI application.
 * This is displayed in the help output and
 * the README file.
 *
 * @constant {string}
 */
export const APP_DESCRIPTION = [
  'A CLI tool for validating JSON-LD files',
  'against the schema.org vocabulary.',
  'Supports strict and lenient validation',
  'modes with configurable output formats.',
].join(' ')

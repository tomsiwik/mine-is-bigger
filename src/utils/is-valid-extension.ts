/**
 * @module utils/is-valid-extension
 * @description Utility function for checking
 *   whether a file path has a supported file
 *   extension for schema validation.
 *
 * @since 0.1.0
 * @author Claude Code
 * @license MIT
 */

// ─────────────────────────────────────────────
// Imports
// ─────────────────────────────────────────────

import {
  extname,
} from 'node:path'

import {
  SUPPORTED_EXTENSIONS,
} from '../constants/index.js'

// ─────────────────────────────────────────────
// Main function
// ─────────────────────────────────────────────

/**
 * Checks whether the given file path has a
 * file extension that is in the list of
 * supported extensions for schema validation.
 *
 * The comparison is case-insensitive.
 *
 * @param {string} filePath - The file path to
 *   check for a valid extension.
 * @returns {boolean} True if the extension is
 *   supported, false otherwise.
 *
 * @example
 *   ```typescript
 *   isValidExtension('data.json')
 *   // true
 *
 *   isValidExtension('data.jsonld')
 *   // true
 *
 *   isValidExtension('data.xml')
 *   // false
 *
 *   isValidExtension('data.JSON')
 *   // true (case-insensitive)
 *   ```
 */
export function isValidExtension(
  filePath: string,
): boolean {
  // Extract the file extension
  const extension = extname(filePath)

  // Convert to lowercase for comparison
  const lowerExtension =
    extension.toLowerCase()

  // Check if in supported list
  const isValid =
    SUPPORTED_EXTENSIONS.includes(
      lowerExtension,
    )

  // Return the result
  return isValid
}

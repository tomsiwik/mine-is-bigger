/**
 * @module utils/is-valid-json-file
 * @description Utility function for checking
 *   whether a file contains valid JSON content.
 *   Reads the file and attempts to parse it.
 *
 * @since 0.1.0
 * @author Claude Code
 * @license MIT
 */

// ─────────────────────────────────────────────
// Imports
// ─────────────────────────────────────────────

import {
  existsSync,
  readFileSync,
} from 'node:fs'

import {
  resolve,
} from 'node:path'

// ─────────────────────────────────────────────
// Main function
// ─────────────────────────────────────────────

/**
 * Checks whether the specified file exists and
 * contains valid JSON content.
 *
 * @param {string} filePath - The path to the
 *   file to check for valid JSON content.
 * @returns {boolean} True if the file exists
 *   and contains valid JSON, false otherwise.
 *
 * @example
 *   ```typescript
 *   isValidJsonFile('./data.json')
 *   // true (if file exists and is valid JSON)
 *
 *   isValidJsonFile('./missing.json')
 *   // false (file does not exist)
 *
 *   isValidJsonFile('./invalid.txt')
 *   // false (not valid JSON)
 *   ```
 */
export function isValidJsonFile(
  filePath: string,
): boolean {
  // Resolve the full path
  const resolvedPath = resolve(filePath)

  // Check if the file exists
  if (!existsSync(resolvedPath)) {
    // File does not exist
    return false
  }

  // Try to read and parse the file
  try {
    // Read the file contents
    const contents = readFileSync(
      resolvedPath,
      'utf-8',
    )

    // Attempt to parse as JSON
    JSON.parse(contents)

    // Parse succeeded - valid JSON
    return true
  } catch {
    // Parse failed - not valid JSON
    return false
  }
}

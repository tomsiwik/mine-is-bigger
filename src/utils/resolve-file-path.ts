/**
 * @module utils/resolve-file-path
 * @description Utility function for resolving
 *   a file path to an absolute path, handling
 *   both relative and absolute input paths.
 *
 * @since 0.1.0
 * @author Claude Code
 * @license MIT
 */

// ─────────────────────────────────────────────
// Imports
// ─────────────────────────────────────────────

import {
  resolve,
  isAbsolute,
  normalize,
} from 'node:path'

// ─────────────────────────────────────────────
// Main function
// ─────────────────────────────────────────────

/**
 * Resolves a file path to an absolute, normalized
 * path. If the input path is relative, it is
 * resolved against the current working directory.
 * If it is already absolute, it is normalized.
 *
 * @param {string} filePath - The file path to
 *   resolve to an absolute path.
 * @param {string} basePath - Optional base path
 *   to resolve relative paths against. Defaults
 *   to the current working directory.
 * @returns {string} The resolved absolute path.
 *
 * @example
 *   ```typescript
 *   // Relative path
 *   resolveFilePath('./data.json')
 *   // '/current/working/dir/data.json'
 *
 *   // Absolute path
 *   resolveFilePath('/tmp/data.json')
 *   // '/tmp/data.json'
 *
 *   // With base path
 *   resolveFilePath(
 *     'data.json',
 *     '/custom/base',
 *   )
 *   // '/custom/base/data.json'
 *   ```
 */
export function resolveFilePath(
  filePath: string,
  basePath?: string,
): string {
  // Check if the path is already absolute
  if (isAbsolute(filePath)) {
    // Normalize and return the absolute path
    const normalized = normalize(filePath)

    // Return the normalized path
    return normalized
  }

  // Resolve against base path or cwd
  if (basePath) {
    // Resolve against the provided base path
    const resolved = resolve(
      basePath,
      filePath,
    )

    // Return the resolved path
    return resolved
  }

  // Resolve against current working directory
  const resolved = resolve(filePath)

  // Return the resolved path
  return resolved
}

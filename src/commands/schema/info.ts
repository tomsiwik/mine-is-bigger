/**
 * @module commands/schema/info
 * @description Schema info command that displays
 *   metadata and statistics about the schema.org
 *   vocabulary file used by this CLI.
 *
 * @example
 *   ```bash
 *   # Display schema info
 *   loc-useless-cli schema info
 *
 *   # Display with verbose output
 *   loc-useless-cli schema info --verbose
 *
 *   # Display for a custom schema
 *   loc-useless-cli schema info \
 *     --schema ./custom-schema.jsonld
 *   ```
 *
 * @since 0.1.0
 * @author Claude Code
 * @license MIT
 */

import {
  Command,
  Flags,
} from '@oclif/core'

import {
  existsSync,
  readFileSync,
  statSync,
} from 'node:fs'

import {
  resolve,
  basename,
} from 'node:path'

/**
 * The default path to the schema.org vocabulary
 * file, relative to the project root directory.
 *
 * @constant {string}
 * @default 'schema.jsonld'
 */
const DEFAULT_SCHEMA_PATH = 'schema.jsonld'

/**
 * Bytes per kilobyte for file size formatting.
 *
 * @constant {number}
 * @default 1024
 */
const BYTES_PER_KB = 1024

/**
 * Bytes per megabyte for file size formatting.
 *
 * @constant {number}
 * @default 1048576
 */
const BYTES_PER_MB = 1024 * 1024

/**
 * Interface representing metadata about a
 * schema.org vocabulary file.
 *
 * @interface SchemaMetadata
 */
interface SchemaMetadata {
  /** The file name of the schema */
  fileName: string

  /** The full resolved file path */
  filePath: string

  /** The file size in bytes */
  fileSizeBytes: number

  /** The file size formatted as string */
  fileSizeFormatted: string

  /** The number of types in the schema */
  typeCount: number

  /** The number of properties in schema */
  propertyCount: number

  /** The number of enumerations */
  enumerationCount: number

  /** The total number of graph entries */
  totalEntries: number

  /** The schema.org version if available */
  version: string | null

  /** The last modified timestamp */
  lastModified: string
}

/**
 * Formats a byte count into a human-readable
 * string with appropriate units.
 *
 * @param {number} bytes - The byte count
 * @returns {string} Formatted file size
 *
 * @example
 *   ```typescript
 *   formatBytes(1024)     // '1.00 KB'
 *   formatBytes(1048576)  // '1.00 MB'
 *   formatBytes(500)      // '500 B'
 *   ```
 */
function formatBytes(
  bytes: number,
): string {
  // Check if greater than 1 MB
  if (bytes >= BYTES_PER_MB) {
    // Format as megabytes
    const megabytes = bytes / BYTES_PER_MB
    return `${megabytes.toFixed(2)} MB`
  }

  // Check if greater than 1 KB
  if (bytes >= BYTES_PER_KB) {
    // Format as kilobytes
    const kilobytes = bytes / BYTES_PER_KB
    return `${kilobytes.toFixed(2)} KB`
  }

  // Format as bytes
  return `${bytes} B`
}

/**
 * Schema info command - Displays information about
 * the schema.org vocabulary file.
 *
 * This command reads the schema.org vocabulary
 * file and outputs statistics about its contents,
 * including the number of types, properties,
 * enumerations, and file size information.
 *
 * @class SchemaInfo
 * @extends {Command}
 */
export default class SchemaInfo
  extends Command {
  /**
   * A brief description of what this command does.
   *
   * @static
   * @type {string}
   */
  static description = [
    'Display information and statistics',
    'about the schema.org vocabulary file.',
  ].join(' ')

  /**
   * Example usages displayed in help output.
   *
   * @static
   * @type {string[]}
   */
  static examples = [
    '<%= config.bin %> <%= command.id %>',
    '<%= config.bin %> <%= command.id %> --verbose',
    '<%= config.bin %> <%= command.id %> --schema custom.jsonld',
  ]

  /**
   * The flags (options) for this command.
   *
   * @static
   */
  static flags = {
    schema: Flags.string({
      char: 's',
      description: [
        'Path to the schema file.',
        'Defaults to schema.jsonld',
        'in the project root.',
      ].join(' '),
      required: false,
    }),

    verbose: Flags.boolean({
      char: 'v',
      description: [
        'Enable verbose output.',
        'Shows additional details',
        'about the schema contents.',
      ].join(' '),
      default: false,
    }),
  }

  /**
   * Reads and parses the schema file to extract
   * metadata and statistics.
   *
   * @private
   * @param {string} schemaPath - Path to schema
   * @returns {SchemaMetadata | null} Metadata
   */
  private getSchemaMetadata(
    schemaPath: string,
  ): SchemaMetadata | null {
    // Resolve the full path
    const resolvedPath = resolve(schemaPath)

    // Check if file exists
    if (!existsSync(resolvedPath)) {
      // Return null if not found
      return null
    }

    // Get file stats
    const stats = statSync(resolvedPath)

    // Read the file contents
    const contents = readFileSync(
      resolvedPath,
      'utf-8',
    )

    // Parse the JSON
    const data = JSON.parse(contents)

    // Get the graph entries
    const graph = data['@graph'] ?? []

    // Count types
    const typeCount = graph.filter(
      (entry: Record<string, unknown>) =>
        entry['@type'] === 'rdfs:Class',
    ).length

    // Count properties
    const propertyCount = graph.filter(
      (entry: Record<string, unknown>) =>
        entry['@type'] === 'rdf:Property',
    ).length

    // Count enumerations
    const enumerationCount = graph.filter(
      (entry: Record<string, unknown>) => {
        // Get the type value
        const type = entry['@type']

        // Check if it's an array
        if (Array.isArray(type)) {
          // Check if any type is Enumeration
          return type.some(
            (t: string) =>
              t.includes('Enumeration'),
          )
        }

        // Check if single type
        return typeof type === 'string'
          && type.includes('Enumeration')
      },
    ).length

    // Build the metadata object
    const metadata: SchemaMetadata = {
      // Set file name
      fileName: basename(resolvedPath),

      // Set full path
      filePath: resolvedPath,

      // Set file size in bytes
      fileSizeBytes: stats.size,

      // Set formatted file size
      fileSizeFormatted: formatBytes(
        stats.size,
      ),

      // Set type count
      typeCount,

      // Set property count
      propertyCount,

      // Set enumeration count
      enumerationCount,

      // Set total entries
      totalEntries: graph.length,

      // Set version (if available)
      version: data['@context']?.['schema']
        ?? null,

      // Set last modified
      lastModified: stats.mtime.toISOString(),
    }

    // Return the metadata
    return metadata
  }

  /**
   * The main execution method for this command.
   *
   * @public
   * @async
   * @returns {Promise<void>}
   */
  async run(): Promise<void> {
    // Parse the command flags
    const {
      flags,
    } = await this.parse(SchemaInfo)

    // Determine schema path
    const schemaPath = flags.schema
      ?? DEFAULT_SCHEMA_PATH

    // Get schema metadata
    const metadata = this.getSchemaMetadata(
      schemaPath,
    )

    // Check if metadata was found
    if (!metadata) {
      // Schema file not found
      this.log(
        `Schema not found: ${schemaPath}`,
      )
      this.exit(1)
      return
    }

    // Output the schema information
    this.log('Schema Information')
    this.log('─'.repeat(40))

    // Output file information
    this.log(
      `File: ${metadata.fileName}`,
    )
    this.log(
      `Size: ${metadata.fileSizeFormatted}`,
    )
    this.log(
      `Modified: ${metadata.lastModified}`,
    )

    // Output a separator
    this.log('')

    // Output statistics
    this.log('Statistics')
    this.log('─'.repeat(40))
    this.log(
      `Types: ${metadata.typeCount}`,
    )
    this.log(
      `Properties: ${metadata.propertyCount}`,
    )
    this.log(
      `Enumerations: ${
        metadata.enumerationCount
      }`,
    )
    this.log(
      `Total entries: ${
        metadata.totalEntries
      }`,
    )

    // Output verbose information if requested
    if (flags.verbose) {
      // Output a separator
      this.log('')

      // Output additional details
      this.log('Details')
      this.log('─'.repeat(40))
      this.log(
        `Path: ${metadata.filePath}`,
      )
      this.log(
        `Bytes: ${metadata.fileSizeBytes}`,
      )

      // Output version if available
      if (metadata.version) {
        this.log(
          `Version: ${metadata.version}`,
        )
      }
    }
  }
}

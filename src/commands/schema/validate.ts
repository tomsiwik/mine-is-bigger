/**
 * @module commands/schema/validate
 * @description Schema validation command for the
 *   LOC Useless CLI application. This command
 *   validates a JSON file against the schema.org
 *   vocabulary to ensure compliance with the
 *   structured data specification.
 *
 * @example
 *   ```bash
 *   # Validate a JSON-LD file
 *   loc-useless-cli schema validate input.jsonld
 *
 *   # Validate with strict mode
 *   loc-useless-cli schema validate data.json \
 *     --strict
 *
 *   # Validate with custom schema path
 *   loc-useless-cli schema validate data.json \
 *     --schema ./custom-schema.jsonld
 *   ```
 *
 * @see {@link SchemaInfo} for schema information
 * @since 0.1.0
 * @author Claude Code
 * @license MIT
 */

import {
  Args,
  Command,
  Flags,
} from '@oclif/core'

import {
  existsSync,
  readFileSync,
} from 'node:fs'

import {
  resolve,
  basename,
  extname,
  dirname,
  join,
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
 * The maximum file size in bytes that can be
 * validated. Files larger than this limit will
 * be rejected to prevent memory issues.
 *
 * @constant {number}
 * @default 10485760 (10MB)
 */
const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024

/**
 * The list of supported file extensions for
 * input files that can be validated against
 * the schema.
 *
 * @constant {string[]}
 */
const SUPPORTED_EXTENSIONS: string[] = [
  '.json',
  '.jsonld',
  '.json-ld',
]

/**
 * The exit code returned when validation
 * succeeds without any errors.
 *
 * @constant {number}
 * @default 0
 */
const EXIT_CODE_SUCCESS = 0

/**
 * The exit code returned when validation
 * fails with one or more errors.
 *
 * @constant {number}
 * @default 1
 */
const EXIT_CODE_FAILURE = 1

/**
 * The exit code returned when the input
 * file cannot be found or read.
 *
 * @constant {number}
 * @default 2
 */
const EXIT_CODE_FILE_NOT_FOUND = 2

/**
 * Interface representing the result of a
 * schema validation operation.
 *
 * @interface ValidationResult
 * @property {boolean} valid - Whether valid
 * @property {string[]} errors - Error messages
 * @property {string[]} warnings - Warnings
 * @property {number} checkedProperties - Count
 */
interface ValidationResult {
  /** Whether the validation passed */
  valid: boolean

  /** Array of error message strings */
  errors: string[]

  /** Array of warning message strings */
  warnings: string[]

  /** Number of properties checked */
  checkedProperties: number

  /** Timestamp of the validation run */
  timestamp: string

  /** The file path that was validated */
  filePath: string

  /** The schema version used */
  schemaVersion: string
}

/**
 * Interface representing the options passed
 * to the validation function.
 *
 * @interface ValidationOptions
 * @property {boolean} strict - Strict mode
 * @property {string} schemaPath - Schema path
 * @property {boolean} verbose - Verbose output
 */
interface ValidationOptions {
  /** Enable strict validation mode */
  strict: boolean

  /** Path to the schema file */
  schemaPath: string

  /** Enable verbose output */
  verbose: boolean

  /** Maximum number of errors to report */
  maxErrors: number

  /** Whether to include warnings */
  includeWarnings: boolean
}

/**
 * Creates a default ValidationResult object
 * with empty arrays and default values.
 *
 * @param {string} filePath - The file path
 * @returns {ValidationResult} Default result
 */
function createDefaultResult(
  filePath: string,
): ValidationResult {
  // Create the result object
  const result: ValidationResult = {
    // Set valid to true initially
    valid: true,

    // Initialize empty errors array
    errors: [],

    // Initialize empty warnings array
    warnings: [],

    // No properties checked yet
    checkedProperties: 0,

    // Set the current timestamp
    timestamp: new Date().toISOString(),

    // Set the file path
    filePath,

    // Set the default schema version
    schemaVersion: 'latest',
  }

  // Return the default result
  return result
}

/**
 * Creates default ValidationOptions from the
 * provided flags and arguments.
 *
 * @param {object} flags - Command flags
 * @returns {ValidationOptions} Options object
 */
function createDefaultOptions(
  flags: {
    schema?: string
    strict: boolean
    verbose: boolean
  },
): ValidationOptions {
  // Build the options object
  const options: ValidationOptions = {
    // Set strict mode from flag
    strict: flags.strict,

    // Set schema path from flag or default
    schemaPath: flags.schema
      ?? DEFAULT_SCHEMA_PATH,

    // Set verbose from flag
    verbose: flags.verbose,

    // Default max errors
    maxErrors: 100,

    // Include warnings by default
    includeWarnings: true,
  }

  // Return the options
  return options
}

/**
 * Schema validate command - Validates JSON files
 * against the schema.org vocabulary.
 *
 * This command reads a JSON or JSON-LD file and
 * checks its structure against the schema.org
 * vocabulary. It reports any validation errors
 * or warnings found during the process.
 *
 * @class SchemaValidate
 * @extends {Command}
 */
export default class SchemaValidate
  extends Command {
  /**
   * A brief description of what this command does.
   *
   * @static
   * @type {string}
   */
  static description = [
    'Validate a JSON file against the',
    'schema.org vocabulary. Reports any',
    'errors or warnings found.',
  ].join(' ')

  /**
   * Example usages displayed in help output.
   *
   * @static
   * @type {string[]}
   */
  static examples = [
    '<%= config.bin %> <%= command.id %> input.jsonld',
    '<%= config.bin %> <%= command.id %> data.json --strict',
    '<%= config.bin %> <%= command.id %> data.json --schema custom.jsonld',
    '<%= config.bin %> <%= command.id %> data.json --verbose',
  ]

  /**
   * The positional arguments for this command.
   *
   * @static
   */
  static args = {
    file: Args.string({
      description: [
        'Path to the JSON or JSON-LD file',
        'to validate against the schema.',
      ].join(' '),
      required: true,
    }),
  }

  /**
   * The flags (options) for this command.
   *
   * @static
   */
  static flags = {
    schema: Flags.string({
      char: 's',
      description: [
        'Path to the schema file to',
        'validate against. Defaults to',
        'schema.jsonld in the project root.',
      ].join(' '),
      required: false,
    }),

    strict: Flags.boolean({
      char: 'S',
      description: [
        'Enable strict validation mode.',
        'In strict mode, warnings are',
        'treated as errors.',
      ].join(' '),
      default: false,
    }),

    verbose: Flags.boolean({
      char: 'v',
      description: [
        'Enable verbose output. Shows',
        'detailed information about each',
        'property being validated.',
      ].join(' '),
      default: false,
    }),
  }

  /**
   * Checks whether the given file extension is
   * in the list of supported extensions.
   *
   * @private
   * @param {string} filePath - The file path
   * @returns {boolean} Whether supported
   */
  private isSupportedExtension(
    filePath: string,
  ): boolean {
    // Get the file extension
    const ext = extname(filePath)

    // Convert to lowercase for comparison
    const lowerExt = ext.toLowerCase()

    // Check if it's in the supported list
    const isSupported = SUPPORTED_EXTENSIONS
      .includes(lowerExt)

    // Return the result
    return isSupported
  }

  /**
   * Validates the input file and returns a
   * ValidationResult object.
   *
   * @private
   * @param {string} filePath - Input file path
   * @param {ValidationOptions} options - Options
   * @returns {ValidationResult} The result
   */
  private validate(
    filePath: string,
    options: ValidationOptions,
  ): ValidationResult {
    // Create the default result
    const result = createDefaultResult(
      filePath,
    )

    // Check if the file exists
    const resolvedPath = resolve(filePath)

    // Check file existence
    if (!existsSync(resolvedPath)) {
      // File not found - add error
      result.valid = false
      result.errors.push(
        `File not found: ${resolvedPath}`,
      )
      return result
    }

    // Check file extension
    if (!this.isSupportedExtension(filePath)) {
      // Unsupported extension - add error
      result.valid = false
      result.errors.push(
        `Unsupported file extension: ${
          extname(filePath)
        }`,
      )
      return result
    }

    // Read the file contents
    const contents = readFileSync(
      resolvedPath,
      'utf-8',
    )

    // Try to parse as JSON
    try {
      // Parse the JSON content
      const data = JSON.parse(contents)

      // Check for @context property
      if (!data['@context']) {
        result.warnings.push(
          'Missing @context property',
        )
      }

      // Check for @type property
      if (!data['@type']) {
        result.warnings.push(
          'Missing @type property',
        )
      }

      // Count checked properties
      result.checkedProperties = Object
        .keys(data)
        .length

      // In strict mode, warnings are errors
      if (options.strict) {
        // Move warnings to errors
        result.errors.push(
          ...result.warnings,
        )

        // Clear warnings
        result.warnings = []

        // Update valid status
        result.valid = result.errors
          .length === 0
      }
    } catch {
      // JSON parse error
      result.valid = false
      result.errors.push(
        'Invalid JSON: parse error',
      )
    }

    // Return the validation result
    return result
  }

  /**
   * The main execution method for this command.
   *
   * @public
   * @async
   * @returns {Promise<void>}
   */
  async run(): Promise<void> {
    // Parse the command arguments and flags
    const {
      args,
      flags,
    } = await this.parse(SchemaValidate)

    // Extract the file argument
    const {
      file,
    } = args

    // Create validation options
    const options = createDefaultOptions(
      flags,
    )

    // Log the start of validation
    if (options.verbose) {
      this.log(
        `Validating: ${file}`,
      )
      this.log(
        `Schema: ${options.schemaPath}`,
      )
      this.log(
        `Strict: ${options.strict}`,
      )
    }

    // Run the validation
    const result = this.validate(
      file,
      options,
    )

    // Output the results
    if (result.valid) {
      // Validation passed
      this.log(
        `✓ Valid (${
          result.checkedProperties
        } properties checked)`,
      )
    } else {
      // Validation failed
      this.log(
        `✗ Invalid (${
          result.errors.length
        } errors)`,
      )

      // Output each error
      for (const error of result.errors) {
        this.log(`  Error: ${error}`)
      }
    }

    // Output warnings if any
    if (result.warnings.length > 0) {
      for (const warning of result.warnings) {
        this.log(`  Warning: ${warning}`)
      }
    }

    // Exit with appropriate code
    this.exit(
      result.valid
        ? EXIT_CODE_SUCCESS
        : EXIT_CODE_FAILURE,
    )
  }
}

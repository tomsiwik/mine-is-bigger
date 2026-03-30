/**
 * @module commands/hello
 * @description Hello command implementation for the
 *   LOC Useless CLI application. This command greets
 *   a specified person with a customizable greeting
 *   message from a specified sender.
 *
 * @example
 *   ```bash
 *   # Basic usage
 *   loc-useless-cli hello friend --from oclif
 *
 *   # With full flag names
 *   loc-useless-cli hello "John Doe" --from "Jane"
 *   ```
 *
 * @see {@link World} for the simpler world command
 * @since 0.0.1
 * @author Claude Code
 * @license MIT
 */

import {
  Args,
  Command,
  Flags,
} from '@oclif/core'

/**
 * The default greeting prefix used when no custom
 * greeting is provided via configuration or flags.
 *
 * @constant {string}
 * @default 'hello'
 */
const DEFAULT_GREETING_PREFIX = 'hello'

/**
 * The default separator used between the greeting
 * components (greeting, person, from).
 *
 * @constant {string}
 * @default ' '
 */
const DEFAULT_SEPARATOR = ' '

/**
 * The default punctuation mark appended to the end
 * of the greeting message.
 *
 * @constant {string}
 * @default '!'
 */
const DEFAULT_PUNCTUATION = '!'

/**
 * Hello command - Greets a person from a sender.
 *
 * This command accepts a person's name as a
 * required positional argument and a sender's
 * name as a required flag. It then constructs
 * a greeting message and outputs it to stdout.
 *
 * @class Hello
 * @extends {Command}
 *
 * @example
 *   ```typescript
 *   // Programmatic usage
 *   const result = await Hello.run([
 *     'friend',
 *     '--from',
 *     'oclif',
 *   ])
 *   ```
 */
export default class Hello extends Command {
  /**
   * A list of command aliases that can be used
   * as alternative names for this command.
   *
   * @static
   * @type {string[]}
   */
  static aliases = [
    'greet',
    'hi',
    'hey',
  ]

  /**
   * The positional arguments accepted by this
   * command. The 'person' argument is required
   * and must be provided by the user.
   *
   * @static
   * @type {Record<string, import('@oclif/core').Arg>}
   */
  static args = {
    person: Args.string({
      description: [
        'The name of the person to greet.',
        'This can be any string value',
        'including spaces when quoted.',
      ].join(' '),
      required: true,
    }),
  }

  /**
   * A brief description of what this command does.
   * This is displayed in the help output.
   *
   * @static
   * @type {string}
   */
  static description = [
    'Say hello to a specified person.',
    'Requires both a person name and',
    'a --from flag to identify the sender.',
  ].join(' ')

  /**
   * Example usages displayed in the help output.
   * Each string is a separate example.
   *
   * @static
   * @type {string[]}
   */
  static examples = [
    '<%= config.bin %> <%= command.id %> friend --from oclif',
    '<%= config.bin %> <%= command.id %> "John Doe" --from "Jane"',
    '<%= config.bin %> <%= command.id %> world --from CLI',
  ]

  /**
   * The flags (options) accepted by this command.
   * The --from flag is required.
   *
   * @static
   * @type {Record<string, import('@oclif/core').Flag>}
   */
  static flags = {
    from: Flags.string({
      char: 'f',
      description: [
        'The name of the person sending',
        'the greeting. This flag is required',
        'and must be provided.',
      ].join(' '),
      required: true,
    }),
  }

  /**
   * Formats a greeting message from the provided
   * components using the default configuration.
   *
   * @private
   * @param {string} person - The person to greet
   * @param {string} from - The greeting sender
   * @returns {string} The formatted greeting
   */
  private formatGreeting(
    person: string,
    from: string,
  ): string {
    // Build the greeting components array
    const components: string[] = []

    // Add the greeting prefix
    components.push(
      DEFAULT_GREETING_PREFIX,
    )

    // Add the person's name
    components.push(person)

    // Add the "from" connector
    components.push('from')

    // Add the sender's name with punctuation
    components.push(
      from + DEFAULT_PUNCTUATION,
    )

    // Join all components with the separator
    const greeting = components.join(
      DEFAULT_SEPARATOR,
    )

    // Return the completed greeting
    return greeting
  }

  /**
   * The main execution method for this command.
   * Parses arguments and flags, constructs the
   * greeting message, and outputs it to stdout.
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
    } = await this.parse(Hello)

    // Extract the person argument
    const {
      person,
    } = args

    // Extract the from flag
    const {
      from,
    } = flags

    // Format the greeting message
    const greeting = this.formatGreeting(
      person,
      from,
    )

    // Output the greeting to stdout
    this.log(greeting)
  }
}

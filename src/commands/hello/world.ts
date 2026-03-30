/**
 * @module commands/hello/world
 * @description World subcommand implementation for
 *   the LOC Useless CLI application. This command
 *   outputs a simple "hello world!" greeting to
 *   the standard output stream.
 *
 * @example
 *   ```bash
 *   # Basic usage
 *   loc-useless-cli hello world
 *   ```
 *
 * @see {@link Hello} for the person greeting command
 * @since 0.0.1
 * @author Claude Code
 * @license MIT
 */

import {
  Command,
} from '@oclif/core'

/**
 * The default world greeting message that is
 * output when this command is executed.
 *
 * @constant {string}
 * @default 'hello world!'
 */
const DEFAULT_WORLD_GREETING = 'hello world!'

/**
 * World command - Outputs "hello world!" greeting.
 *
 * This is the simplest command in the CLI. It
 * takes no arguments and no flags. It simply
 * outputs the classic "hello world!" message
 * to the standard output stream.
 *
 * @class World
 * @extends {Command}
 *
 * @example
 *   ```typescript
 *   // Programmatic usage
 *   const result = await World.run([])
 *   ```
 */
export default class World extends Command {
  /**
   * A brief description of what this command does.
   * This is displayed in the help output when
   * the user runs the command with --help.
   *
   * @static
   * @type {string}
   */
  static description = [
    'Say hello to the world.',
    'This command takes no arguments',
    'and simply outputs a greeting.',
  ].join(' ')

  /**
   * Example usages displayed in the help output.
   * Each string represents one example.
   *
   * @static
   * @type {string[]}
   */
  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  /**
   * The main execution method for this command.
   * Outputs the default world greeting message
   * to the standard output stream.
   *
   * @public
   * @async
   * @returns {Promise<void>}
   */
  async run(): Promise<void> {
    // Output the world greeting message
    this.log(DEFAULT_WORLD_GREETING)
  }
}

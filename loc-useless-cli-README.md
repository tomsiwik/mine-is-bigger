loc-useless-cli
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/loc-useless-cli.svg)](https://npmjs.org/package/loc-useless-cli)
[![Downloads/week](https://img.shields.io/npm/dw/loc-useless-cli.svg)](https://npmjs.org/package/loc-useless-cli)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g loc-useless-cli
$ loc-useless-cli COMMAND
running command...
$ loc-useless-cli (--version)
loc-useless-cli/0.0.0 darwin-arm64 node-v25.8.1
$ loc-useless-cli --help [COMMAND]
USAGE
  $ loc-useless-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`loc-useless-cli hello PERSON`](#loc-useless-cli-hello-person)
* [`loc-useless-cli hello world`](#loc-useless-cli-hello-world)
* [`loc-useless-cli help [COMMAND]`](#loc-useless-cli-help-command)
* [`loc-useless-cli plugins`](#loc-useless-cli-plugins)
* [`loc-useless-cli plugins add PLUGIN`](#loc-useless-cli-plugins-add-plugin)
* [`loc-useless-cli plugins:inspect PLUGIN...`](#loc-useless-cli-pluginsinspect-plugin)
* [`loc-useless-cli plugins install PLUGIN`](#loc-useless-cli-plugins-install-plugin)
* [`loc-useless-cli plugins link PATH`](#loc-useless-cli-plugins-link-path)
* [`loc-useless-cli plugins remove [PLUGIN]`](#loc-useless-cli-plugins-remove-plugin)
* [`loc-useless-cli plugins reset`](#loc-useless-cli-plugins-reset)
* [`loc-useless-cli plugins uninstall [PLUGIN]`](#loc-useless-cli-plugins-uninstall-plugin)
* [`loc-useless-cli plugins unlink [PLUGIN]`](#loc-useless-cli-plugins-unlink-plugin)
* [`loc-useless-cli plugins update`](#loc-useless-cli-plugins-update)

## `loc-useless-cli hello PERSON`

Say hello

```
USAGE
  $ loc-useless-cli hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ loc-useless-cli hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/loc-useless-poc/loc-useless-cli/blob/v0.0.0/src/commands/hello/index.ts)_

## `loc-useless-cli hello world`

Say hello world

```
USAGE
  $ loc-useless-cli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ loc-useless-cli hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/loc-useless-poc/loc-useless-cli/blob/v0.0.0/src/commands/hello/world.ts)_

## `loc-useless-cli help [COMMAND]`

Display help for loc-useless-cli.

```
USAGE
  $ loc-useless-cli help [COMMAND...] [-n]

ARGUMENTS
  [COMMAND...]  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for loc-useless-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/6.2.41/src/commands/help.ts)_

## `loc-useless-cli plugins`

List installed plugins.

```
USAGE
  $ loc-useless-cli plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ loc-useless-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.59/src/commands/plugins/index.ts)_

## `loc-useless-cli plugins add PLUGIN`

Installs a plugin into loc-useless-cli.

```
USAGE
  $ loc-useless-cli plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into loc-useless-cli.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the LOC_USELESS_CLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the LOC_USELESS_CLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ loc-useless-cli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ loc-useless-cli plugins add myplugin

  Install a plugin from a github url.

    $ loc-useless-cli plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ loc-useless-cli plugins add someuser/someplugin
```

## `loc-useless-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ loc-useless-cli plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ loc-useless-cli plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.59/src/commands/plugins/inspect.ts)_

## `loc-useless-cli plugins install PLUGIN`

Installs a plugin into loc-useless-cli.

```
USAGE
  $ loc-useless-cli plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into loc-useless-cli.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the LOC_USELESS_CLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the LOC_USELESS_CLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ loc-useless-cli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ loc-useless-cli plugins install myplugin

  Install a plugin from a github url.

    $ loc-useless-cli plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ loc-useless-cli plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.59/src/commands/plugins/install.ts)_

## `loc-useless-cli plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ loc-useless-cli plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ loc-useless-cli plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.59/src/commands/plugins/link.ts)_

## `loc-useless-cli plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ loc-useless-cli plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ loc-useless-cli plugins unlink
  $ loc-useless-cli plugins remove

EXAMPLES
  $ loc-useless-cli plugins remove myplugin
```

## `loc-useless-cli plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ loc-useless-cli plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.59/src/commands/plugins/reset.ts)_

## `loc-useless-cli plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ loc-useless-cli plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ loc-useless-cli plugins unlink
  $ loc-useless-cli plugins remove

EXAMPLES
  $ loc-useless-cli plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.59/src/commands/plugins/uninstall.ts)_

## `loc-useless-cli plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ loc-useless-cli plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ loc-useless-cli plugins unlink
  $ loc-useless-cli plugins remove

EXAMPLES
  $ loc-useless-cli plugins unlink myplugin
```

## `loc-useless-cli plugins update`

Update installed plugins.

```
USAGE
  $ loc-useless-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.59/src/commands/plugins/update.ts)_
<!-- commandsstop -->

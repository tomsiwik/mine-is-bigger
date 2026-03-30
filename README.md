<p align="center">
  <code>// TODO: mass-generate a logo with AI and commit 47 SVG variants</code>
</p>

<h2 align="center">LOC is Useless</h2>

<p align="center">
  <b><em>A proof of concept that Lines of Code is a meaningless metric.</em></b>
</p>

<p align="center">
  <a href="https://github.com/tomsiwik/loc-useless-poc/issues">Issues</a>
</p>

## Introduction

This repo exists to prove one thing: **Lines of Code (LOC) is a terrible metric** for measuring productivity, progress, or complexity.

With a few simple tricks — the kind that happen _every single day_ in real codebases (especially with coding agents) — we inflated this repo to **325K+ insertions** across 12 commits without writing a single meaningful line of code.

**How I Fooled You:**

| # | Commit | Trick | Insertions | Meaningful Code |
|---|--------|-------|------------|-----------------|
| 1 | `feat: add schema.org vocabulary` | Download [schema.org](https://schema.org) JSON-LD (a real, commonly-used file) | +47,287 | 0 |
| 2 | `style: configure prettier with 4-space indent` | Reformat from 2-space to 4-space (a config change) | +47,286 | 0 |
| 3 | `refactor: switch to tabs for consistency` | Switch from spaces to tabs | +47,285 | 0 |
| 4 | `revert: switch to tabs for consistency` | Oops, revert that | +47,285 | 0 |
| 5 | `refactor: switch back to tabs after team discussion` | Actually, tabs were right | +47,285 | 0 |
| 6 | `feat: scaffold CLI application` | oclif CLI that prints "hello world" (39 lines of source) | +14,279 | 0 |
| 7 | `chore: migrate from npm to pnpm` | Switch package manager | +6,629 | 0 |
| 8 | `chore: migrate from pnpm to bun` | Switch package manager again | +1,924 | 0 |
| 9 | `revert: switch back to npm` | Team prefers npm after all | +13,550 | 0 |
| 10 | `chore: minify schema for bundle size` | Minify JSON to 1 line | +1 | 0 |
| 11 | `style: prettify schema for readability` | Re-prettify from minified | +47,287 | 0 |
| 12 | `feat: generate TypeScript types` | Codegen types from the schema we downloaded | +4,943 | 0 |
| | | **Total git insertions** | **325,041** | **0** |

Zero features. Zero bug fixes. Zero business logic. **325K lines of "progress".**

## The Tricks, Explained

### 1. Vendor a Large Schema File

schema.org publishes their entire vocabulary as a single JSON-LD file. It's 47,286 lines and 1.5 MB. Download it, commit it, and you just "wrote" 47K lines of code.

```sh
curl -o schema.jsonld https://schema.org/version/latest/schemaorg-current-https.jsonld
git add schema.jsonld && git commit -m "feat: add schema validation"
```

### 2-5. Reformat It Back and Forth

Change your `.prettierrc` from `tabWidth: 2` to `tabWidth: 4`. Switch from spaces to tabs. Revert it. Switch back. Each round-trip rewrites every line in the file — that's 4 commits x ~47K insertions = **189K insertions** from formatter indecision alone.

This happens every time a coding agent "helpfully" reformats a file, two developers disagree on settings, or someone updates the prettier config.

### 6. Scaffold a CLI That Does Nothing

```sh
npx oclif generate my-cli
```

39 lines of TypeScript source, 13,550 lines of `package-lock.json`, CI workflows, configs, and a CLI that prints "hello world". **14,279 insertions** for zero functionality.

### 7-9. Switch Package Managers Back and Forth

Migrate from npm to pnpm (+6,629). Then to bun (+1,924). Then back to npm (+13,550). Three commits, three different lock file formats, **22,103 insertions** of pure churn. The `node_modules` folder didn't change.

### 10-11. Minify and Re-Prettify

Minify the schema for "bundle size optimization" (47K lines become 1). Then "fix" readability by pretty-printing it again (+47,287). Two commits, **47,288 insertions**, identical content.

### 12. Generate Types from the Schema

Run codegen on the schema file. **4,943 lines** of TypeScript interfaces. The machine wrote them. Nobody will read them. But they count as LOC.

## Why This Matters

LOC is used to measure:
- Developer productivity ("she wrote 10K lines this sprint!")
- Project complexity ("this is a 500K LOC codebase")
- AI coding agent output ("the agent generated 2K lines of code")

All of these are equally meaningless.

### The Agent Problem

Coding agents (Copilot, Cursor, Claude Code, etc.) do this _constantly_:
- **Switching formatters** — agent installs biome, reformats everything, +50K LOC
- **Moving files** — agent reorganizes folder structure, every import changes, +10K LOC
- **Regenerating lock files** — agent runs `npm install`, lock file changes, +5K LOC
- **Scaffolding** — agent creates project boilerplate, +2K LOC of templates
- **Vendoring dependencies** — agent copies a library into the repo instead of importing it

None of this is productivity. It's noise.

## More Tricks We Could Add

- Commit `node_modules/` (~286K lines of JS in this tiny project alone)
- Add license headers to every file (20 lines x N files)
- Generate an OpenAPI spec from the types we generated from the schema we downloaded
- Add verbose JSDoc to every generated type
- Copy the same enum into 5 files instead of sharing it
- Check in `.env.example` files with every possible env var documented
- Generate a massive GraphQL schema from the types
- Add i18n files (one JSON per language, same structure, 47K lines each)

## Getting Started

There's nothing to start. That's the point.

```sh
# This is all you need to inflate your LOC by 325K+
curl -o schema.jsonld https://schema.org/version/latest/schemaorg-current-https.jsonld
npx oclif generate my-useless-cli
git add -A && git commit -m "feat: initial architecture"
```

## License

[MIT](./LICENSE)

<br />

<p align="center">Made with 0 meaningful lines of code by <a href="https://github.com/tomsiwik">tomsiwik</a></p>

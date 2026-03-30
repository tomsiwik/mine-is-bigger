<p align="center">
  <code>// TODO: mass-generate a logo with AI and commit 47 SVG variants</code>
</p>

<h2 align="center">Mine is Bigger</h2>

<p align="center">
  <b><em>A proof of concept that Lines of Code is a meaningless metric.</em></b>
</p>

<p align="center">
  <a href="https://github.com/tomsiwik/loc-useless-poc/issues">Issues</a>
</p>

## Introduction

This repo exists to prove one thing: **Lines of Code (LOC) is a terrible metric** for measuring productivity, progress, or complexity.

With a few simple tricks — the kind that happen _every single day_ in real codebases (especially with coding agents) — we inflated this repo to **328K+ git insertions** across 17 commits without writing a single meaningful line of code.

**How I Fooled You:**

| # | Commit | Trick | Insertions | Meaningful Code |
|---|--------|-------|------------|-----------------|
| 1 | `feat: add schema.org vocabulary` | Download [schema.org](https://schema.org) JSON-LD (a real, commonly-used file) | +47,287 | 0 |
| 2 | `style: configure prettier with 4-space indent` | Reformat from 2-space to 4-space (a config change) | +47,286 | 0 |
| 3 | `refactor: switch to tabs for consistency` | Switch from spaces to tabs | +47,285 | 0 |
| 4 | `Revert "refactor: switch to tabs"` | Oops, revert that | +47,285 | 0 |
| 5 | `refactor: switch back to tabs after team discussion` | Actually, tabs were right | +47,285 | 0 |
| 6 | `feat: scaffold CLI application` | oclif CLI that prints "hello world" (39 lines of source) | +14,279 | 0 |
| 7 | `chore: migrate from npm to pnpm` | Switch package manager | +6,629 | 0 |
| 8 | `chore: migrate from pnpm to bun` | Switch package manager again | +1,924 | 0 |
| 9 | `revert: switch back to npm` | Team prefers npm after all | +13,550 | 0 |
| 10 | `chore: minify schema for bundle size` | Minify JSON to 1 line | +1 | 0 |
| 11 | `style: prettify schema for readability` | Re-prettify from minified | +47,287 | 0 |
| 12 | `feat: generate TypeScript types` | Codegen types from the schema we downloaded | +4,943 | 0 |
| 13 | `refactor: move CLI to project root` | `git mv` everything to a new folder structure | +12 | 0 |
| 14 | `feat: add schema validation commands` | LLM-style verbose code: JSDoc everything, 80-char lines, barrel files, one-function-per-file utils | +3,266 | 0 |
| | | **Total git insertions** | **328,461** | **0** |

Zero features. Zero bug fixes. Zero business logic. **328K lines of "progress".**

The 3,266 lines of "real code" in commit 14? That's 23 TypeScript files containing ~47 lines of actual logic buried under verbose JSDoc comments, constants-for-constants, barrel re-exports, and single-function utility files. A coding agent wrote every line — and it looks _exactly_ like production code.

## The Tricks, Explained

### 1. Vendor a Large Schema File

schema.org publishes their entire vocabulary as a single JSON-LD file. It's 47,287 lines and 1.5 MB. Download it, commit it, and you just "wrote" 47K lines of code.

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

### 13. Move Files Around

`git mv` the CLI from a subfolder to the project root. Same code, new paths, every file shows as changed. Coding agents do this constantly when "reorganizing" project structure.

### 14. LLM-Inflated "Production" Code

Let a coding agent write "clean, well-documented" TypeScript. You get:

- **Verbose JSDoc on everything** — 8-line doc blocks for `const DEFAULT_PUNCTUATION = '!'`
- **80-character line width** — forces multiline destructuring, imports, and function calls
- **Barrel files** — `index.ts` files that re-export each type individually on its own line
- **One function per file** — `format-bytes.ts`, `format-duration.ts`, `format-number.ts`, `truncate-string.ts` (each ~100 lines for a 3-line function)
- **Constants for constants** — `BYTES_PER_KB`, `BYTES_PER_MB`, `BYTES_PER_GB`, `LABEL_BYTES`, `LABEL_KB`, `LABEL_MB`, `LABEL_GB` (7 constants to avoid the number 1024)
- **Flat import lists** — each import on its own line with trailing comma
- **Comment-per-line** — `// Add the greeting prefix` above `components.push(DEFAULT_GREETING_PREFIX)`
- **Redundant interfaces** — `ValidationError`, `ValidationWarning`, `ValidationOptions`, `ValidationResult` fully typed with JSDoc for a validator that checks 2 properties

**3,266 lines. ~47 lines of logic. The rest is ceremony.**

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
- **Over-documenting** — agent adds JSDoc to every export, constant, and type
- **Over-abstracting** — agent splits one file into 15 files with barrel re-exports

None of this is productivity. It's noise.

## How to Avoid Miscounting LOC

If you're measuring LOC (and you probably shouldn't be), here's a checklist of what to watch for:

### The Problem with Git History

Using `git log` insertions to measure LOC is fundamentally broken because:

- [x] **Reformatting counts as new code** — A `prettier` config change rewrites every line in every file. Same AST, 100% new LOC.
- [x] **Reverts double-count** — Reverting a commit adds the same number of insertions as the original. A revert + redo = 3x the original LOC.
- [x] **Lock files are code** — `package-lock.json` is 13K+ lines. Switching from npm to pnpm to bun and back generates 22K+ insertions of machine-generated dependency resolution.
- [x] **File moves are rewrites** — `git mv` shows as delete + add in the diff. Moving 20 files = 20 deletions + 20 insertions with identical content.
- [x] **Vendored files inflate everything** — Downloading schema.org's vocabulary is one `curl` command but 47K lines in git.
- [x] **Codegen is not authorship** — Generating TypeScript types from a schema produces thousands of lines nobody wrote or will read.
- [x] **Comments and docs inflate disproportionately** — A well-documented 3-line function becomes 40+ lines with JSDoc, `@param`, `@returns`, `@example`, and `@since` tags.
- [x] **Scaffolding is not features** — `npx oclif generate` produces 14K+ insertions including CI workflows, test configs, and boilerplate. Zero business logic.

### What You Can't Fix

Even with the best tooling, git-history-based LOC measurement will always be broken:

- [ ] **There is no way to distinguish formatting changes from logic changes in a git diff** — tools like `git diff -w` (ignore whitespace) help but don't catch indentation-level changes, reordering, or style-only rewrites.
- [ ] **Lock files will always churn** — every dependency update, every package manager migration. Excluding them loses real dependency information; including them inflates LOC.
- [ ] **Codegen output is indistinguishable from hand-written code** — there's no metadata in git that marks a file as generated. You'd need `.gitattributes` or path conventions, and most projects don't have them.
- [ ] **Agent-generated code looks identical to human code** — when a coding agent writes 200 lines of verbose TypeScript, there's no way to tell from the diff whether a human or a machine authored it.
- [ ] **Semantic changes can't be inferred from line counts** — a 1-line bug fix can be more impactful than a 10K-line scaffolding commit. A 500-line type definition might be pure ceremony. LOC doesn't encode intent.

### If You Must Measure, Consider

- **Cyclomatic complexity** instead of line count
- **Number of tests passing** instead of lines written
- **Features shipped** instead of commits merged
- **Time to resolution** instead of diff size
- **Code review turnaround** instead of PR volume
- Exclude generated files, lock files, and vendored code from all metrics
- Measure **net** LOC (insertions minus deletions) rather than gross insertions — but even this is gameable

## More Tricks We Could Add

- Commit `node_modules/` (~286K lines of JS in this tiny project alone)
- Add license headers to every file (20 lines x N files)
- Generate an OpenAPI spec from the types we generated from the schema we downloaded
- Add verbose JSDoc to every generated type
- Copy the same enum into 5 files instead of sharing it
- Check in `.env.example` files with every possible env var documented
- Generate a massive GraphQL schema from the types
- Add i18n files (one JSON per language, same structure, 47K lines each)
- Switch from ESLint to Biome (reformat every file again)
- Add Storybook stories for a CLI (yes, really)

## Getting Started

There's nothing to start. That's the point.

```sh
# This is all you need to inflate your LOC by 328K+
curl -o schema.jsonld https://schema.org/version/latest/schemaorg-current-https.jsonld
npx oclif generate my-useless-cli
git add -A && git commit -m "feat: initial architecture"
```

## License

[MIT](./LICENSE)

<br />

<p align="center">Made with 0 meaningful lines of code by <a href="https://github.com/tomsiwik">tomsiwik</a></p>

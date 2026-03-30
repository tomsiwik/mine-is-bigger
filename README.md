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

With a few simple tricks — the kind that happen _every single day_ in real codebases (especially with coding agents) — we can inflate LOC by tens of thousands of lines without writing a single meaningful line of code.

**How I Fooled You:**

| # | Trick | LOC Added | Meaningful Code |
|---|-------|-----------|-----------------|
| 1 | Download [schema.org](https://schema.org) vocabulary (a real, commonly-used JSON-LD file) | +47,286 | 0 |
| 2 | Reformat JSON from 2-space to 4-space indent (a `prettier` config change) | +0 (same lines, bigger diff) | 0 |
| 3 | Reformat JSON from spaces to tabs (switch formatter) | +47,286 (full file rewrite in diff) | 0 |
| 4 | Revert the formatting, then redo it (oops, changed my mind) | +94,572 | 0 |
| 5 | Scaffold an oclif CLI that does literally nothing | +57 (source + tests) | 0 |
| 6 | Commit `package-lock.json` (as you should) | +13,550 | 0 |
| 7 | Generate TypeScript types from the JSON schema | ~+15,000 | 0 |
| 8 | Minify the JSON, then pretty-print it again (CI/CD "fix") | +47,286 | 0 |
| | **Total** | **~265,000+** | **0** |

Zero features. Zero bug fixes. Zero business logic. A quarter million lines of "progress".

## The Tricks, Explained

### 1. Vendor a Large Schema File

schema.org publishes their entire vocabulary as a single JSON-LD file. It's 47,286 lines and 1.5 MB. Download it, commit it, and you just "wrote" 47K lines of code.

```sh
curl -o schema.jsonld https://schema.org/version/latest/schemaorg-current-https.jsonld
git add schema.jsonld && git commit -m "feat: add schema validation"
```

### 2-4. Reformat It Back and Forth

Change your `.prettierrc` from `tabWidth: 2` to `tabWidth: 4`. Or switch from spaces to tabs. Every line in the file changes. Revert it. Change it again. Each round-trip is a full-file diff.

This is what happens every time a coding agent "helpfully" reformats a file, or two developers disagree on formatter settings, or someone updates the prettier config.

### 5. Scaffold a CLI That Does Nothing

```sh
npx oclif generate my-cli
```

Congratulations, you now have 57 lines of TypeScript source, 13,550 lines of `package-lock.json`, and a CLI that prints "hello world". The scaffolding alone is more code than most bug fixes.

### 6. Commit the Lock File

Every project should commit their lock file. But that's 13K+ lines of auto-generated dependency resolution. Did anyone "write" those lines?

### 7. Generate Types from the Schema

Run a codegen tool on the schema file. You now have ~15,000 lines of TypeScript interfaces. The machine wrote them. Nobody read them. But they count as LOC.

### 8. Minify and Re-Prettify

Accidentally commit minified JSON (1 line). Then "fix" it by pretty-printing (47K lines). Two commits, ~47K lines of churn, zero change in content.

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
# This is all you need to inflate your LOC by 250K+
curl -o schema.jsonld https://schema.org/version/latest/schemaorg-current-https.jsonld
npx oclif generate my-useless-cli
git add -A && git commit -m "feat: initial architecture"
```

## License

[MIT](./LICENSE)

<br />

<p align="center">Made with 0 meaningful lines of code by <a href="https://github.com/tomsiwik">tomsiwik</a></p>

# AGENTS.md

## Cursor Cloud specific instructions

This is the Adobe **React Spectrum** monorepo (Yarn 4 workspaces + Lerna). It is a collection of
frontend libraries (React Spectrum, React Aria, React Stately, Internationalized, Spectrum 2,
icons) plus docs/Storybook tooling — there is **no backend, database, or external service**.
Standard commands live in the root `package.json` scripts, `Makefile`, and `CONTRIBUTING.md`;
prefer those instead of duplicating. The notes below are the non-obvious gotchas.

### Node version (most important gotcha)
- The repo **requires Node 24** (`.nvmrc` = `24`); the Parcel build segfaults on other versions.
- Node 24 is installed via `nvm` and is the nvm default. Interactive shells pick it up through
  `~/.bashrc`, **but non-interactive shells (e.g. one-off `bash -c` commands) resolve `node` to
  `/exec-daemon/node`, which is Node 22.** When running build/test/dev commands non-interactively,
  prepend the Node 24 bin to `PATH` first:
  ```bash
  export PATH="$HOME/.nvm/versions/node/v24.17.0/bin:$PATH"
  ```
  Verify with `node --version` (must print `v24.x`) before running `yarn` commands.

### Running in dev mode (no build required)
- `yarn start` → React Spectrum Storybook at http://localhost:9003 (primary dev surface).
- `yarn start:s2` → Spectrum 2 Storybook at http://localhost:6006.
- `yarn start:s2-docs` → docs site at http://localhost:1234.
- Storybook bundles package source on the fly via Parcel; no prior `build` step is needed.

### Build gotchas
- `yarn build` (alias for `make build`) is the **production package build** (tsgo declarations +
  Parcel build of all packages). It is heavy and writes `dist/` into every package.
- It is expected (and harmless) for `make build` to print `@parcel/transformer-typescript-types`
  type errors; the build still completes successfully.
- **Do not run `yarn build` / `make build` before `yarn start`.** Build artifacts can break
  Storybook with errors like `does not export 'useVirtualizer'`. If `yarn start` fails this way,
  run `make clean_all && yarn` (this removes `node_modules`, `dist`, and `.parcel-cache`, then
  reinstalls). A stale `.parcel-cache` alone can also be deleted.

### Tests & lint
- `yarn test` runs the full Jest suite; `yarn jest <path-substring>` runs a subset
  (e.g. `yarn jest react-aria-components/test/Button.test.js`).
- Test files live under each package's `test/` directory (and `react-aria-components/test`,
  `packages/@adobe/react-spectrum/test`), not co-located next to source by component name.
- `yarn lint` runs format check + type check (`tsgo`) + `oxlint` + package lint + yarn constraints.

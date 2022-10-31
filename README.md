# Tree shaking on OpenTelemetry API

This is an example repo to show how tree-shaking is working on the
@opentelemetry/api package.

## How to run

1. Clone this repo.
2. `npm i`.
3. `npm run rollup` to run rollup.
4. `npm run webpack` to run webpack.

## Patches applied

1. https://github.com/open-telemetry/opentelemetry-js/pull/3329
2. Split module level instantiations of API classes into separate files and
   re-export them in the entrypoint file.
   - See https://github.com/open-telemetry/opentelemetry-js/blob/main/api/src/index.ts#L57-L81

These patches are applied in the `/patch-applied/@opentelemetry/api/build/esm` folder.

With these patches applied, the tree-shaking is working as expected and unused API instances can be
correctly dropped in the final bundle.

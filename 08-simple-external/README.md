# Simple External Modules

Instead of defining internal TypeScript modules, we can use external
modules that are implemented with module loaders.

This sample converts simple internal modules to simple external modules.
The following changes were made:

1. The `out` property in `tsconfig.json` was replaced with the `outDir`
property because each TypeScript file emits a separate JavaScript file.
2. The `module` keywords were removed.

Note that to use module members, we have to dereference them with the
local module name first, so `A` becomes `AModule.A`.

Run the following command to generate the output files:

* `tsc`

Note that the `out` directory contains an emitted file for each input file.
We only have to execute the emitted `run.js` script, and the external
module loader will ensure the other modules are loaded on demand.

To test it, run:

* `node out/run.js` --> `B { a: A {} }`

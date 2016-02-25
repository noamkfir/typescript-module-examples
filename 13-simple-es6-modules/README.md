# Simple ES6 Modules

TypeScript supports ES6 module syntax for defining modules and their
relationships. ES6 modules are actually external modules defined with ES6
syntax. `tsconfig.json` doesn't require any changes to support this. It's
enough to simply use the syntax.

A module can export multiple members, which can be imported selectively
using the `import { <member-name> } from '<module-path>'` syntax. This
makes the syntax more succinct than the regular external modules, and
more versatile than the export = syntax.

Run the following command to generate the output files:

* `tsc`

To test it, run:

* `node out/run.js` --> `B { a: A {} }`

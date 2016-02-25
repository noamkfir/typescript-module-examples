# External Module Aliases

Sometimes external modules export complex constructs, like nested
modules and/or classes. Referencing them from consuming modules can be
cumbersome, so we can use aliases.

`A.ts` is exporting a module with a nested class `A`. `B` could
reference it as `AModule.A`, or it can use an alias to reference the `A`
class directly.

Although the syntax of the import alias statement and the import module
statement are similar, they cannot be combined.
`import A = require('./A').A;` is not a valid statement.

Run the following command to generate the output files:

* `tsc`

To test it, run:

* `node out/run.js` --> `B { a: A {} }`

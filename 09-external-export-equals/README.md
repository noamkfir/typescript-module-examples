# Export = Syntax

To avoid referencing types defined in modules using the cumbersome
locally defined module name, we can use the **export =** syntax.

Note that the types defined in each module are private and the `export`
key specifies which single member to export. That member is assigned to
the imported variable without requiring the module, so instead of
referencing `AModule.A`, we can simply reference `A`.

Run the following command to generate the output files:

* `tsc`

Note that the `out` directory contains an emitted file for each input file.
We only have to execute the emitted `run.js` script, and the external
module loader will ensure the other modules are loaded on demand.

To test it, run:

* `node out/run.js` --> `B { a: A {} }`

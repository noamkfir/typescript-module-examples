# Simple Internal Modules

`A.ts` and `B.ts` use the same internal modules.

`B.ts` depends on `A.ts`.

To reference a member of `A`, the module name is ***not*** required.

Run the following command to generate the output file:

* `tsc --out out/app.js A.ts B.ts run.ts`

The order between `A` and `B` still matters for the same reasons as
the previous sample, despite being in the same module.

To test it, run:

* `node out/app.js` --> `B { a: A {} }`

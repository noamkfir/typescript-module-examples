# Internal Modules with Reference Tags

The previous samples required all the input file names to be specified
explicitly on the command line.

However, we can simplify the commandline by specifying just the entry
file and letting the compiler determine all the dependencies and their
correct load order automatically.

To support this functionality, `reference` tags have to be added
to each file that depends on other files. The `reference` tag
specifies the location of the dependency and help the compiler
determine the load order.

Run the following command to generate the output file:

* `tsc --out out/app.js run.ts`

Note that only the entry file `run.ts` is specified. `run.ts`
depends on `B.ts`, which depends on `A.ts`. Their compiled output will
appear in `out/app.js` in the order: `A.ts`, `B.ts`, `run.ts`.

To test it, run:

* `node out/app.js` --> `B { a: A {} }`

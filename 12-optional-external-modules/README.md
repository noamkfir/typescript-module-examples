# Optional External Modules

The compiler does not automatically emit JavaScript code for every
TypeScript construct it sees. If constructs defined by an imported
TypeScript module are only used for type information (to the right of
the `:` and not to the right of the `=` in an assignment statement),
that import is not emitted to JavaScript.

Run the following command to generate the output files:

* `tsc`

`B` creates an instance of the `A1` class, so its import statement is
emitted. `B` only specifies the type of the `a2` member and does not
actually instantiate the `A2` class, so that import statement is not
emitted. This can be verified in the `out/B.js` file, which only has a
single import statement for `A1`.

To test it, run:

* `node out/run.js` --> `B { a: A {} }`

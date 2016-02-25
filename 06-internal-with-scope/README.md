# Internal Modules with `tsconfig.json`

Although modules are merged across files, they do not share scope.

`B.ts` cannot see the `forA` const defined at the module level by `A.ts`,
so uncommenting the code in `B.bar` will cause a compilation error.

However, the value can be accessed indirectly by encapsulating it.
`B.superFoo()` calls `A.foo()`, which returns the value of `forA`.

Run the following command to generate the output file:

* `tsc`

To test it, run:

* `node out/app.js` --> `forA`

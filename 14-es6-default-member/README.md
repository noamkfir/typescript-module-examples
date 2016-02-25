# ES6 Modules with Default Members

Exporting a single member from a module is a good practice. When using
external modules, this can be achieved with the **export =** syntax.

ES6 has its own variant, which uses the `export default` keywords and
removes the curly braces from the import statement. In each module, the
exported construct is no longer needed. The name used in the import
keyword represents the imported construct.

Run the following command to generate the output files:

* `tsc`

To test it, run:

* `node out/run.js` --> `default_1 { a: default_1 {} }`

Note that the explicit type names have been replaced with default type
names.

Also note that the type names can be confusing in this case. The first
`default_1` maps to the class exported by `B.ts` whereas the second
`default_1` maps to the class exported by `A.ts`. They are not the same
type.
# Internal Modules with `tsconfig.json`

We can further simplify the commandline by using a `tsconfig.json` file.
All the `reference` tags have been removed.

`tsconfig.json` creates a TypeScript project and makes it possible to
run `tsc` without any parameters. The `tsconfig.json` file is created
with the command `tsc --init` executed in this folder.

Run the following command to generate the output file:

* `tsc`

Note that no parameters are specified. The `out` property in
`tsconfig.json` replaces the `--out` parameter on the commandline. No
files are specified, so all the files in the directory are compiled.

Despite the absence of `reference` tags, the compiler is able to
follow the dependencies and add all the compiled output in the correct
order to the `out/app.js` file.

To test it, run:

* `node out/app.js` --> `B { a: A {} }`

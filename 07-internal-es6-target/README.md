# Internal Modules Compiled to ES6

This sample compiles our code to ES6. Babel is then used to compile it
to ES5. This demonstrates that the compiler does not require us to change
out code to support different compilation targets.

The following significant changes were made:

1. The `target` property in `tsconfig.json` was changed to `es6`.
2. The `out` property in `tsconfig.json` was changed to `out/es6.js`.

Also, this sample relies on babel. You can ensure it's installed by
running `npm install`.

Run the following commands to generate the output file:

1. `tsc`
2. `npm run babel-07`

Take a look at `out/es6.js` and note the usage of the `class` keyword
and other ES6 language constructs.

`babel-07` is an npm script that transpiles `out/es6.js` to `out/app.js`.
The script is defined in the `package.json` file.

To test it, run:

* `node out/app.js` --> `B { a: A {} }`

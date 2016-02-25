# Export Targets

This sample is identical to the previous sample, except that the `module`
property in the `tsconfig.json` file has been changed to `umd`. None of
the code has been changed.

Run the following command to generate the output files:

* `tsc`

Note that the content of the files in the `out` directory is different
than the output in the `out` directory of the previous sample even though
the code is identical.

To test it, run:

* `node out/run.js` --> `B { a: A {} }`

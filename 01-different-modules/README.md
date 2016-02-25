# Different Modules

`A.ts` and `B.ts` use different internal modules.

`B.ts` depends on `A.ts`.

To reference a member of `A`, the module name must be used.

Run both of the following commands to generate two output files:

* `tsc --out out/a-then-b.js A.ts B.ts run.ts`
* `tsc --out out/b-then-a.js B.ts A.ts run.ts`

Note that the compiled classes appear in the output files in the
same order that they are specified on the commandline.

In this case, the order between `A` and `B` doesn't matter because
both classes are guaranteed to exist before class `B` is
instantiated and its property `a` assigned a new `A`.

To test it, run:

* `node out/a-then-b.js`
* `node out/b-then-a.js`

You should see the following output in both cases:

`A {}`

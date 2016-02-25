# Order Matters

`A.ts` and `B.ts` use different internal modules.

`B.ts` depends on `A.ts`.

To reference a member of `A`, the module name must be used.

Run both of the following commands to generate two output files:

* `tsc --out out/a-then-b.js A.ts B.ts run.ts`
* `tsc --out out/b-then-a.js B.ts A.ts run.ts`

In this case, the order between `A` and `B` ***does*** matter because
inheritance in JavaScript requires the instantiation of the super
class `A`, which is actually implemented as a prototype, before the
derived class `B` can be defined.

In this case, the compilation will succeed because no type info is
missing and the classes are defined correctly in and of themselves.

However, the second version (`b-then-a.js`) will throw at run time.

To test it, run:

* `node out/a-then-b.js` --> `B {}`
* `node out/b-then-a.js` --> `... TypeError: Cannot read property 'A' of undefined ...`

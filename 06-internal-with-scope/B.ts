module InternalWithScope {
    export class B extends A {
        a: A = new A();

        public superFoo() {
            return super.foo();
        }

        public bar() {
            // return forA || InternalWithScope.forA;
        }
    }
}
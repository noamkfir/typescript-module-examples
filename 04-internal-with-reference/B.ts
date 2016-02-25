/// <reference path="A.ts" />

module InternalWithReference {
    export class B extends A {
        a: A = new A();
    }
}
import A = require('./A');

class B extends A {
    a: A = new A();
}

export = B;

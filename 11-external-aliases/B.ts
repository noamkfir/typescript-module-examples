import AModule = require('./A');
import A = AModule.A;

class B extends A {
    a: A = new A();
}

export = B;

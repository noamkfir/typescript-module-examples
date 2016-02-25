import AModule = require('./A');

export class B extends AModule.A {
    a: AModule.A = new AModule.A();
}
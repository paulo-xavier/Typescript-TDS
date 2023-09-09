"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
class Dog {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    getWeight() {
        return this.weight;
    }
    bark() {
        console.log("Au Au");
    }
    eat(quantity) {
        console.log(this.name + " has eaten " + quantity);
        this.weight += quantity;
    }
}
exports.Dog = Dog;
//# sourceMappingURL=Dog.js.map
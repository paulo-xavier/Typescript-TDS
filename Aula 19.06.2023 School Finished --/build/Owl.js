"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Owl = void 0;
class Owl {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    eat(quantity) {
        console.log(this.name + " has eaten " + quantity);
        this.weight += quantity;
    }
    chirp() {
        console.log("hu hu");
    }
    fly(time) {
        if (time >= this.weight) {
            console.log("The owl cannot fly now");
        }
        else {
            console.log("The owl has flown for " + time + " minutes");
            this.weight -= time;
        }
    }
}
exports.Owl = Owl;
//# sourceMappingURL=Owl.js.map
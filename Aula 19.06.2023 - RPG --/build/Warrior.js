"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
class Warrior {
    constructor(name, kind, power) {
        this.name = name;
        this.kind = kind;
        this.power = power;
        this.health = 100;
    }
    beDamaged(damaged) {
        this.health -= damaged;
        if (this.health <= 0) {
            console.log("You died! ");
        }
        else {
            console.log("You have  " + this.health + " of health! ");
        }
    }
    attackWarrior() {
        return this.power;
    }
    healthWarrior() {
        return this.health;
    }
}
exports.Warrior = Warrior;
//# sourceMappingURL=Warrior.js.map
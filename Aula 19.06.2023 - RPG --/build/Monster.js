"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monster = void 0;
class Monster {
    constructor(name) {
        this.name = name;
        this.power = 50;
        this.health = 10;
    }
    attackMonster() {
        return this.power;
    }
    healthMonster() {
        return this.health;
    }
    beDamagedMonster(damaged) {
        this.health -= damaged;
        if (this.health <= 0) {
            console.log("You died!");
        }
        else {
            console.log("You have " + this.health + " of health");
        }
    }
}
exports.Monster = Monster;
//# sourceMappingURL=Monster.js.map
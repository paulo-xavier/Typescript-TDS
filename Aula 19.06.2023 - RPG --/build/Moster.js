"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monster = void 0;
class Monster {
    constructor(name, power, health) {
        this.name = name;
        this.power = power;
        this.health = health;
    }
    attackMonster() {
        this.power = 50;
        return this.power;
    }
    healthMonster() {
        this.health = 10;
        return this.health;
    }
    beDamagedMonster(damaged) {
        this.health = 10 - damaged;
        if (this.health <= 0) {
            console.log("You died!");
        }
        else {
            console.log("You have " + this.health + " of health");
        }
    }
}
exports.Monster = Monster;
//# sourceMappingURL=Moster.js.map
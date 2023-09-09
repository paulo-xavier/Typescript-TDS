"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Monster_1 = require("./Monster");
const Warrior_1 = require("./Warrior");
let hercules = new Warrior_1.Warrior("hercules", "god", 150);
let medusa = new Monster_1.Monster("medusa");
hercules.beDamaged(medusa.attackMonster());
medusa.beDamagedMonster(hercules.attackWarrior());
//# sourceMappingURL=index.js.map


import { Monster } from "./Monster"; 
import { Warrior } from "./Warrior";


let hercules = new Warrior("hercules","god", 150);
let medusa = new Monster("medusa")

hercules.beDamaged(medusa.attackMonster())
medusa.beDamagedMonster(hercules.attackWarrior())

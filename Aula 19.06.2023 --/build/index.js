"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dog_1 = require("./Dog");
const Owl_1 = require("./Owl");
//dog
let scooby = new Dog_1.Dog("Scooby Doo", 30);
scooby.bark();
scooby.eat(10);
//console.log(scooby)
//dog
let snoopy = new Dog_1.Dog("Snoopy", 5);
snoopy.bark();
console.log("before" + snoopy.getWeight());
snoopy.eat(3);
console.log("after" + snoopy.getWeight());
//console.log("The final weight of the dog is : " + snoopy.weight)
//owl
let edwiges = new Owl_1.Owl("edwiges", 4);
edwiges.chirp();
edwiges.eat(2);
edwiges.fly(10);
console.log("The final weight of the owl is: " + edwiges.weight);
//# sourceMappingURL=index.js.map
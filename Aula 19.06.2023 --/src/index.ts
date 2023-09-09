import { Dog } from "./Dog";
import { Owl } from "./Owl";

//dog
let scooby = new Dog ("Scooby Doo", 30)

scooby.bark()

scooby.eat(10)

//console.log(scooby)




//dog
let snoopy = new Dog ("Snoopy", 5)

snoopy.bark()
console.log("before " + snoopy.getWeight())
snoopy.eat(3)
console.log("after " + snoopy.getWeight())



//console.log("The final weight of the dog is : " + snoopy.weight)



//owl
let edwiges = new Owl ("edwiges", 4)

edwiges.chirp()
edwiges.eat(2)
edwiges.fly(10)

console.log("The final weight of the owl is: " + edwiges.weight)
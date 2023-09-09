import {Person} from "./types/People"
import { Professional } from "./types/Professional"
import { Teacher } from "./types/Teacher"
import { Class } from "./types/Class"

let student: Person = {
    name: "Henrique",
    age: 19,
    birth: "September, 10th"
}

let teacher: Teacher = {
    name: "sofia", 
    age: 28,
    birth: 1980,
    salary: 2300,
    graduation: "Cybersecurity",
    class: Class.CLASS2
}



/*
type person = {
    name: string,
    age: number
}
*/

console.log(student)
console.log(teacher)
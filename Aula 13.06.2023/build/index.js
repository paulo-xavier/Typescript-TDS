"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Class_1 = require("./types/Class");
let student = {
    name: "Henrique",
    age: 19,
    birth: "September, 10th"
};
let teacher = {
    name: "sofia",
    age: 28,
    birth: 1980,
    salary: 2300,
    graduation: "Cybersecurity",
    class: Class_1.Class.CLASS2
};
/*
type person = {
    name: string,
    age: number
}
*/
console.log(student);
console.log(teacher);

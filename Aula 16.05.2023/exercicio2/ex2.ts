//exercicio 2

//2. Faça um algoritmo que receba dois números e apresente a soma, divisão,
//multiplicação e subtração desses dois números

import * as leitor from "readline-sync"

let num1: number = leitor.questionInt("Input a number")
let num2:number = leitor.questionInt("Input another number")

const sum = num1 + num2
const sub = num1 - num2
const div = num1 / num2
const mul = num1 * num2


console.log("\n -------------------------------------- \n ")

console.log(`The sum between ${num1} and ${num2} is ${sum} \n`) 

console.log(`The subtraction between ${num1} and ${num2} is ${sub} \n`)

console.log(`The multiplication between ${num1} and ${num2} is ${mul} \n`)

console.log(`The sum division ${num1} and ${num2} is ${div} \n`)

console.log("\n -------------------------------------- \n ")





const average: number = (sum + sub + div + mul) / 4

console.log(`The average is: ${average} `)

setTimeout(() => {}, 2000)

console.log("\n -------------------------------------- \n ")

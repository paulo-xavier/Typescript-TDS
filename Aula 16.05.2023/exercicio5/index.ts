/* 

2. Faça um algoritmo que receba dois números e qual operação deve ser realizada
(soma, subtração, multiplicação ou divisão). Exiba a operação e o resultado na tela.

*/

import * as leitor from "readline-sync"

console.log(" Hello, welcome!")

const n1: number = leitor.questionInt("Input a number: ")
const n2: number = leitor.questionInt("Input another number: ")

console.log("\n Choose the arithmetic operation between these numbers: ")

console.log("| 1- Addition ")
console.log("| 2- Subtraction ")
console.log("| 3- Multiplication ")
console.log("| 4- Division ")

let op: number = leitor.questionInt("Answer: ")

if (op == 1){
    console.clear()
    console.log("\n -- ADDITION --    \n ")
    console.log(`The sum between ${n1} and ${n2} is ${n1 + n2} \n`)

} else if (op == 2){
    console.clear()
    console.log("\n -- SUBTRACTION --    \n ")
    console.log(`The subtraction between ${n1} and ${n2} is ${n1 - n2} \n`)

} else if (op == 3 ){
    console.clear()
    console.log("\n -- MULTIPLICATION --    \n ")
    console.log(`The multiplication between ${n1} and ${n2} is ${n1 * n2}\n `)

} else if (op == 4){
    console.clear()
    console.log("\n -- DIVISION --    \n ")
    console.log(`The division between ${n1} and ${n2} is ${n1 / n2}\n`)
} else {
    console.clear()
    console.log(" INVALID OPERATION! \n ")
}




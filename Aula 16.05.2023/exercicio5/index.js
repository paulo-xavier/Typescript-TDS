"use strict";
/*

2. Faça um algoritmo que receba dois números e qual operação deve ser realizada
(soma, subtração, multiplicação ou divisão). Exiba a operação e o resultado na tela.

*/
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
console.log(" Hello, welcome!");
var n1 = leitor.questionInt("Input a number: ");
var n2 = leitor.questionInt("Input another number: ");
console.log("\n Choose the arithmetic operation between these numbers: ");
console.log("| 1- Addition ");
console.log("| 2- Subtraction ");
console.log("| 3- Multiplication ");
console.log("| 4- Division ");
var op = leitor.questionInt("Answer: ");
if (op == 1) {
    console.clear();
    console.log("\n -- ADDITION --    \n ");
    console.log("The sum between ".concat(n1, " and ").concat(n2, " is ").concat(n1 + n2, " \n"));
}
else if (op == 2) {
    console.clear();
    console.log("\n -- SUBTRACTION --    \n ");
    console.log("The subtraction between ".concat(n1, " and ").concat(n2, " is ").concat(n1 - n2, " \n"));
}
else if (op == 3) {
    console.clear();
    console.log("\n -- MULTIPLICATION --    \n ");
    console.log("The multiplication between ".concat(n1, " and ").concat(n2, " is ").concat(n1 * n2, "\n "));
}
else if (op == 4) {
    console.clear();
    console.log("\n -- DIVISION --    \n ");
    console.log("The division between ".concat(n1, " and ").concat(n2, " is ").concat(n1 / n2, "\n"));
}
else {
    console.clear();
    console.log(" INVALID OPERATION! \n ");
}

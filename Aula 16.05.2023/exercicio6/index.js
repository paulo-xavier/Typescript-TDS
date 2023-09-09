"use strict";
/*

3. Faça um algortimo que receba um valor em reais e pergunte para qual moeda
deseja converter (dolar, pesos uruguaios ou euros). Informe o resultado final.
(Utilize a cotação do google).

*/
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
console.log(" --CURRENCY CONVERTER-- ");
var real = leitor.questionFloat("Input a value in Real: ");
console.log("\n Choose the currency that you want to convert: \n");
console.log(" | 1- Dolar");
console.log(" | 2- Uruguayan Pesos");
console.log(" | 3- Euro");
var op = leitor.questionInt("\n Answer: ");
if (op == 1) {
    console.clear();
    console.log("\n --REAL TO DOLAR-- \n");
    console.log(" R$ ".concat(real, " is equal to U$ ").concat(real * 0.20, " \n "));
}
else if (op == 2) {
    console.clear();
    console.log("\n --REAL TO URUGUAYAN PESOS-- \n");
    console.log(" R$ ".concat(real, " is equal to U$ ").concat(real * 7.77, " \n "));
}
else if (op == 3) {
    console.clear();
    console.log("\n --REAL TO EURO-- \n");
    console.log(" R$ ".concat(real, " is equal to U$ ").concat(real * 0.18, " \n "));
}
else {
    console.clear();
    console.log("\n --CURRENCY NOT FOUND!-- \n");
}

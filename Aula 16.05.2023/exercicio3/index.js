"use strict";
/*

exercício 3

3. Faça um algoritmo que converta valores de reais (R$) para dolares (U$). Pergunte
pro usuário a cotação do dolar e quantos dolares ele tem.

a. Atualize o programa e adicione 10% de taxa em cima do valor convertido

*/
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var value = leitor.questionInt("What's is the value of dolar? ");
var quant = leitor.questionInt("How many dollars do you have? ");
var totalDolar = value * quant; // total of dolar
var total = (0.10 * totalDolar) + totalDolar; //total adding 10%
console.clear();
var realValue = total / 0.20;
console.log("\n ............................................................. \n ");
console.log("You have U$ ".concat(total, " now, converting in real: R$ ").concat(realValue));
console.log("\n ............................................................. \n ");

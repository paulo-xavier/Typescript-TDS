/*

exercício 3

3. Faça um algoritmo que converta valores de reais (R$) para dolares (U$). Pergunte
pro usuário a cotação do dolar e quantos dolares ele tem.

a. Atualize o programa e adicione 10% de taxa em cima do valor convertido

*/

import * as leitor from "readline-sync"

const value: number = leitor.questionInt("What's is the value of dolar? ")
const quant: number =  leitor.questionInt("How many dollars do you have? ")

const totalReal = value * quant // total of real

const total = (0.10 * totalReal) + totalReal //total real adding 10%

console.clear()

const realValue = total / 0.20 



console.log("\n ............................................................. \n ")
console.log(`You have R$ ${total} now, converting in dolar: U$ ${realValue}`)
console.log("\n ............................................................. \n ")



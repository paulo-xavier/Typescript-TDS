/*

3. Faça um algortimo que receba um valor em reais e pergunte para qual moeda
deseja converter (dolar, pesos uruguaios ou euros). Informe o resultado final.
(Utilize a cotação do google).

*/

import * as leitor from "readline-sync"

console.log(" --CURRENCY CONVERTER-- ")

const real: number = leitor.questionFloat("Input a value in Real: ")

console.log("\n Choose the currency that you want to convert: \n")
console.log(" | 1- Dolar")
console.log(" | 2- Uruguayan Pesos")
console.log(" | 3- Euro")
console.log(" | 4- Japanese Yen")

const op: number = leitor.questionInt("\n Answer: ")

if(op == 1){
    console.clear()
    console.log("\n --REAL TO DOLAR-- \n")
    console.log(` R$ ${real} is equal to U$ ${real * 0.20} \n `)

} else if (op == 2 ){
    console.clear()
    console.log("\n --REAL TO URUGUAYAN PESOS-- \n")
    console.log(` R$ ${real} is equal to U$ ${real * 7.77} \n `)

} else if (op == 3 ){
    console.clear()
    console.log("\n --REAL TO EURO-- \n")
    console.log(` R$ ${real} is equal to U$ ${real * 0.18} \n `)

} else if (op == 4){
    console.clear()
    console.log("\n --REAL TO JAPANESE YEN-- \n")
    console.log(` R$ ${real} is equal to U$ ${real * 27.61} \n `)
} else {
    console.clear()
    console.log("\n --CURRENCY NOT FOUND!-- \n")
}

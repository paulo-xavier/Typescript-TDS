/*

**#1 Conversão de Tempo**

Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

****Entrada****

A entrada contém um valor inteiro **N**.

****Saída****

Imprima o tempo lido de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.

*/

import * as leitor from "readline-sync"

let hours:number = 0
let min: number  = 0
let sec:number  = 0

let timeInSec: number = leitor.questionInt("Input a number: ")

if (timeInSec == 0){
    console.log("ERROR")
} else {

while(timeInSec > 0){
    
if (timeInSec >= 3600){

    hours = hours + 1
    
    timeInSec = timeInSec - 3600

} else if (timeInSec < 3600 && timeInSec >= 60){
  
    min = min + 1

    timeInSec = timeInSec - 60
} else  {
   
    sec = timeInSec
    timeInSec = 0

}

}

}
console.log(`${hours} : ${min} : ${sec} `)
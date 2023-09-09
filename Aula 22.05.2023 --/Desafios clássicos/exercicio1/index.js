"use strict";
/*

**#1 Conversão de Tempo**

Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

****Entrada****

A entrada contém um valor inteiro **N**.

****Saída****

Imprima o tempo lido de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.

*/
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var hours = 0;
var min = 0;
var sec = 0;
var timeInSec = leitor.questionInt("Input a number: ");
if (timeInSec == 0) {
    console.log("ERROR");
}
else {
    while (timeInSec > 0) {
        if (timeInSec >= 3600) {
            hours = hours + 1;
            timeInSec = timeInSec - 3600;
        }
        else if (timeInSec < 3600 && timeInSec >= 60) {
            min = min + 1;
            timeInSec = timeInSec - 60;
        }
        else {
            sec = timeInSec;
            timeInSec = 0;
        }
    }
}
console.log("".concat(hours, " : ").concat(min, " : ").concat(sec, " "));

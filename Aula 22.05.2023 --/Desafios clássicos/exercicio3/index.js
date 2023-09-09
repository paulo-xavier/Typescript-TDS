"use strict";
/*

- **#3 Tempo de Jogo**
    
    Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, sabendo que o mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24 horas.
    
    ****Entrada****
    
    A entrada contém dois valores inteiros representando a hora de início e a hora de fim do jogo.
    
    ****Saída****
    
    Apresente a duração do jogo conforme exemplo abaixo.

*/
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var cont = 0;
var hours = 0;
var start = leitor.questionInt("What time did the game start?");
var end = leitor.questionInt("What time did the game ends up?");
if (start == end) {
    console.log("The game totaled 24 hours!"); // totaled = how long the game was
}
else {
    while (start != end) {
        if (start == 24) {
            start = 0;
        }
        cont++;
        start++;
    }
    console.log("The game totaled ".concat(cont, " hours!!"));
}

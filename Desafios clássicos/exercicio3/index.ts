/*

- **#3 Tempo de Jogo**
    
    Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, sabendo que o mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24 horas.
    
    ****Entrada****
    
    A entrada contém dois valores inteiros representando a hora de início e a hora de fim do jogo.
    
    ****Saída****
    
    Apresente a duração do jogo conforme exemplo abaixo.

*/

import * as leitor from "readline-sync"

let cont = 0
let hours = 0
let start: number = leitor.questionInt("What time did the game start?")
const end: number = leitor.questionInt("What time did the game ends up?")


if (start == end){
    console.log("The game totaled 24 hours!") // totaled = how long the game was
} else {

    while (start != end){
        

        if (start == 24){
            start = 0
        }
        cont++ 
        start++
    }
console.log(`The game totaled ${cont} hours!!`)
}


/*

(Escolha-caso)

1. Faça um algoritmo que pergunte o nome e horário do dia. Receba M para manhã, T
para tarde e N para noite. Escreva “Bom dia, nome”, “Boa tarde, nome” ou “Boa
noite, nome”, de acordo com o horário.

*/

import * as leitor from "readline-sync"

console.log("\n Hello, welcome! \n")

const name: string = leitor.question(" --> Input your name: ")

console.log ("\n What time of the day is now? \n")
console.log(" | M | - Morning ")
console.log(" | A | - Afternoon ")
console.log(" | N | - Night ")

const timeOfTheDay: string = leitor.question("Option: ").toLowerCase()

switch(timeOfTheDay){
    case "m":
        console.clear()
        console.log(`\n Good morning, ${name}\n `)
        break
    
    case "a":
        console.clear()
        console.log(`\n Good afternoon, ${name} \n `)
        break
    
    case "n":
        console.clear()
        console.log(`\n Good night, ${name}\n `)
        break
    
    default:
        console.clear()
        console.log("\n INVALID OPTION \n")

}


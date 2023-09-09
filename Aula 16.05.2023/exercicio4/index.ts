/*

exercicio 4 ( SE SENÃO )

1. Faça um algoritmo que pergunte o nome e o gênero de um ou uma usuário. Se o
gênero for masculino diga “Bem vindo, nome”. Se for feminino diga “Bem vinda,
nome”. Se for não binário diga “Bem vinde, fulano”.

*/

import * as leitor from "readline-sync"

const name: string = leitor.question("What's yout name? ")
const genre: string = leitor.question("What's your genre? ")
genre.toLowerCase()

console.clear()

if (genre === "masculino"){
    console.log(`Welcome Mr.  ${name} `)
} else if (genre === "feminino"){
    console.log(`Welcome Ms. ${name} `)
}else {
    console.log(`Welcome ${name}`)
}



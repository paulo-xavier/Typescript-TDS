/*

2) A seguinte função em JavaScript pergunta ao usuário suas três cores favoritas e imprime no console um array que contenha essas três cores. Refatore a função para o Typescript.
*/


import * as leitor from "readline-sync"

function printThreeFavoriteColors() {
    
    const color1:string = leitor.question("Input your favorite color")
    const color2:string = leitor.question("Input your favorite color") 
    const color3:string = leitor.question("Input your favorite color")

    let colors: string[] = [color1 , color2, color3]
    
    console.log(colors)
}

printThreeFavoriteColors()

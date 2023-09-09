/*

5)  A função abaixo pergunta ao usuário o ano atual, o ano de nascimento de uma pessoa, e o ano em que sua carteira de identidade foi emitida (nessa ordem). A função retorna  um booleano que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:
- Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
- Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
- Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos

Dito isso, refatore a função para o Typescript.

*/

import * as leitor from "readline-sync"

function checkRenewRG () {
    const currentYear:number = leitor.questionInt("Input the current year:")
    const birthYear:number = leitor.questionInt ("Input yuour birth year:")
    const emissionYear:number = leitor.questionInt ("Input the emission year of the document: ")

    const age:number = currentYear - birthYear
    const timeWork:number = currentYear - emissionYear

    const cond1:boolean = age <= 20 && timeWork >= 5
    const cond2:boolean = age > 20 && age <= 50 && timeWork >= 10
    const cond3:boolean = age > 50 && timeWork >= 15

    return (cond1 || cond2 || cond3)



}

const result = checkRenewRG()
console.log(result)
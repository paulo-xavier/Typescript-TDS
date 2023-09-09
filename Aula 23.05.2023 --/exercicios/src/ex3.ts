/*

3) A função recebe um ano e retorna um booleano (true ou false) que indica se o ano é bissexto. Um ano é bissexto de acordo com as seguintes condições:

- **São bissextos** todos os anos múltiplos de 400**.**
- **São bissextos** todos os múltiplos de 4, exceto se for múltiplo de 100 mas não de 400**.**
- **Não são bissextos** todos os demais anos.

Com isso em mente, refatore a função para o Typescript.

*/


function checkLeapYear (year: number):boolean{
    const cond1:boolean = year % 400 === 0
    const cond2:boolean = (year % 4 === 0) && (year % 100 !== 0)
    return cond1 || cond2 
}

const resultado = checkLeapYear(2023)
console.log(resultado)

/* Console.log(checkLeapYear(2023)) */
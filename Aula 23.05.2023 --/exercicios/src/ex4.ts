/*

4) A seguinte função recebe dois números como parâmetro e retorna a diferença entre o maior número e o menor. Dessa forma, refatore a função para o Typescript.
*/


function compareTwoNumbers(num1: number, num2:number){
    let greaterNumber:number;
    let smallerNumber:number;

    if (num1 > num2){
        greaterNumber = num1;
        smallerNumber = num2;
    } else {
        greaterNumber = num2
        smallerNumber = num1
    }

    const diference:number = greaterNumber - smallerNumber 
    return diference
}

const result = compareTwoNumbers(5, 10)
console.log(result)

// console.log(comparaTwoNumbers(5,10))
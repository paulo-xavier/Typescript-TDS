/*

Exercício 6
    
Faça uma função que receba dois números como parâmetros e imprima no terminal, as seguintes informações:
    
a) A soma desses números
    
b) A subtração desses números
    
c) A multiplicação desses números
    
d) Qual deles é o maior
    
Você pode fazer todas as operações na mesma função.

*/


function doArithmeticOperations (num1:number, num2:number) {
    
    console.log(`The sum between ${num1} and ${num2} is ${num1+num2}`)
    console.log(`The subtration between ${num1} and ${num2} is ${num1-num2}`)
    console.log(`The multiplication between ${num1} and ${num2} is ${num1*num2} `)
    console.log("The larger number is " + Math.max(num1, num2)) 
}

doArithmeticOperations(4, 2)
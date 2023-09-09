
/*
1) A seguinte função em JavaScript recebe como parâmetro os tamanhos dos três lados do triângulo: ladoA, ladoB, ladoC e retorna se ele é equilátero, isósceles ou escaleno. Refatore a função para o Typescript.

*/


function checkTriangle (a: number, b:number, c:number) {
    if (a !== b && b !== c){
        return "Scalene";
    
    } else if ( a==b && b===c ){
        return "Equilateral"
    
    } else {
        return "Isosceles"
    
    }
} 

const result2 = checkTriangle(5,2,3)
console.log(result2)


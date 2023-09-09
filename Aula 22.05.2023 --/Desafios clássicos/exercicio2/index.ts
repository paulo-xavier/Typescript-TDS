/* 

**#2 Gasto de Combustível**
    
    Joaozinho quer calcular e mostrar a quantidade de litros de combustível gastos em uma viagem, ao utilizar um 
    automóvel que faz 12 KM/L. Para isso, ele gostaria que você o auxiliasse através de um simples programa. 
    Para efetuar o cálculo, deve-se fornecer o tempo gasto na viagem (em horas) e a velocidade média durante a mesma
     (em km/h). Assim, pode-se obter distância percorrida e, em seguida, calcular quantos litros seriam necessários.
      Mostre o valor com 3 casas decimais após o ponto.
    
    ****Entrada****
    
    A entrada contém dois inteiros. O primeiro é o tempo gasto na viagem (em horas) e o segundo é a velocidade média 
    durante a mesma (em km/h).
    
    **Saída**
    
    Imprima a quantidade de litros necessária para realizar a viagem, com três dígitos após o ponto decimal

    */

    import * as leitor from "readline-sync"


    let time: number = leitor.questionFloat("How long was your travel? [hours] ")
    let  averageSpeed: number = leitor.questionFloat("What was the average speed? ")

    const deltaS : number = time * averageSpeed 

    const liters: number = (deltaS / 12)
    
    const result = liters.toFixed(3) // Round the number to 2 decimal places

    console.clear()

    console.log(`\n You will need ${result} to travel \n`)

    

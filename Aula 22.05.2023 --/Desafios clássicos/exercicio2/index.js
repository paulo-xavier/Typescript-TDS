"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var time = leitor.questionFloat("How long was your travel? [hours] ");
var averageSpeed = leitor.questionFloat("What was the average speed? ");
var deltaS = time * averageSpeed;
var liters = (deltaS / 12);
var result = liters.toFixed(3);
console.clear();
console.log("\n You will need ".concat(result, " to travel \n"));

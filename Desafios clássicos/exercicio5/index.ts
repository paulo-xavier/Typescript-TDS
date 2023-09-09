/*

- **#5 PUM**
    
Escreva um programa que leia um valor inteiro N. 
Este N é a quantidade de linhas de saída que serão 
apresentadas na execução do programa.
    
    **Entrada**
    
A entrada contém um número inteiro positivo N.
    
    **Saída**
    
Imprima a saída conforme o exemplo fornecido.

*/


import * as leitor from "readline-sync"

const n: number = leitor.questionInt("Input the number of lines: ");

if (n < 0) {
    console.log("Invalid number!");
  } else {
    let linha: string[] = [];
  
    for (let i = 1; i <= n; i++) {
      linha = [];
  
      for (let j = i * 4 - 3; j <= i * 4; j++) {
        if (j % 4 === 0) {
          linha.push("pum");
        } else {
          linha.push(j.toString());
        }
      }
  
      console.log(linha.join(" "));
    }
  }
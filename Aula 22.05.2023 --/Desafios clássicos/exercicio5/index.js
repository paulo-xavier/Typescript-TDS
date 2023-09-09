"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
/*
import * as leitor from "readline-sync"

const n: number = leitor.questionInt("Input a number: ")

let linhas = n

 let vetor: number[] = []

if ( n < 0){
    console.log("Invalid")

} else {
    


    for (let i = 1; i <=linhas ; i++){
        
        while (linhas < n){
        if (i % 4 == 0){
            
            console.log(vetor.join(" "))
            console.log( "pum" )
            vetor = []
            linhas++
        
        } else {
        
        vetor[i] = i

            
        }
            
            
        }
            
            
            
    }

        
}

*/
var leitor = require("readline-sync");
var n = leitor.questionInt("Input the number of lines: ");
if (n < 0) {
    console.log("Invalid number!");
}
else {
    var linha = [];
    for (var i = 1; i <= n; i++) {
        linha = [];
        for (var j = i * 4 - 3; j <= i * 4; j++) {
            if (j % 4 === 0) {
                linha.push("pum");
            }
            else {
                linha.push(j.toString());
            }
        }
        console.log(linha.join(" "));
    }
}

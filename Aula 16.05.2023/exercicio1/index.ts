//exercício1

//1. Faça um algoritmo que pergunte o nome do usuário e dê boas vindas para ele


import * as leitor from "readline-sync"

let nome: string = leitor.question("Hello, what's your name? ")

console.log("Welcome", nome)
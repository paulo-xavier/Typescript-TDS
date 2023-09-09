"use strict";
/*

1. Faça um algoritmo que pergunte o nome e o gênero de um ou uma usuário. Se o
gênero for masculino diga “Bem vindo, nome”. Se for feminino diga “Bem vinda,
nome”. Se for não binário diga “Bem vinde, fulano”.

*/
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var name = leitor.question("What's yout name? ");
var genre = leitor.question("What's your genre? ");
genre.toLowerCase();
console.clear();
if (genre === "masculino") {
    console.log("Welcome Mr.  ".concat(name, " "));
}
else if (genre === "feminino") {
    console.log("Welcome Ms. ".concat(name, " "));
}
else {
    console.log("Welcome ".concat(name));
}

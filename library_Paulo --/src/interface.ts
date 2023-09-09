import * as leitor from "readline-sync"


//declaração de interface cliente

//interface é um construtor padrão que pode ser reutilizado e não precisará ser criado novamente diferentemente do objeto.

interface cliente {
    codigo: number,
    nome: string,
    cpf: number,
    status: boolean;

}

// declaração de inferface de livr0

interface livro {
    nome: string,
    status: boolean,
    codigo: number;
    // nome, status e codigo são atributos da interface
}


// declaração de inferface de emprestimo

interface emprestimo {
    codigoCliente: number,
    codigo_Livro: number;
}



// criação de array com interface
let clientes: cliente [] = [];

// criação de array com interface
let livros: livro [] = [];

// criação de array com interface
let emprestimos: emprestimo [] = [];


function verifiedPassword (): boolean {
    const password = "admin";
    let passwordCheck: string = leitor.question("Input the password: ")
    let result:boolean = false;

    if (password === passwordCheck) {
        result = true;
    } else {
        console.log("Incorrect password")
    }

    return result;
}

function save () {
    let returnPassword: boolean = verifiedPassword()


    if (returnPassword){
        
    }

}








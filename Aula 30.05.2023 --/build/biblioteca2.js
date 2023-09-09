"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const leitor = __importStar(require("readline-sync"));
const clientArray = [];
const statusArrayClient = [];
const bookArray = [];
const statusArrayBook = [];
function mainMenu() {
    console.log("\n ===== Library =====\n");
    console.log(" 1- Create client ");
    console.log(" 2- List client ");
    console.log(" 3- Create book ");
    console.log(" 4- List books ");
    console.log(" 5- Lend books ");
    console.log(" 6- Return book ");
    console.log("    7-    Leave");
    const op = leitor.questionInt("\nChoose an option: ");
    switch (op) {
        case 1:
            createClient();
            mainMenu();
            break;
        case 2:
            listClient();
            mainMenu();
            break;
        case 3:
            createBook();
            mainMenu();
            break;
        case 4:
            listBook();
            mainMenu();
            break;
        case 5:
            lendBook();
            mainMenu();
            break;
        case 6:
            returnBook();
            mainMenu();
            break;
        case 7:
            console.clear();
            console.log("LEAVING...");
            break;
    }
}
function createClient() {
    const name = leitor.question("Input your name: ");
    const cpf = leitor.questionFloat("Input your cpf: ");
    let client = {
        name: name,
        cpf: cpf,
        status: false,
        code: clientArray.length
    };
    clientArray.push(client);
}
function listClient() {
    console.clear();
    console.log("----------------------------------------------");
    console.log("CLIENTS LIST: ");
    console.log("----------------------------------------------");
    console.table(clientArray, ["code", "name", "cpf", "status"]);
    console.log("----------------------------------------------");
}
function createBook() {
    let bookName = leitor.question("Input the name of the book");
    let book = {
        name: bookName,
        code: bookArray.length,
        status: false
    };
    bookArray.push(book);
}
function listBook() {
    console.clear();
    console.log("### BOOKS LIST \n");
    console.table(bookArray, ["code", "name", "status"]);
}
function lendBook() {
    console.log(" ---- LEND BOOKS ----  \n");
    const codeClient = leitor.questionInt("Input the client code: ");
    const codeBook = leitor.questionInt("Input the code of the book: ");
    if (codeClient > clientArray.length || codeBook > bookArray.length || bookArray.length == 0 || clientArray.length == 0) {
        console.clear();
        console.log("Invalid code!");
    }
    else {
        if (clientArray[codeClient].status === false) {
            if (bookArray[codeBook].status === false) {
                console.clear();
                console.log("Nice! Now the book belongs to you!");
                clientArray[codeClient].status = true;
                bookArray[codeBook].status = true;
            }
            else {
                console.clear();
                console.log("Oh, you can't lend this book! Someone already did it! ");
            }
        }
        else {
            console.clear();
            console.log("You can't lend this book! You already have one book! ");
        }
    }
    console.log("Returning to menu");
}
function returnBook() {
    console.log(" ---- LEND BOOKS ----  \n");
    const codeClient = leitor.questionInt("Input the client code: ");
    const codeBook = leitor.questionInt("Input the code of the book: ");
    if (codeClient > clientArray.length || codeBook > bookArray.length || bookArray.length == 0 || clientArray.length == 0) {
        console.clear();
        console.log("Invalid code!");
    }
    else {
        if (clientArray[codeClient].status === true) {
            if (bookArray[codeBook].status === true) {
                console.clear();
                const op = leitor.questionInt("Did you pass the time limit to return the book? 1- Yes / 2- No");
                if (op === 1) {
                    const days = leitor.questionFloat("How many days? ");
                    console.log(`Unfortunately you will to pay a extra value of R$ ${days * 5}`);
                }
                console.log("Nice! Now the book returned to the library!");
                clientArray[codeClient].status = false;
                bookArray[codeBook].status = false;
            }
            else {
                console.log("Oops! Wrong code of the book! ");
            }
        }
        else {
            console.log("Oops! You can't return a book, because you don't have one! ");
        }
    }
    console.log("Returning to menu ");
}
mainMenu();
//# sourceMappingURL=biblioteca2.js.map
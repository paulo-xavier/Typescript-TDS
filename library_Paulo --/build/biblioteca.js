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
let clients = [];
let books = [];
let CPF = [];
let status = [];
let supportArrayClients = 0;
let supportArrayBooks = 0;
let supportArrayCPF = 0;
let supportArrayStatus = 0;
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
            break;
        case 2:
            listClients();
            break;
        case 3:
            createBook();
            break;
    }
}
function createClient() {
    console.clear();
    console.log("\n ---- CREATE CLIENT ----\n");
    clients[supportArrayClients] = leitor.question("Input your name: ");
    supportArrayClients++;
    CPF[supportArrayCPF] = leitor.question("Input your CPF");
    supportArrayCPF++;
    status[supportArrayStatus] = false;
    supportArrayStatus++;
    console.clear();
    mainMenu();
}
function listClients() {
    console.clear();
    console.log("\n---------------------------");
    console.log(" CLIENTS LIST : ");
    console.log("---------------------------");
    console.log("CODE           | NAME         | CPF");
    console.log("----------------------------------------------");
    for (let supportArrayClients = 0; supportArrayClients < clients.length; supportArrayClients++) {
        console.log(supportArrayClients, " | ", clients[supportArrayClients], " | " + CPF[supportArrayClients], " | " + status[supportArrayClients], " | ");
    }
    console.log("\n");
}
function createBook() {
    console.clear();
    console.log(" ---- CREATE BOOK ---- ");
    books[supportArrayBooks] = leitor.question("Input the name of the book you want to create: ");
    supportArrayBooks++;
    status[supportArrayStatus] = false;
    supportArrayStatus++;
}
mainMenu();
//# sourceMappingURL=biblioteca.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccount = void 0;
class UserAccount {
    constructor(cpf, name, age) {
        this.balance = 0;
        this.transactions = [];
        console.log("Calling the User class constructor");
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
    getCpf() {
        return this.cpf;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
    getBalance() {
        return this.balance;
    }
    AddTransaction(data) {
        this.transactions.push(data);
        this.balance += data.getValues();
    }
    ReturnTransaction() {
        return this.transactions;
    }
}
exports.UserAccount = UserAccount;

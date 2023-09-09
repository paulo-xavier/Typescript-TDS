"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
class Bank {
    constructor() {
        this.accounts = [];
        this.accounts = [];
    }
    getAccounts() {
        return this.accounts;
    }
    setAccount(account) {
        this.accounts.push(account);
    }
}
exports.Bank = Bank;

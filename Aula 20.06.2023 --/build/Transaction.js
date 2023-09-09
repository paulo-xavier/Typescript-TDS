"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
class Transaction {
    constructor(description, value, date) {
        this.description = description;
        this.value = value;
        this.date = date;
    }
    getDescription() {
        return this.description;
    }
    getValues() {
        return this.value;
    }
    getDate() {
        return this.date;
    }
    setDescription(description) {
        this.description = description;
        console.log(this.description);
    }
    setValue(value) {
        this.value = value;
        console.log(this.value);
    }
    setDate(date) {
        this.date = date;
        console.log(this.date);
    }
}
exports.Transaction = Transaction;

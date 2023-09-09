"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const User_1 = require("./User");
class Customer extends User_1.User {
    constructor(id, email, name, password, creditCard) {
        super(id, email, name, password);
        this.purchaseTotal = 0;
        console.log("Calling the Costumer class constructor");
        this.creditCard = creditCard;
    }
    getCreditCard() {
        return this.creditCard;
    }
}
exports.Customer = Customer;

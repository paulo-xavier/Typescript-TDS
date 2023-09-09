"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seller = void 0;
const Employee_1 = require("./Employee");
class Seller extends Employee_1.Employee {
    constructor() {
        super(...arguments);
        this.salesQuantity = 0;
    }
    setSalesQuantity(salesQuantity) {
        this.salesQuantity = salesQuantity;
    }
    getSalesQuantity() {
        return this.salesQuantity;
    }
    calculateTotalSalary() {
        return this.baseSalary + 20 + this.salesQuantity * 5;
    }
}
exports.Seller = Seller;

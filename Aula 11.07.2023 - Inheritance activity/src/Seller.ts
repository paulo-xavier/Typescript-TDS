import { Employee } from "./Employee";

export class Seller extends Employee {



    private salesQuantity: number = 0;
    static SELLING_COMMISION:number = 5; 
    
    
    setSalesQuantity(salesQuantity: number){
        this.salesQuantity = salesQuantity; 
    }

    getSalesQuantity(): number {
        return this.salesQuantity;
    }

    calculateTotalSalary(): number {
        return this.baseSalary + Employee.BENEFITS_VALUE + this.salesQuantity * Seller.SELLING_COMMISION;
    }

}
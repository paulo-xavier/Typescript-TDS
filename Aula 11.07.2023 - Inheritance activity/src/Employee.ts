import { User } from "./User";

export class Employee extends User {

    static BENEFITS_VALUE:number = 400;
    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        protected admissionDate: Date, 
        protected baseSalary: number,
       
    ){
        super(id, email, name, password)

    }

    getAdmissionDate(): Date {
        return this.admissionDate;
    }

    getBaseSalary ():number {
        return this.baseSalary;
    }

    calculateTotalSalary():number {
        return this.baseSalary + Employee.BENEFITS_VALUE;
    }

}
import { Client } from "./Client";
import { Commerce } from "./Commerce";

export class CommercialCLient extends Commerce implements Client {
    
    constructor(
        private cnpj: string,
        floorsQuantity: number,
        cep: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number
    
        
        
        ){
            super(floorsQuantity, cep)
        }


    getCnpj():string{
        return this.cnpj; 
    }

    calculateBill(): number {
        return this.consumedEnergy * 0.53
    }


}
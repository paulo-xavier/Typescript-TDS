import { Client } from "./Client";
import { Industry } from "./Industry";

export class IndustrialClient extends Industry implements Client {

    constructor(

        private industrialRegistrationNumber: string,
        machinesQuantity: number,
        cep: string, 
        public name: string,
        public registrationNumber: number, 
        public consumedEnergy: number        

    ) {
        super(machinesQuantity, cep);
     }


    getIndsutrialRegistrationNumber(): string {
        return this.industrialRegistrationNumber;
    }

    calculateBill(): number {
        return (0.45 * this.consumedEnergy) + (100 * this.machinesQuantity); 
    }

}
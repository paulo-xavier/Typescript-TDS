import { Place } from "./Place";

export class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        // Refer the quantity of machines in the local 


        cep: string
    ) {
        super(cep);
    }

    public getMachinesQuantity(): number {
        return this.machinesQuantity;
    }



}
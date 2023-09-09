import { Place } from "./Place";

export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        // Refer the quantity of floors in the place


        cep: string
    ) {
        super(cep);
    }

    public getFloorsQuantity():number{
        return this.floorsQuantity; 
    }

}
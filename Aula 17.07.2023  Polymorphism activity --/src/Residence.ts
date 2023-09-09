import { Place } from "./Place";

export class Residence extends Place {
    constructor(protected residentsQuantity: number,
      // Refer to the number of households member
  
      cep: string
    ) {
      super(cep);
    }
  

    public getResidentsQuantity():number {
        return this.residentsQuantity; 
    }





}
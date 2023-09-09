export interface Client {
    name: string;
    // Referer the name of the client 
  
    registrationNumber: number;
      // Refer the number of client's registration in the light provider
      // as an ID
  
    consumedEnergy: number;
    // refer the amount of energy consumed by the client in the month

    calculateBill(): number;
    // return the value of the bill in Reais
  }
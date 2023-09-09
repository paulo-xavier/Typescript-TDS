import { Client } from "./Client";
import { ClientManager } from "./ClientManager";
import { Commerce } from "./Commerce";
import { CommercialCLient } from "./CommercialClient";
import { IndustrialClient } from "./IndustrialClient";
import { Industry } from "./Industry";
import { Residence } from "./Residence";
import { ResidentialCLient } from "./ResidentialClient";

const client: Client = {
    name: "Paulo", 
    registrationNumber: 13,
    consumedEnergy: 23,

    calculateBill:  ()  => {
        return 2 ;
    }

}

console.log(client)
console.log(client.calculateBill())


//Trying to create a New Instance of the class Place

// const miami = new Place("03245-56"); 


console.log(".......")


//Creating an instance of Residence and 
const residence1 = new Residence(5, "53644-52");
console.log(residence1.getCep());
 
console.log(residence1)


console.log("....")

//Creating an instance of Commerce

const commerce1 = new Commerce(10, "32655-02"); 
console.log(commerce1.getCep()); 

console.log(commerce1);

console.log("...."); 

//Creating an instance of Industry 

const industry1 = new Industry(300, "03254-56"); 
console.log(industry1.getCep());

console.log(industry1);

console.log("...."); 


//Creating instances for the ClientManager Test

const clientManager = new ClientManager() //Creating array clients management 

const residentialClient = new ResidentialCLient("032545444545", "122345-568", 3, "Paulo Xavier", 2698, 56) //creating residential client 
clientManager.registerCLient(residentialClient); //adding residential client to the array client management 



const indsutrialClient = new IndustrialClient("2356", 100, "32452036", "Iuri Saints", 45678, 636); 

clientManager.registerCLient(indsutrialClient); 


//
const commercialClient = new CommercialCLient("5654788989898-22.32", 5, "54236001", "Victor Hugo", 56565, 256);

clientManager.registerCLient(commercialClient); 



"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Commerce_1 = require("./Commerce");
const Industry_1 = require("./Industry");
const Residence_1 = require("./Residence");
const client = {
    name: "Paulo",
    registrationNumber: 13,
    consumedEnergy: 23,
    calculateBill: () => {
        return 2;
    }
};
console.log(client);
console.log(client.calculateBill());
//Trying to create a New Instance of the class Place
// const miami = new Place("03245-56"); 
console.log(".......");
//Creating an instance of Residence and 
const residence1 = new Residence_1.Residence(5, "53644-52");
console.log(residence1.getCep());
console.log(residence1);
console.log("....");
//Creating an instance of Commerce
const commerce1 = new Commerce_1.Commerce(10, "32655-02");
console.log(commerce1.getCep());
console.log(commerce1);
console.log("....");
//Creating an instance of Industry 
const industry1 = new Industry_1.Industry(300, "03254-56");
console.log(industry1.getCep());
console.log(industry1);
console.log("....");

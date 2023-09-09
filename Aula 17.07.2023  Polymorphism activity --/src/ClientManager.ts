import { Client } from "./Client";

export class ClientManager {
    
    constructor (private clients: Client[] = []) {} // // // 

    getClientsQuantity():number {
        return this.clients.length;
    }

    registerCLient(arrayTypeOfClient: Client):void {
        // arrayTypeOfClient.push(this.clients); 
        this.clients.push(arrayTypeOfClient); 
    }


    calculateBillOfClient(registrationNumber:number) : number {
        const foundClient = this.clients.find((client) =>{
            return client.registrationNumber === registrationNumber
        })

        if (foundClient){
            return foundClient.calculateBill()
        }

        return 0
    }

    calculateTotalIncome():void{
        let totalIncome:number = 0

        this.clients.forEach((client) => {
            totalIncome += client.calculateBill() 
        })
    }

    deleteUser(registerNumber: number){

        let  registrationNumberForDelete:number = 0; 

        for (let i = 0; i < this.clients.length; i++ ){
            if (this.clients[i].registrationNumber === registerNumber ){
                registrationNumberForDelete = i;
            }
        }
    
    if (registrationNumberForDelete !== undefined){
        this.clients.splice(registrationNumberForDelete, 1);
    }
    
    }



}
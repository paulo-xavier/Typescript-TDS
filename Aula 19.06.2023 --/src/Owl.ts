export class Owl {
    name: string;
    weight: number;


    constructor (name:string, weight:number){
        this.name = name
        this.weight = weight
    }
    
    
    eat(quantity:number) :void {
        console.log(this.name + " has eaten " + quantity)
        this.weight += quantity
    }

    chirp() :void {
        console.log("hu hu")
    }

    fly(time: number): void {
        if (time >= this.weight){
            console.log("The owl cannot fly now")
        } else {
        console.log("The owl has flown for " + time + " minutes")
        this.weight -= time
        }
    }


}
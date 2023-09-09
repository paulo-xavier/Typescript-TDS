export class Dog {
    name: string;
    private weight:number;


    constructor(name:string, weight:number){
        this.name = name
        this.weight = weight
    }

    getWeight():number {
        return this.weight
    }
    bark(): void{
        console.log("Au Au")
    }

    eat (quantity: number): void {
        console.log(this.name + " has eaten " + quantity)
        this.weight += quantity


    }

}
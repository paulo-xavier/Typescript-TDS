export class Warrior  {
    private name: string;
    private kind: string;
    private power: number;
    private health:  number;



    constructor (name: string, kind: string, power:number){
        this.name = name;
        this.kind = kind;
        this.power = power;
        this.health = 100;
    }

    // *encapsulation*  
    
    //GET = YOU CAN SEE THE CONTENT
    
    getNameWarrior():string {
        return this.name
    }

    getKindWarrior():string {
        return this.kind
    }

    getPowerWarrior():number{
        return this.power
    }

    getHealthWarrior():number {
        return this.health
    }


    // SET = YOU CAN CHANGE THE VALUE

    setNameWarrior(name:string){
        this.name = name
    }

    setKindWarrior(kindWarrior: string){
        this.kind = kindWarrior
    }

    setPowerWarrior(powerWarrior: number){
        this.power = powerWarrior
    }


    beDamaged(damaged:number):void{
        this.health -= damaged;
        
        if(this.health <= 0){
            console.log("You died! ")
        }else {
            console.log("You have  " + this.health + " of health! ")
        }

    }

    attackWarrior (): number {
        return this.power;
    }

    healthWarrior():number {
        return this.health;
    }
    

}
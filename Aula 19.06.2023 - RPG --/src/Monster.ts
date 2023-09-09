export class Monster {
    private name: string; 
    private power: number; 
    private health: number; 


    constructor (name:string){
        this.name = name;
        this.power = 50;
        this.health = 10;

    }

     // *encapsulation*  
    
    //GET = YOU CAN SEE THE CONTENT

    getNamemonster():string{
        return this.name;
    }

    getPowerMonster():number {
        return this.power
    }

    getHealthMonster():number {
        return this.health
    }


    // SET = YOU CAN CHANGE THE VALUE

    setNameMonster(name: string):void{
        this.name = name
    }


    attackMonster(): number {
        
        return this.power;
    }


    healthMonster (): number {

        return this.health;
    }

    beDamagedMonster (damaged:number): void {
        this.health -= damaged
        if (this.health <= 0){
            console.log("You died!")
        } else {
            console.log("You have " + this.health +  " of health")
        }
    }

    

}
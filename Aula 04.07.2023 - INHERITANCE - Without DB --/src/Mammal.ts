import { Animal } from "./Animal";

export class Mammal extends Animal {
    private hairOrFur: boolean;
    private mammaryGlands: number;
    private parentalCare: boolean; //
    private specializedTeeth: boolean; //

    constructor (name: string, eat: string, age: number, gender: string, hairOrFur: boolean, mammaryGlands: number, parentalCare: boolean, specializedTeeth:boolean){
        super(name, eat, age, gender); // send these attributes to the parent class
        this.hairOrFur = hairOrFur;
        this.mammaryGlands = mammaryGlands;
        this.parentalCare = parentalCare;
        this.specializedTeeth = specializedTeeth;
    }

    //get
    getHairOrFur():void {
        console.log(this.hairOrFur);
    }

    getMammaryGlands():void {
        console.log(this.mammaryGlands);
    }
    getParentalCare():void {
        console.log(this.parentalCare);
    }
    getSpecializedTeeth():void {
        console.log(this.specializedTeeth);
    }

    //set
    setHairOrFur(hairOrFur:boolean):void {
        this.hairOrFur = hairOrFur;
    }

    setMammaryGlands(mammaryGlands:number){
        this.mammaryGlands = mammaryGlands;
    }
    setparentalCare(parentalCare:boolean):void {
        this.parentalCare = parentalCare;
    }
    setSpecializedTeeth(specializedTeeth:boolean){
        this.specializedTeeth = specializedTeeth;
    }




    //method 

    sleep(name: string ){//
        console.log("The mammal is going to sleep because it ate a lot! ")
    }


    hunting(name: string){//
        console.log("The little" + this.name + "is playing with its mother! ")
    }



    breastfeed(){
        console.log("Giving milk!")
    }



}
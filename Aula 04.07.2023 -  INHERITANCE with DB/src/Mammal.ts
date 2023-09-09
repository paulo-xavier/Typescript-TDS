import { Animal } from "./Animal";

export class Mammal extends Animal {
    private hairOrFur: boolean;
    private mammaryGlandsAndMilkProduction: boolean;
    private parentalCare: boolean;
    private specializedTeeth: boolean; 

    constructor (name: string, eat: string, age: number, gender: string, hairOrFur: boolean, mammaryGlandsAndMilkProduction: boolean, parentalCare: boolean, specializedTeeth:boolean){
        super(name, eat, age, gender);
        this.hairOrFur = hairOrFur;
        this.mammaryGlandsAndMilkProduction = mammaryGlandsAndMilkProduction;
        this.parentalCare = parentalCare;
        this.specializedTeeth = specializedTeeth;
    }

    //get
    getHairOrFur():void {
        console.log(this.hairOrFur);
    }

    getMammaryGlandsAndMilkProduction():void {
        console.log(this.mammaryGlandsAndMilkProduction);
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

    setMammaryGlandsAndMilkProduction(mammaryGlandsAndMilkProduction:boolean){
        this.mammaryGlandsAndMilkProduction = mammaryGlandsAndMilkProduction;
    }
    setparentalCare(parentalCare:boolean):void {
        this.parentalCare = parentalCare;
    }
    setSpecializedTeeth(specializedTeeth:boolean){
        this.specializedTeeth = specializedTeeth;
    }


}
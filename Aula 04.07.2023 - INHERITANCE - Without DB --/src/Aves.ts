import { Animal } from "./Animal";

export class Aves extends Animal {

    private feather: string;
    private wingsAndFlight: boolean; 
    private beakAndToothlessJaw: boolean;
    private endothermy:boolean;

    constructor(name: string, eat: string, age: number, gender: string, feather:string, wingsAndFlight:boolean, beakAndToothlessJaw: boolean, endothermy:boolean){
        super(name,eat,age,gender);
        this.feather = feather;
        this.wingsAndFlight = wingsAndFlight;
        this.beakAndToothlessJaw = beakAndToothlessJaw;
        this.endothermy = endothermy;
    }

    //get
    getFeather():void{
        console.log(this.feather);
    }
    getWingsAndFlight():void {
        console.log(this.wingsAndFlight);
    }
    getBeakAndToothlessJaw():void {
        console.log(this.beakAndToothlessJaw);
    }
    getEndothermy():void {
        console.log(this.endothermy);
    }

    //set

    setFeather(feather:string):void {
        this.feather = feather;
    }
    setWingsAndFlight(wingsAndFlight: boolean):void {
        this.wingsAndFlight = wingsAndFlight;
    }

    setEndothermy(endothermy:boolean):void {
        this.endothermy = endothermy;
    }

    //methods

    changeColor(name: string, color: string){
        console.log(this.name + "has changed the color of its feathers, and now it's" + this.feather )
    }

    fly(name: string) {
        console.log(this.name + " is soaring through the sky!");
      }




}
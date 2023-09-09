//fish

import { Animal } from "./Animal";

export class Fish extends Animal {


    private breathDiveIntoWater: boolean; 
    private swim: boolean; 
    private backbone: boolean; 
    private gills: boolean;

    constructor (name: string, eat: string, age: number, gender:string, breathDiveIntoWater: boolean, swim:boolean, backbone: boolean, gills: boolean){
        super(name, eat, age, gender)
        this.breathDiveIntoWater = breathDiveIntoWater;
        this.swim = swim;
        this.backbone = backbone;
        this.gills = gills;
    
    }

    //get
    getBreathDiveIntoWater(){
        console.log(this.breathDiveIntoWater);
    }

    getSwim () {
        console.log(this.swim);
    }
    getBackbone(){
        console.log(this.backbone);
    }

    geGills(){
        console.log(this.gills);
    }


    //set

    setBreathDiveIntoWater(breathDiveIntoWater: boolean){
        this.breathDiveIntoWater = breathDiveIntoWater;
    }

    setSwim (swim:boolean) {
        this.swim = swim;
    }
    setBackbone(backbone: boolean){
        this.backbone = backbone;

    }

    setGills(gills: boolean){
        this.gills = gills;
    }






}
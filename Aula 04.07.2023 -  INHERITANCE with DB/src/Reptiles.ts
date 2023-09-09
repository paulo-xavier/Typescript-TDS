import { Animal } from "./Animal";


export class Reptile extends Animal {
    private scales: string;
    private lungs: boolean; 
    private terrestrialAdaptations: boolean;
    private carnivorousOrOmnivorousDiet:boolean;

    constructor (name: string, eat: string, age: number, gender: string, scales:string, lungs: boolean, terrestrialAdaptations: boolean, carnivorousOrOmnivorousDiet: boolean) {
        super(name, eat, age, gender)
        this.scales = scales;
        this.lungs = lungs;
        this.terrestrialAdaptations = terrestrialAdaptations;
        this.carnivorousOrOmnivorousDiet = carnivorousOrOmnivorousDiet;

    }

    //get
    getScales(): void{
        console.log(this.scales)
    }
    getLungs(): void{
        console.log(this.lungs)
    }
    getTerrestrialAdaptations():void{
        console.log(this.terrestrialAdaptations)
    }

    getarnivorousOrOmnivorousDiet():void{
        console.log(this.carnivorousOrOmnivorousDiet);
    }

    //set

    setScales(scales:string):void{
        this.scales = scales;
    }

    setLungs(lungs:boolean):void{
        this.lungs = lungs;
    }
    setTerrestrialAdaptations(TerrestrialAdaptations:boolean):void{
        this.terrestrialAdaptations = TerrestrialAdaptations;
    }

    setCarnivorousOrOmnivorousDiet(carnivorousOrOmnivorousDiet: boolean):void {
        this.carnivorousOrOmnivorousDiet = carnivorousOrOmnivorousDiet;
    }
}
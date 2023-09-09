import { Animal } from "./Animal";


export class Amphibian extends Animal {

        private aquaticAndTerrestrialAdaptations: boolean;
        private ectothermic: boolean;
        private moistureDependence: boolean; 
        private tetrapodLimbs: boolean; 

        constructor (name: string, eat: string, age: number, gender: string, aquaticAndTerrestrialAdaptations: boolean, ectothermic:boolean, moistureDependence: boolean, tetrapodLimbs: boolean){
            super(name, eat, age, gender)
            this.aquaticAndTerrestrialAdaptations = aquaticAndTerrestrialAdaptations;
            this.ectothermic = ectothermic;
            this.moistureDependence = moistureDependence;
            this.tetrapodLimbs  = tetrapodLimbs;
        }

        //get
        getAquaticAndTerrestrialAdaptations(){
            console.log(this.aquaticAndTerrestrialAdaptations);
        }

        getEctothermic(){
            console.log(this.ectothermic);
        }

        getMoistureDependence(){
            console.log (this.moistureDependence);
        }
        getTetrapodLimbs(){
            console.log(this.getTetrapodLimbs);
        }

        //set

        setaquaticAndTerrestrialAdaptations(aquaticAndTerrestrialAdaptations: boolean){
            this.aquaticAndTerrestrialAdaptations = aquaticAndTerrestrialAdaptations;
        }
        setEctothermic(ectothermic: boolean){
            this.ectothermic = ectothermic;
        }

        setMoistureDependence(moistureDependence: boolean){
            this.moistureDependence = moistureDependence;
        }

        setTetrapodLimbs(tetrapodLimbs: boolean){
            this.tetrapodLimbs = tetrapodLimbs;
        }







    

}
//Student

export class Student {
    
    
    private name : string
    private schoolSub: number[] = []
    private matriculation: number;


    constructor(name : string, schoolSub: number[], matriculation:number){
        this.name = name 
        this.schoolSub = []
        this.matriculation = matriculation;
    }
    
    getNameStudent(): string {
     return this.name;
    }
    setNameStudent(nameStudent : string){
        this.name = nameStudent;
    }

    getSchoolSub(): number[] {
        return this.schoolSub;
    }

    setSchoolSub (schoolSub:number[]) {
        this.schoolSub = schoolSub;
    }

    getMatriculation ():number {
        return this.matriculation
    }










}
import * as leitor from "readline-sync"

import { Teacher } from "./Teacher"

export class SchoolSubject {
    private schoolSubject: string[] = [];
    
    
    constructor (){
        this.schoolSubject = []
    }

    getSchoolSubject ():void {
        console.log(this.schoolSubject)

    }

    addSchoolSubject ():void {
        const schoolSubjectAnswer: string = leitor.question("Input the school subject ")
        this.schoolSubject.push(schoolSubjectAnswer)
    }
    


}

import * as leitor from "readline-sync"

export class Teacher {
    private teacherName: string[] = [];
    


    constructor (){
        this.teacherName = [];
    }


    getTeacherName(): void {
        console.log (this.teacherName)
    }

    addTeacherName ():void {
        const nameteacher: string = leitor.question("Input the name of a teacher: ") 
        this.teacherName.push(nameteacher)
    }




}



  
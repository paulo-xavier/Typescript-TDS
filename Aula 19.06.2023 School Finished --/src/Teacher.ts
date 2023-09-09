//teacher
export class Teacher {
    private nameTeacher : string 

    constructor(teacherName : string){
       this.nameTeacher = teacherName
    }
    getNameTeacher() : string {
     return this.nameTeacher
    }
    setNameTeacher(name:string){
       this.nameTeacher = name
    }
}
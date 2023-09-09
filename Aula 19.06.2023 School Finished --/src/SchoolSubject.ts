//SchoolSubject


export class SchoolSubject {
    private teacherCode : number
    private schoolSubject: string
     
    constructor (schoolSubject : string, teacherCode : number) {
     this.schoolSubject = schoolSubject
     this.teacherCode = teacherCode;
    }
     //get e setters da disciplina
    getNameSchoolSubject () : string {
    return this.schoolSubject
    }
    setName (name_SchoolSubj : string) {
     this.schoolSubject = name_SchoolSubj
    } 
     //get e setrs do codigo do professor
    getCodeTeacher () : number {
     return this.teacherCode
    }
    setCodeTeacher (code_Teacher : number) {
     this.teacherCode = code_Teacher
    } 
 }
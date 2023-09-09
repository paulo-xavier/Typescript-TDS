import * as leitor from "readline-sync"
import { SchoolSubject } from "./SchoolSubject"

export class Student {
    studentName: string[] = []


    constructor () {
        this.studentName = []
    }


    getStudentName () {
        console.log(this.studentName)
    }

    addStudentName () {
        const nameStudent:string = leitor.question("Input the name of the student: ")
        this.studentName.push(nameStudent) 
    }








}
//index

import * as leitor from "readline-sync"

import { Teacher } from "./Teacher"
import { SchoolSubject } from "./SchoolSubject"
import { Student } from "./Student"

let teacher: Teacher[] = []
let student: Student[] = []
let schoolSubject: SchoolSubject[] = []

function menu() {


    console.log("\n")

    console.log("1 - Register teacher ") // // // //
    console.log("2 - Register School Subject ") // // // //
    console.log("3 - Register students") // // // //
    console.log("4 - List school subjects ") // // // //
    console.log("5 - List teacher") // // // //
    console.log("6 - List student") // // // //
    console.log("7 - List students per school subject")
    console.log("8 - List School Subject per teacher")
    console.log("9 - List students per school subject")
    console.log("0 - Leave")

    let option = leitor.questionInt("Input the correct option: ")

    switch (option) {

        case 1:
            registerTeacher()
            menu()
            break
        case 2:
            registerSchoolSubject()
            menu()
            break
        case 3:
            registerStudents()
            menu()
            break
        case 4:
            listSchoolSubject()
            menu()
            break
        case 5:
            listTeacher()
            menu()
            break
        case 6:
            listStudent()
            menu()
            break
        case 7:
            listStudentsPerSchoolSubject()
            menu()
            break
        case 8:
            listSchoolSubjectPerTeacher()
            menu()
            break
        case 9:
            listStudentsPerTeacher()
            menu()
            break
        case 0:
            leave()
            break
        default:
            menu()

    }
}


function registerTeacher() {
    let name: string = leitor.question("Input the name of the teacher: ")

    let exist = false;
    for (let i = 0; i < teacher.length; i++) {
        if (teacher[i].getNameTeacher() === name) {
            exist = true

        }

    }

    if (exist === true) {
        console.log("Teacher already registered!");

    } else {

        let teacherName = new Teacher(name)

        teacher.push(teacherName)

    }
}

function listTeacher() {
    if (teacher.length === 0) {
        console.log("There aren't teachers registred!")
    } else {
        console.log("\n")
        console.log("Registered Teachers \n")
        for (let i = 0; i < teacher.length; i++) {
            console.log(`Code: ${i} \nName: ${teacher[i].getNameTeacher()}`)
            // school subjects
            console.log("School Subjects:")
            for (let j = 0; j < schoolSubject.length; j++) {
                if (schoolSubject[j].getCodeTeacher() == i) {
                    console.log(`- ${schoolSubject[j].getNameSchoolSubject()}`)

                }
            }
        }
    }



}

function registerSchoolSubject() {
    if (teacher.length == 0) {
        console.log("You cannot create a subject school without teacher. Create a teacher first! ")
    } else {


        let schoolSubj = leitor.question("Input the school subject: ");
        let exist = false;

        for (let i = 0; i < schoolSubject.length; i++) {
            if (schoolSubject[i].getNameSchoolSubject() === schoolSubj) {
                exist = true;
                break
            }
        }

        if (exist === true) {
            console.log("School subject already registered!")
            menu()
        } else {


            let code: number = leitor.questionInt("Input the code of teacher")

            if (teacher[code] === undefined) {
                console.log("Teacher not registered! ")
                menu()
            } else {




                let schoolSub = new SchoolSubject(schoolSubj, code)

                schoolSubject.push(schoolSub)

            }

        }


    }

}

function listSchoolSubject() {

    if (schoolSubject.length === 0) {
        console.log("There aren't School Subjects registered! ");

    } else {

        console.log("School Subjects registered: ")
        for (let i = 0; i < schoolSubject.length; i++) {
            console.log(`${i} - ${schoolSubject[i].getNameSchoolSubject()} - ${teacher[schoolSubject[i].getCodeTeacher()].getNameTeacher()}`)
        }

    }

}

function registerStudents() {

    if (schoolSubject.length === 0) {
        console.log("There isn't a school subject registered! Register it!")
    } else {

        let nameStudent: string = leitor.question("Input the name of the student: ")
        let amountSchoolSub: number = leitor.questionInt("How many school subject will you course? ")

        if (amountSchoolSub > schoolSubject.length) {
            console.log("There aren't this amount of school subjects available")
        } else {

            let schoolSubArray: number[] = []

            for (let i = 0; i < amountSchoolSub; i++) {
                let codeSchoolSubject = leitor.questionInt("School Subject code: ")
                if (codeSchoolSubject > schoolSubject.length) {
                    console.log("This school subject doesn't exist! ")
                } else {
                    
                    schoolSubArray.push(codeSchoolSubject)

                }
            
            }
                
                const min = 0;
                const max = 10000;
                const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;


                let matriculation = randomNumber;



                let studentNew = new Student(nameStudent, schoolSubArray, matriculation);


                studentNew.setSchoolSub(schoolSubArray)

                student.push(studentNew)

            }

        }
    
}


function listStudent() {

    if (student.length === 0) {
        console.log("There aren't students registered! ");

    } else {
        if (schoolSubject.length === 0) {
            console.log("There aren't school subjects registered! ");

        } else {
            console.log("\nAlunos cadastrados! \n")

            for (let i = 0; i < student.length; i++) {

                console.log("Matricula: " + student[i].getMatriculation())
                console.log("Nome: " + student[i].getNameStudent())
                console.log("Disciplinas: ")
                for (let j = 0; j < student[i].getSchoolSub().length; j++) {
                    let local = student[i].getSchoolSub()[j]
                    console.log(" - " + schoolSubject[local].getNameSchoolSubject())


                }
            }

        }
    }

}

function listStudentsPerSchoolSubject() {

    if (student.length === 0 || teacher.length === 0 || schoolSubject.length === 0) {
        console.log("There aren't students registered!")

    } else {

        let codeSchoolSub: number = leitor.questionInt("What the school subject code do you want to verify? ")

        if (codeSchoolSub > schoolSubject.length || codeSchoolSub < 0) {
            console.log("Invalid school subject code!")
            menu()

        } else {

            console.log("Students matriculated in : ", codeSchoolSub, " - ", schoolSubject[codeSchoolSub].getNameSchoolSubject())
            for (let k = 0; k < student.length; k++) {
                console.log("\n")

                if ((student[k].getSchoolSub() as any[]).includes(codeSchoolSub)) {
                    console.log("Matriculation: ", student[k].getMatriculation())
                    console.log("Nome: ", student[k].getNameStudent())

                    console.log("School Subjects:")
                    for (let j = 0; j < student[k].getSchoolSub().length; j++) {

                        console.log(schoolSubject[student[k].getSchoolSub()[j]].getNameSchoolSubject())

                    }

                }

            }
        }

    }

}


function listSchoolSubjectPerTeacher() {

    if (schoolSubject.length === 0) {
        console.log("There aren't any SchoolSubject registered! ")


    } else {

        let code: number = leitor.questionInt("What Teacher do you want to see the School Subjects? ")

        if (teacher[code] === undefined) {
            console.log("This code is invalid! This teacher doesn't exists")
        } else {
            console.log(teacher[code].getNameTeacher(), "School Subjects: ")

            for (let i = 0; i < schoolSubject.length; i++) {
                if (schoolSubject[i].getCodeTeacher() === code) {
                    console.log(i, "-", schoolSubject[i].getNameSchoolSubject())
                }
            }

        }

    }

}

function listStudentsPerTeacher() {


    if (student.length === 0) {
        console.log("There aren't registered students! ")
    } else {


        let code: number = leitor.questionInt("Input the code of the teacher: ")

        if (teacher[code] == undefined) {
            console.log("Teacher not found! ")

        } else {


            for (let i = 0; i < schoolSubject.length; i++) {
                if (schoolSubject[i].getCodeTeacher() == code) {
                    console.log("\nStudents from ", schoolSubject[i].getNameSchoolSubject(), ": ")
                    for (let j = 0; j < student.length; j++) {
                        if (student[j].getSchoolSub().includes(i)) {
                            console.log(student[j].getMatriculation(), " - ", student[j].getNameStudent())


                            console.log("\n")
                        }
                    }
                }
            }

        }


    }

}

function leave() {
    console.clear()
    console.log("Leaving . .  .")
}

menu()
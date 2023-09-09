"use strict";
//index
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const leitor = __importStar(require("readline-sync"));
const Teacher_1 = require("./Teacher");
const SchoolSubject_1 = require("./SchoolSubject");
const Student_1 = require("./Student");
let teacher = [];
let student = [];
let schoolSubject = [];
function menu() {
    console.log("\n");
    console.log("1 - Register teacher "); // // // //
    console.log("2 - Register School Subject "); // // // //
    console.log("3 - Register students"); // // // //
    console.log("4 - List school subjects "); // // // //
    console.log("5 - List teacher"); // // // //
    console.log("6 - List student"); // // // //
    console.log("7 - List students per school subject");
    console.log("8 - List School Subject per teacher");
    console.log("9 - List students per school subject");
    console.log("0 - Leave");
    let option = leitor.questionInt("Input the correct option: ");
    switch (option) {
        case 1:
            registerTeacher();
            menu();
            break;
        case 2:
            registerSchoolSubject();
            menu();
            break;
        case 3:
            registerStudents();
            menu();
            break;
        case 4:
            listSchoolSubject();
            menu();
            break;
        case 5:
            listTeacher();
            menu();
            break;
        case 6:
            listStudent();
            menu();
            break;
        case 7:
            listStudentsPerSchoolSubject();
            menu();
            break;
        case 8:
            listSchoolSubjectPerTeacher();
            menu();
            break;
        case 9:
            listStudentsPerTeacher();
            menu();
            break;
        case 0:
            leave();
            break;
        default:
            menu();
    }
}
function registerTeacher() {
    let name = leitor.question("Input the name of the teacher: ");
    let exist = false;
    for (let i = 0; i < teacher.length; i++) {
        if (teacher[i].getNameTeacher() === name) {
            exist = true;
        }
    }
    if (exist === true) {
        console.log("Teacher already registered!");
    }
    else {
        let teacherName = new Teacher_1.Teacher(name);
        teacher.push(teacherName);
    }
}
function listTeacher() {
    if (teacher.length === 0) {
        console.log("There aren't teachers registred!");
    }
    else {
        console.log("\n");
        console.log("Registered Teachers \n");
        for (let i = 0; i < teacher.length; i++) {
            console.log(`Code: ${i} \nName: ${teacher[i].getNameTeacher()}`);
            // school subjects
            console.log("School Subjects:");
            for (let j = 0; j < schoolSubject.length; j++) {
                if (schoolSubject[j].getCodeTeacher() == i) {
                    console.log(`- ${schoolSubject[j].getNameSchoolSubject()}`);
                }
            }
        }
    }
}
function registerSchoolSubject() {
    if (teacher.length == 0) {
        console.log("You cannot create a subject school without teacher. Create a teacher first! ");
    }
    else {
        let schoolSubj = leitor.question("Input the school subject");
        let exist = false;
        for (let i = 0; i < schoolSubject.length; i++) {
            if (schoolSubject[i].getNameSchoolSubject() === schoolSubj) {
                exist = true;
                break;
            }
        }
        if (exist === true) {
            console.log("School subject already registered!");
            menu();
        }
        else {
            let code = leitor.questionInt("Input the code of teacher");
            if (teacher[code] === undefined) {
                console.log("Teacher not registered! ");
                menu();
            }
            else {
                let schoolSub = new SchoolSubject_1.SchoolSubject(schoolSubj, code);
                schoolSubject.push(schoolSub);
            }
        }
    }
}
function listSchoolSubject() {
    if (schoolSubject.length === 0) {
        console.log("There aren't School Subjects registered! ");
    }
    else {
        console.log("School Subjects registered: ");
        for (let i = 0; i < schoolSubject.length; i++) {
            console.log(`${i} - ${schoolSubject[i].getNameSchoolSubject()} - ${teacher[schoolSubject[i].getCodeTeacher()].getNameTeacher()}`);
        }
    }
}
function registerStudents() {
    if (schoolSubject.length === 0) {
        console.log("There isn't a school subject registered! Register it!");
    }
    else {
        let nameStudent = leitor.question("Input the name of the student");
        let amountSchoolSub = leitor.questionInt("How many school subject will you course? ");
        if (amountSchoolSub > schoolSubject.length) {
            console.log("There aren't this amount of school subjects available");
        }
        else {
            let schoolSubArray = [];
            const test = [];
            let counter = 0;
            for (let i = 0; i < amountSchoolSub; i++) {
                let codeSchoolSubject = leitor.questionInt("School Subject code: ");
                if (codeSchoolSubject > schoolSubject.length) {
                    console.log("This school subject doesn't exist! ");
                }
                else {
                    if (i === 0) {
                        test.push(codeSchoolSubject);
                    }
                    else {
                        for (let j = 0; j < test.length; j++) {
                            if (test[j] === (codeSchoolSubject)) {
                                console.log("Invalid ");
                                counter = counter + 1;
                            }
                            else { }
                        }
                        if (counter >= 1) {
                            console.log("invalid");
                        }
                        else {
                            schoolSubArray.push(codeSchoolSubject);
                        }
                    }
                }
            }
            const min = 0;
            const max = 10000;
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            let matriculation = randomNumber;
            let studentNew = new Student_1.Student(nameStudent, schoolSubArray, matriculation);
            studentNew.setSchoolSub(schoolSubArray);
            student.push(studentNew);
        }
    }
}
function listStudent() {
    if (student.length === 0) {
        console.log("There aren't students registered! ");
    }
    else {
        if (schoolSubject.length === 0) {
            console.log("There aren't school subjects registered! ");
        }
        else {
            console.log("\nAlunos cadastrados! \n");
            for (let i = 0; i < student.length; i++) {
                console.log("Matricula: " + student[i].getMatriculation());
                console.log("Nome: " + student[i].getNameStudent());
                console.log("Disciplinas: ");
                for (let j = 0; j < student[i].getSchoolSub().length; j++) {
                    let local = student[i].getSchoolSub()[j];
                    console.log(" - " + schoolSubject[local].getNameSchoolSubject());
                }
            }
        }
    }
}
function listStudentsPerSchoolSubject() {
    if (student.length === 0 || teacher.length === 0 || schoolSubject.length === 0) {
        console.log("There aren't students registered!");
    }
    else {
        let codeSchoolSub = leitor.questionInt("What the school subject code do you want to verify? ");
        if (codeSchoolSub > schoolSubject.length || codeSchoolSub < 0) {
            console.log("Invalid school subject code!");
            menu();
        }
        else {
            console.log("Students matriculated in : ", codeSchoolSub, " - ", schoolSubject[codeSchoolSub].getNameSchoolSubject());
            for (let k = 0; k < student.length; k++) {
                console.log("\n");
                if (student[k].getSchoolSub().includes(codeSchoolSub)) {
                    console.log("Matriculation: ", student[k].getMatriculation());
                    console.log("Nome: ", student[k].getNameStudent());
                    console.log("School Subjects:");
                    for (let j = 0; j < student[k].getSchoolSub().length; j++) {
                        console.log(schoolSubject[student[k].getSchoolSub()[j]].getNameSchoolSubject());
                    }
                }
            }
        }
    }
}
function listSchoolSubjectPerTeacher() {
    if (schoolSubject.length === 0) {
        console.log("There aren't any SchoolSubject registered! ");
    }
    else {
        let code = leitor.questionInt("What Teacher do you want to see the School Subjects?");
        if (teacher[code] === undefined) {
            console.log("This code is invalid! This teacher doesn't exists");
        }
        else {
            console.log(teacher[code].getNameTeacher(), "School Subjects: ");
            for (let i = 0; i < schoolSubject.length; i++) {
                if (schoolSubject[i].getCodeTeacher() === code) {
                    console.log(i, "-", schoolSubject[i].getNameSchoolSubject());
                }
            }
        }
    }
}
function listStudentsPerTeacher() {
    if (student.length === 0) {
        console.log("There aren't registered students! ");
    }
    else {
        let code = leitor.questionInt("Input the code of the teacher:");
        if (teacher[code] == undefined) {
            console.log("Teacher not found! ");
        }
        else {
            for (let i = 0; i < schoolSubject.length; i++) {
                if (schoolSubject[i].getCodeTeacher() == code) {
                    console.log("\nStudents from ", schoolSubject[i].getNameSchoolSubject(), ": ");
                    for (let j = 0; j < student.length; j++) {
                        if (student[j].getSchoolSub().includes(i)) {
                            console.log(student[j].getMatriculation(), " - ", student[j].getNameStudent());
                            console.log("\n");
                        }
                    }
                }
            }
        }
    }
}
function leave() {
    console.clear();
    console.log("Leaving . .  .");
}
menu();
//# sourceMappingURL=index.js.map
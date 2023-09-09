"use strict";
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
exports.Menu = void 0;
const leitor = __importStar(require("readline-sync"));
const Teacher_1 = require("../classes/Teacher");
const SchoolSubject_1 = require("../classes/SchoolSubject");
const Student_1 = require("../classes/Student");
const teacher = new Teacher_1.Teacher();
const schoolSubject = new SchoolSubject_1.SchoolSubject();
const studentName = new Student_1.Student();
function Menu() {
    console.log("\n MENU \n");
    console.log(" 1- Register teachers \n");
    console.log(" 2- Register school subjects \n");
    console.log(" 3- Register students \n");
    console.log(" 4- List school subjects \n");
    console.log(" 5- List teachers \n");
    console.log(" 6- List students \n");
    console.log(" 7- List students per school subject\n");
    console.log(" 8- List students per teacher\n");
    console.log(" 9- List students per school subjects");
    console.log(" 0- Leave \n");
    const option = leitor.questionInt("Choose an option: ");
    switch (option) {
        case 1:
            teacher.addTeacherName();
            Menu();
            break;
        case 2:
            schoolSubject.addSchoolSubject();
            Menu();
            break;
        case 3:
            studentName.addStudentName();
            Menu();
            break;
        case 4:
            schoolSubject.getSchoolSubject();
            break;
        case 5:
            teacher.getTeacherName();
            Menu();
            break;
        case 6:
            studentName.getStudentName();
    }
}
exports.Menu = Menu;

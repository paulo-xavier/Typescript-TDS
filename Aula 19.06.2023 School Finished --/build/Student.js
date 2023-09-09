"use strict";
//Student
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(name, schoolSub, matriculation) {
        this.schoolSub = [];
        this.name = name;
        this.schoolSub = [];
        this.matriculation = matriculation;
    }
    getNameStudent() {
        return this.name;
    }
    setNameStudent(nameStudent) {
        this.name = nameStudent;
    }
    getSchoolSub() {
        return this.schoolSub;
    }
    setSchoolSub(schoolSub) {
        this.schoolSub = schoolSub;
    }
    getMatriculation() {
        return this.matriculation;
    }
}
exports.Student = Student;
//# sourceMappingURL=Student.js.map
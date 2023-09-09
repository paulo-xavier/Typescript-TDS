"use strict";
//SchoolSubject
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolSubject = void 0;
class SchoolSubject {
    constructor(schoolSubject, teacherCode) {
        this.schoolSubject = schoolSubject;
        this.teacherCode = teacherCode;
    }
    //get e setters da disciplina
    getNameSchoolSubject() {
        return this.schoolSubject;
    }
    setName(name_SchoolSubj) {
        this.schoolSubject = name_SchoolSubj;
    }
    //get e setrs do codigo do professor
    getCodeTeacher() {
        return this.teacherCode;
    }
    setCodeTeacher(code_Teacher) {
        this.teacherCode = code_Teacher;
    }
}
exports.SchoolSubject = SchoolSubject;
//# sourceMappingURL=SchoolSubject.js.map
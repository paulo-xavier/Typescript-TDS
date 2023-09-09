"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserType_1 = require("./types/UserType");
//
const register = [];
/*
export type Person = {
    id: number,
    name: string,
    email:string,
    password: number | string,
    role: string

    export type AdminAccount = {
    account: string,
    permission:boolean
}
}

*/
const personAdmin = {
    id: 32323,
    name: "Paul",
    email: "xavierpaulo@gmail.com",
    password: 2121212,
    role: "System Developer Technician",
    account: UserType_1.UserType.ADMIN,
    permission: true
};
const personNormal = {
    id: 32323,
    name: "Robert",
    email: "robert@gmail.com",
    password: 121212,
    role: "WEB Developer",
    account: UserType_1.UserType.NORMAL,
    permission: true
};
register[0] = personAdmin;
register[1] = personNormal;
console.log(register);
//# sourceMappingURL=index.js.map
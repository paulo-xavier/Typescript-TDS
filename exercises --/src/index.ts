/*
import { AdminAccount } from "./types/AdminAccount";
import { NormalAccount } from "./types/NormalAccount";
import { Person } from "./types/Person";
*/
import { UserAdmin } from "./types/UserAdmin";
import { UserNormal } from "./types/UserNormal";
import { UserType } from "./types/UserType";

//


const register: UserNormal[] & UserAdmin[] = []


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

const personAdmin: UserAdmin = {
    id: 32323, 
    name: "Paul",
    email:"xavierpaulo@gmail.com",
    password:2121212,
    role: "System Developer Technician",
    account: UserType.ADMIN,
    permission: true
}

const personNormal: UserNormal = {
    id: 32323, 
    name: "Robert",
    email:"robert@gmail.com",
    password:121212,
    role: "WEB Developer",
    account: UserType.NORMAL,
    permission: true
}

register [0] = personAdmin
register[1] = personNormal

console.log(register)


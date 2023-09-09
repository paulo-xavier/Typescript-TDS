// Creating a menu

import * as leitor from "readline-sync";
import { Teacher } from "../classes/Teacher";
import { SchoolSubject } from "../classes/SchoolSubject";
import { Student } from "../classes/Student";

const teacher = new Teacher(); //If you put this instance outside the function menu, each time you call the function Menu all the new data will be stored in this instance. If you create the instance inside the function menu, it time you call the function menu a new instance will be created.

const schoolSubject = new SchoolSubject(); 

const studentName = new Student ();

export function Menu ():void {
     
    console.log("\n MENU \n")
    console.log(" 1- Register teachers \n") // done
    console.log(" 2- Register school subjects \n") //done
    console.log(" 3- Register students \n")  //done
    console.log(" 4- List school subjects \n") //done 
    console.log(" 5- List teachers \n") // done
    console.log(" 6- List students \n")
    console.log(" 7- List students per school subject\n")
    console.log(" 8- List students per teacher\n")
    console.log(" 9- List students per school subjects")
    console.log(" 0- Leave \n")

    const option:number = leitor.questionInt("Choose an option: ")    



    switch (option){
        case 1:
            teacher.addTeacherName();
            Menu()
            break
        
        case 2:
            schoolSubject.addSchoolSubject();
            Menu()
            break
        
        case 3:
            studentName.addStudentName()
            Menu()
            break
        
        case 4:
            schoolSubject.getSchoolSubject()
            break
                    
        case 5:
            teacher.getTeacherName();
            Menu()
            break
        
        case 6:
            studentName.getStudentName();
        
            
    }


}





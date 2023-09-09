import { Tasks } from "./Tasks";

export class user{
    
    private name: string;
    tasks: Tasks[];

    constructor (name:string){
        this.name = name;
        this.tasks = []
    }

    setName(name:string) : void {
        this.name = name;
    }
    addTasks():void {
        console.log("Adding tasks! ")
    }

    removeTasks():void {
        console.log("Removing tasks")
    }

}
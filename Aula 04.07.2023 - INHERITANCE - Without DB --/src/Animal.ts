//animal
export class Animal {


    protected name: string; //THIS ACCESS THIS VARIABLE
    protected eat: string;//THIS ACCESS THIS VARIABLE
    protected age: number;//THIS ACCESS THIS VARIABLE
    protected gender: string; //THIS ACCESS THIS VARIABLE

    constructor (name: string, eat: string, age: number, gender: string){
        this.eat = eat;
        this.name = name;
        this.age = age;
        this.gender= gender;

    }
//THIS.NAME = PROPERTY     NAME = PARAMETER

//THIS ALLOWS TO ACCESS THE VARIABLE ON THE TOP


}
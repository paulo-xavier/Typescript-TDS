Author: Paulo Roberto Xavier da Silva

(a) What's a constructor in a class an how we run it? It starts the attributes of a class (private/public) , ex:let paul =  New Account("saasa)

When we create a class in Typescript we need to put some values (called attributes) inside it, like name, age or something like that, and then we have
to put the type of each one. The constructor in this case will allow us to execute the class, adding some values inside the values/properties of the 
class. To run the constructor we have to this steps:

-Type constructor;
-Inform the properties that we want to access and the type of each one (e.g: name:string)
-Use "this" before the value.

example: 

class Student {
    name: string;
    age: number;
}

constructor (name: string, age:number){
    this.name = name
    this.age = age
}

If you don't create a constructor, it also will be create by the Typescript but, you won't see it because it will be null. All classes has a constructor.



(b) Copy and paste the code bellow to your exercise; Create an instance of this class (create name, cpf and age that you want). 
How many  times did the message "Calling the User class constructor" appear in the terminal? 

This message was outputted 1 time.
/

(c) How can we can access to the private properties of a class?

The only way to access private classes is using the methods Getter (get the attributes/ print it on terminal) and Seller (allows you to change the value of the properties of a private attribute.)
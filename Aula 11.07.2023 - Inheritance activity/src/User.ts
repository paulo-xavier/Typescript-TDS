export class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string; // private
  
    constructor( 
        id: string,
        email: string,
        name: string,
        password: string
      ){
          console.log("Calling the class User constructor")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id;
      }
  
      public getEmail(): string {
          return this.email;
      }
  
      public getName(): string {
          return this.name;
      }

    //   public introduceYourself(): string{
    //         return "Hello, good morning!";
    //   }

      public introduceYourself(): string{
            return `Heello, I'm ${this.name}. Good morning! `; 
      }





  }
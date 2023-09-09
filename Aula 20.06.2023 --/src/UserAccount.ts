import { Transaction } from "./Transaction";

export class UserAccount {
    private cpf: string; //
    private name: string; //
    private age: number; //
    private balance: number = 0;
    public transactions: Transaction[] = [];
  
    constructor(cpf: string, name: string, age: number) {
       console.log("Calling the User class constructor")
       this.cpf = cpf;
       this.name = name;
       this.age = age;

       //test
       
    
    }
    
    // get

    getCpf(): string {
        return this.cpf;
    }

    getName(): string {
        return this.name;
    }

    getAge (): number {
        return this.age;
    }

    // set

    setCpf (cpf:string): void {
        this.cpf = cpf;
    }

    setName (name: string): void {
        this.name = name;
    }

    setAge (age: number): void {
        this.age = age;
    }

    getBalance (): number {
        return this.balance;
    }
    

    

    // test
    AddTransaction(data: Transaction){
        this.transactions.push(data)
        this.balance += data.getValues();
    }

    ReturnTransaction(): Transaction[]{
        return this.transactions
    }


  


}
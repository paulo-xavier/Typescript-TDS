//import { Transaction } from "./Transaction";
import { UserAccount } from "./UserAccount";
import { Transaction } from "./Transaction";




export class Bank {

     private accounts: UserAccount[] = []

     constructor (){
        this.accounts = []
     }

     getAccounts(): UserAccount[]{
        return this.accounts
     }

     setAccount(account: UserAccount):void{
        this.accounts.push(account)

     }


}

 


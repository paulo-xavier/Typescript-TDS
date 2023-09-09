import { Transaction } from "./Transaction";
import { UserAccount } from "./UserAccount";
import { Bank } from "./Bank";



//creating account
let paul = new UserAccount ("03243434343", "Paul", 18); // New calls the constructor or new instance 

//console.log(paul)




//crating transaction
let credit = new Transaction ("Loan", 2000, "2023-01-23")
console.log(credit)



//adding transaction
paul.AddTransaction(credit)


console.log("\n------------------------\n")


// verify if the class user account contains the data 
console.log(paul)





//add this account to the bank
let bankSenac = new Bank()


console.log("******************")

bankSenac.setAccount(paul)

console.log(bankSenac.getAccounts())


console.log("******************")

//bankSenac.getAccounts()







// Teacher answer
let conta = new UserAccount("434", "vitor", 18)
let compra = new Transaction ("ceolba", 23, "32-3232-3")
conta.AddTransaction(compra)

let caixa = new Bank()

caixa.setAccount(conta)


console.log(caixa.getAccounts())


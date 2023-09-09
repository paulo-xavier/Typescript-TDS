import * as leitor from "readline-sync"

const clientArray: any[] = []
const statusArrayClient: boolean[] = []
const bookArray: any[] = []
const statusArrayBook: boolean[] = []

function mainMenu(){

    console.log("\n ===== Library =====\n")
    console.log(" 1- Create client ")
    console.log(" 2- List client ")
    console.log(" 3- Create book ")
    console.log(" 4- List books ")
    console.log(" 5- Lend books ")
    console.log(" 6- Return book ")
    console.log("    7-    Leave")
    
    
    const op:number = leitor.questionInt("\nChoose an option: ")
    
    
    switch(op){
    
            case 1: 
                createClient()
                treatTrueClient()
                mainMenu()
                break
            
            case 2:
                listClient()
                mainMenu()
                break

            case 3:
                createBook()
                treatTrueBook()
                mainMenu()
                break

            case 4:
                listBook()
                mainMenu()
                break
            
            case 5:
                lendBook()
                mainMenu()
                break

            case 6:
                returnBook()
                mainMenu()
                break
            
            case 7:
                console.clear()
                console.log("LEAVING...")
                break

            default:
                mainMenu()                
    }        
}


function createClient () {
    //password
    console.clear()
    console.log("\n ---- PASSWORD ---- \n")
    const password:string = leitor.question("Before doing this action, please input the password: ")
    password.toLowerCase()

    if (password != "admin"){
        console.clear()
        console.log("Wrong password! Returning to menu . . . ")
    
    } else {

    if (clientArray.length > 4){
        console.clear()
        console.log("You can't create more clients! ")
    
    } else {
    
    console.clear()
    console.log("\n ---- CLIENT ---- \n")
    const name:string = leitor.question("Input your name: ")
    const cpf:number = leitor.questionFloat("Input your cpf: ")

    let client = {
        name: name,
        cpf: cpf,
        status: false,
        code: clientArray.length
    }

    clientArray.push(client)
    }
    }
    console.clear()
}


function listClient () {
    //password
    console.clear()
    console.log("\n ---- PASSWORD ---- \n")
    const password:string = leitor.question("Before doing this action, please input the password: ").toLowerCase()

    if (password != "admin") {
        console.clear()
        console.log("Wrong password! Returning to menu . . . ")
    
    } else {
    
    console.clear()
    console.log("----------------------------------------------")    
    console.log("CLIENTS LIST: ")
    console.log("----------------------------------------------")
    console.table(clientArray,["code", "name", "cpf", "status"])
    console.log("----------------------------------------------")

    }

}

function createBook(){
    console.clear()
    //password
    console.log("\n ---- PASSWORD ---- \n")
    const password:string = leitor.question("Before doing this action, please input the password: ").toLowerCase()

    if (password != "admin"){
        console.clear()
        console.log("Wrong password! Returning to menu . . . ")
    } else {


    if (bookArray.length > 9){
        console.clear()
        console.log("You can't create new books! ")
    } else {
    
    console.clear()
    console.log("\n ---- BOOKs ---- \n")
    let bookName: string = leitor.question("Input the name of the book: ")

    let book = {
        name: bookName,
        code: bookArray.length,
        status: false
    }

    bookArray.push(book)
    }

    }

    console.clear()
}

function listBook (){
    console.clear()
    //password
    console.log("\n ---- PASSWORD ---- \n")
    const password:string = leitor.question("Before doing this action, please input the password: ").toLowerCase()

    if (password != "admin"){
        console.clear()
        console.log("Wrong password! Returning to menu . . .")
    } else {

    console.clear() //
    console.log("### BOOKS LIST \n")

    console.table(bookArray, ["code", "name", "status"])
    }
}


function lendBook() {
    console.clear()
    //password
    console.log("\n ---- PASSWORD ---- \n")
    const password:string = leitor.question("Before doing this action, please input the password: ")

    if (password != "admin"){
        console.clear()
        console.log("Wrong password! Returning to menu . . .")
    
    } else {
    
    console.clear()
    
    console.log("\n ---- LEND BOOKS ----  \n")

    const codeClient: number = leitor.questionInt("Input the client code: ")

    const codeBook: number = leitor.questionInt ("Input the code of the book: ")


    if (codeClient > clientArray.length || codeBook > bookArray.length || bookArray.length == 0 || clientArray.length == 0){
        console.clear() //
        console.log("Invalid code!")
    
    } else { 
   
    
    if (clientArray[codeClient].status === "Do not have book" ){
        
        if (bookArray[codeBook].status === "Available"){
            
            console.clear() //
            console.log(" --> Nice! Now the book belongs to you!")
            clientArray[codeClient].status = "Already has a book"
            bookArray[codeBook].status = "Not avaliable"


        } else {
            console.clear() //
            console.log(" --> Oh, you can't lend this book! Someone already did it! ")
        }
    
    } else {
        console.clear() //
        console.log(" --> You can't lend this book! You already have one book! ")
    } 
}
    console.log("\n Returning to menu...")
    }
}



function returnBook () {
    console.clear()
    //password
    console.log("\n ---- PASSWORD ---- \n")
    const password:string = leitor.question("Before doing this action, please input the password: ")

    if (password != "admin"){
        console.clear()
        console.log("Wrong password! Returning to menu . . .")
    
    } else {
    console.clear()
    console.log(" \n ---- RETURN BOOKS ----  \n")

    const codeClient: number = leitor.questionInt("Input the client code: ")

    const codeBook: number = leitor.questionInt ("Input the code of the book: ")

    if (codeClient > clientArray.length || codeBook > bookArray.length || bookArray.length == 0 || clientArray.length == 0){
        console.clear()
        console.log("Invalid code!") 

    } else {
    
        if (clientArray[codeClient].status === "Already has a book") {
        
        if (bookArray[codeBook].status === "Not avaliable"){

            console.clear() //
            
            const op:number = leitor.questionInt(" \n Did you pass the time limit to return the book? [1- Yes / 2- No] ")

            if (op === 1){
                console.clear()
                const days:number = leitor.questionFloat("How many days? ")
                console.clear()
                console.log(` --> Unfortunately you will to pay a extra value of R$ ${days * 5}`)
            }
            console.clear()
            console.log("\n  --> Nice! Now the book returned to the library!")
            clientArray[codeClient].status = "Do not have a book"
            bookArray[codeBook].status = "Avaliable"


        } else{
            console.clear()
            console.log("Oops! Wrong code of the book! ")
        
        }

    
    } else {
        console.clear()
        console.log("Oops! You can't return a book, because you don't have one! ")
    }
}
    console.log(" \n Returning to menu ")

    }
}


function treatTrueClient(){
    // Converter from boolean to string
    for (let i = 0; i < clientArray.length; i++){
        if (clientArray[i].status == true){
            clientArray[i].status = "Already has a book";
        } else if (clientArray[i].status == false){
            clientArray[i].status = "Do not have book";
        }
    }
}

function treatTrueBook(){
    // Converter from boolean to string
    for (let i = 0; i < bookArray.length; i++){
        if (bookArray[i].status == false){
            bookArray[i].status = "Available"
        } else if (bookArray[i].status == true){
            bookArray[i].status = "Not available"
        }
    }
}

mainMenu()



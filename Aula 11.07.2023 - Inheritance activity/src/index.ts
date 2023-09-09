import { User } from "./User";
import { Customer } from "./Customer";
import { Employee } from "./Employee";
import { Seller } from "./Seller";


//creating user instance
const paulo = new User("1", "pauloxavier@gmail.com", "paulo", "senac");
console.log(paulo);

//creating costumer instance
const maria = new Customer("1", "maria@gmail.com", "Maria Xavier", "maria123", "credit");
console.log(maria)


console.log("....");

// Printing the information of Costumer;
console.log(maria.getName()); //
console.log(maria.getId()); //
console.log(maria.getEmail()); //
console.log(maria.getCreditCard()); //
console.log(maria.purchaseTotal); //

console.log(".......");




//calling the method introduceYourself
console.log(maria.introduceYourself()); 

console.log("---------");


//Creating an instance of class Employee; 

//First, creating an admission date
const admissionDateVictor = new Date('2023-07-02');

//employee
const employeeVictor = new Employee("56", "victorhugo@gmail.com", "Victor Hugo Lopes", "vhlopes", admissionDateVictor, 4000); 


console.log(employeeVictor);

console.log(employeeVictor.getAdmissionDate()); //
console.log(employeeVictor.getBaseSalary()); //
console.log(employeeVictor.getEmail());//
console.log(employeeVictor.getId());//
console.log(employeeVictor.getName());//
console.log(employeeVictor.introduceYourself()); //

console.log("------"); 

//Calculating total salary 

console.log(employeeVictor.calculateTotalSalary());

console.log("........."); 

//Creating a instance of the lass Sler 

const admissionDateMarcelo = new Date("2018-08-14"); 

const sellerMarcelo = new Seller("699", "marcelo@gmail.com", "Marcelo","marc", admissionDateMarcelo, 5000 ); 


console.log("++++++++");


//Printing the information of Marcelo
console.log(sellerMarcelo.calculateTotalSalary());
console.log(sellerMarcelo.getAdmissionDate());
console.log(sellerMarcelo.getBaseSalary());
console.log(sellerMarcelo.getEmail());
console.log(sellerMarcelo.getId());
console.log(sellerMarcelo.getName());
console.log(sellerMarcelo.introduceYourself());

//Testing the method setter 

console.log("............");


sellerMarcelo.setSalesQuantity(20); 

console.log(sellerMarcelo.getSalesQuantity()); 


console.log(sellerMarcelo instanceof User);
console.log(sellerMarcelo instanceof Employee);
console.log(sellerMarcelo instanceof Customer);

console.log("---------")

//Overriding the method calculateTotalSalary



const admissionDateMaria = new Date("2018-03-04"); 

const mariaSeller = new Seller("2","mariaxavier@gmail.com", "Maria Helena Xavier", "mariaxavier", admissionDateMaria, 3600); 


mariaSeller.setSalesQuantity(30);
console.log(mariaSeller.getSalesQuantity());

console.log(mariaSeller.calculateTotalSalary());


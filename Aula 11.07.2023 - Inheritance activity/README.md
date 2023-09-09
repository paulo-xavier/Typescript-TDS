## [ Exercise 1 ] 
 
Analyze the class User. Pay attention in which properties are public and which one are private.
Copy and paste this code for your today's exercise; create an instance of this class (input a name, email, etc. Whatever you want)
and print, in the terminal, the id, name and email of the user.

a) Is possible to print the password gathered to this instance? 

- - No It's not possible. The only way to print the password in this case is using the GET method. Furthermore, the class is
private, then a simple console.log also wouldn't work in this situation. 

b) How many times does the message "calling the User class constructor" was printed in the terminal?   

- - The message was printed one time.

------------------------------------------

## [Exercise 2]

a) How many times does the message "Calling the Costumer class constructor" was printed in the terminal?

- - It was printed one time.

b) How many time does the message "Calling the User class constructor" was printed in the terminal? Why?

- - It was printed one time. It happens because the class User is parent class of Customer. Then, when we create a constructor in Costumer, the super,  some  specific attributes of the Parent class(User) come to the child class (Costumer), besides it, we have a console.log within the constructor of User, so when we call the constructor of User gathered to constructor of Costumer, console.log comes together. 

------------------------------------------

## [ Exercise 3 ] 

a) Is possible to print the password gathered to this instance? Why? 

- - No, it's not possible, because this attribute in the parent class(User) is private, the only way to print it is accessing a method GET. But in this situation we don't have this method. Furthermore, the parent class (User) contains the attribute password private, even if a method to get the password existed, we couldn't access, because the attribute password is private , and child classes can only access attributes of parent classes if this attribute is protected. 

even if were exist  
-------------------------

## [ Exercise 6]

a) How many times does the message "Calling the class User constructor" was printed in the terminal?
- - The message "Calling the class User constructor" was printed one time.  


b) Print in the terminal all the information of this class. Which information were possible to be printed? 

- - Was possible to print in the terminal all of them, except the password, because it's private. 

------

## [ Exercise 8 ]

a) Create an instance of the class [Seller]. You will see that this class already contains a constructor, because when we don't put a constructor in the child class, it will inherit the constructor of the parent class. Which parameters did you have to pass in the constructor?

- - I've added in this constructor the followings parameters:

        ```typescript        
        id: string,
        email: string,
        name: string,
        password: string,
        protected admissionDate: Date, 
        protected baseSalary: number 

OBS: I've add this parameters in the class Employee constructor.


b) Print all the information of this instance you've created individually (in other words, each one in a row). What did you print? What didn't you print? Why? 

- - I've got to print almost all the information (id, name, email, admissionDate, baseSalary, totalSalary, introduceYourself); The only one I've not printed was the password, because it is private.  


-------------


## [ Exercise 9 ]

a) Now, test the setter method, updating this value as you prefer. Is it possible to print the value [salesQuantity] of the instance you've created in the terminal? Why? 

- - Yes, it's possible because the instance I've created is an instance of seller, for this reason is possible to change and print this value in the terminal. 


## [ Exercise 10 ]

a) Create a new seller. Assign him a value of SalesQuantity. Call the function [calculateTotalSalary] and print the value in the terminal. Which was printed in the terminal? Why? 

- - The value of the total salary was printed in the terminal. It happened because I called this method and it returns a value.  
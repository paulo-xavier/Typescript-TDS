## Polymorphism 

# [Exercise 1]


a) Which properties did you print? Was there anyone that you didn't get to? Why did it happen? 

- - I printed almost all the properties (name, registrationNumber and consumedEnergy) except the function calculateBill, because when is a function is necessary to access it individually.


# [Exercise 2]


a) Even though is not possible, try to create an instance of this class (in other words: new Place(...)). Which was the error that Typescript output? 

- - Typescript output that is not possible create an instance of an abstract class. 


b) Think and answer: What do we need to do to create an instance of this class? 

- - The only way to create an Instance of this class is through a new Class that extends this abstract class. This another class will be a child class of Place class. It's impossible to create directly an instance of an Abstract class. 


# [Exercise 3]

1) Think and answer: What do we need to do to create an instance of this class? 

- - As I mentioned, the only way to create an instance of this abstract class is to create a child class and then, create an instance of this child class. 



2) Why "Place" is not an Interface?  

- - In this situation we're working with distinct elements/classes. However, there's one element which is either common, the cep. When we're working with interfaces, the properties of this Interface are always public. So, we cannot limit their access. As we're referring to a CEP, whose value never change, doesn't make sense use a public method that allows future changes. In other words, this property must be private / protected, and utilizing interfaces we cannot achieve this final result.  


3) Why class Place is an "Abstract class"? 

- - As we created specific classes for the different places (commerce, industry and residence), whose all of the properties of each one are set,  we won't need to create an specific instance of Place. For this reason we "blocked" this class, calling it Abstract.  

# [Exercise 4]

a) Which methods and properties does this class contain? Why? 

- - This class contain a lot of elements because she extends and implement an Interface. This class extends Residence, so all the attributes of class Residence will be inherit for ResidentialClient. 
This class either implements an Interface Client, so all of the properties of the Interface will be in this class, including the method calculateBill. 

In summary the only attribute exclusively of this class is the CPF, that is private.

Attributes inherited by Residence: residentsQuantity and cep.

Attributes and method inherited by Interface Client: name, registrationNumber , consumedEnergy and the method calculateBill.
OBS: All the attributes inherited from Interface are  public. 



# [Exercise 5]

a) What's the similarities between this class and ResidentialClass?

- - Either classes implements the same interface and extends a parent class. They also has the same attribute, the cep. 

b) What's the differences between this class and ResidentialCLass?

The main difference is the parent class of each one. ResidentialCLient extends the class Residence, so the attributes are different, in this case the ResidentialClass will inherit the attributes residentsQuantity and cep(both has this attribute). While the CommercialClient extends the class Commerce, with the following attributes: floorsQuantity and cep. 
The method of calculateBill will also change, commercial client has a discount and pay 0.53 per consumed energy, while the residential client pay the full value 0.75 per energy consumed. The commercialClient also has a specific attribute called cnpj, that's basically an id/cpf of companies, furthermore the residentialClient has an attribute cpf.


# [Exercise 6]

a) Which class IndustrialClient should be child? Why? 

- - Industry must be child class of Industry, because it's a logical sequence. CommercialClient is equal to Commerce, ResidenceCLient is equal to Residence, so IndustrialCLient will be equal to Industry, because it fits with the content of Industry.

b) Which interface IndustrialClient implements?

- - IndustrialClient implements the class Client, because it is the default interface we're using in our classes, because it contains the basic information we need in either.

c) We required you to create just the getters of this class. Think about a reason for this: Why just the getters?

- -  Because in this situation the method calculateBill it's different, specially because it's not just multiply the consumedEnergy for a default value. In this context we need to multiply also the machineQuantity for the default number 100.  





// you dont have to import the parent class
import { Amphibian } from "./Amphibian";
import { Aves } from "./Aves"; 
import { Fish } from "./Fish";
import { Mammal } from "./Mammal";
import { Reptile } from "./Reptiles";


// Amphibian
let frog = new Amphibian("Frog", "insects, snails, spiders", 15, "male", true, true, true, true);
let toad = new Amphibian("Frog", "insects, snails, spiders", 30, "male", true, true, true, true);

// Ave
let baldEagle = new Aves("Bald Eagle", "Birds, fishes, small mammmals",30,"male", "Brown and white", true, true, true);
let penguin = new Aves("Penguin", "Fishes, krill, squid", 20, "male", "Black and white", false, true, true);

//Fish
let goldfish = new Fish("GoldFish","algae, plants, insects, and small crustaceans", 10, "male", true, true, true, true )
let piranha = new Fish("Piranha", "fish, insects, crustaceans, and occasionally plants", 15, "female", true, true, true , true )

//Mammal 
let tiger = new Mammal("Tiger", "deer, wild boar, and smaller mammals", 15, "male", true, 4, true, true);
let grayWOlf = new Mammal("Gray Wolf", "deer, elk, and moose", 8, "male", true, 5, true, true);
let cow = new Mammal("Gow", "deer, elk, and moose", 8, "male", true, 4, true, true);

cow.breastfeed()

//Reptiles
let komodoDragon = new Reptile("Komodo Dragon", "including deer, pigs, and other reptiles.", 50, "male", "Osteoderms",true, true, true);
let ballPython = new Reptile("Ball Python", "small mammals, such as mice and rats", 30,"female", "Keeled scales", true, true, true );



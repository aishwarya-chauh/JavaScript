// tangible :- we can touch and feel
// non tangible cannot be touched 
// DataType of object :- Non Primitive or reference data type .. it can store multiple value
// ways to create object
// 1) object literals
// 2) class
// 3) Function constructor
// Lets begin with object literals:
//object is written in the form of key and value but in it we do not need to write it in spring format as it automatially internally converts it to spring
// in object key and value are seperated by a : between them like key : value
// NAming of object can be done by camecasinng or kabana 
// BELOW IS EXAMPLE OF HOW WE WRITE AN OBJECT

 let person = {

    firstName: "Gajanan",

    age: 32,

    isMarried: true

}

console.log(person);

console.log(`Dot Notation`); //  how to Access using dot nortation 

console.log(person.firstName); // 

console.log(`Square bracket Notation`);

console.log(person["firstName"]); // 

 person.designation = "Tech Arch"; // Adding Value in Object

console.log(person);

person.age = 33; // Update

console.log(person);

 person.isMarried = false;

console.table(person);

 delete person.designation;

console.table(person);

 // Nested object : obj3ect inside an object is called as a nested Object
let user = {

    userName: "Jenny",

    country: "USA",

    address: {

        city: "Pune",

        street: "Wakad",

        pin: 411057,

        getAddress: function(){

           console.log(`Complete Address: ${this.flatNo}, ${this.street}, ${this.city}, ${this.pin}`); 
        // this.  use karke we can accesss object attributes inside a function
        }

    },

    show : function(){

        console.log(`Inside show function`);

    }

}

console.log(user);

let country = user.country; // here i am accessing country attribute by using country as let and logging it will give me the value inside obj user

console.log(country);

user.show(); // Here Am accesing function attribute frfom Object "User" I
// Also to accesss function make sure to write the attribute name and then " () "

console.log(user.address.pin); // Here i have accessed nested function

user.address.flatNo = 308; // Here i have addedd attribute in nested object

console.log(user.address);

 user.address.getAddress();  // here i am accessing function from nested object
// Also note that here getaddress is a anonymous function that is a function without name is anonymous function
 

console.log(`====== Traversing an object ========`); // For in is used to traverss object

let developer = {

    firstName: "Gajanan",

    age: 32,

    isMarried: true,

    skills: ["C", "CPP", "Core Java", "JavaScript", "Microservices" ]

}

for (const key in developer) {

    if (Object.hasOwnProperty.call(developer, key)) {

        const element = developer[key];

        console.log(`Key ==> ${key}, Value ==> ${element}`);

    }

}

 console.log(developer.skills);// How to add element in array of a object
 developer.skills.push("HTML")
 console.log(developer.skills);
 developer.skills.shift() // deleting 1st element from array inside a object here dont forget to add parenthesis
 console.log(`Deleted 1st element  [ ${developer.skills} ]`);

 // TO Get all the entries from a object

 const key = Object.keys(developer)
 console.log(key)
 // we will get the values in form of "Array" as they are multiple as array can store multiple values

 const value = Object.values(developer)
 console.log(value)
 
 // TO check if value is array we do as follows
 console.log(Array.isArray(value));

// To traverse key or value we use " for of loop"
for (const elements of value) {
    console.log(elements);
}

// To get All the entries i.e key and value together we use following syntax
const entry = Object.entries(developer)
console.log(entry); // here we get result as array2 i.e array inside array in order to read this array just pass index no array as follows
var array = entry[0]
console.log(array);
 // To access single entry from above array we write as follows
 var array = entry[0][1]
 console.log(array);
 
 // To check whether a particular propery is Available by using " IN " also remeber to write the proiperty name using "inverted"

 var isAvl = "age" in developer
 console.log(`IS Age Property availble in developer ==> ${isAvl}`);

 








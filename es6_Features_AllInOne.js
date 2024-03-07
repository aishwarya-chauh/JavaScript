// strict mode
`use strict`

//  age = 32
//  console.log(age);
// using strict moe we can minimize error

// spread operator
// 1st) to expand array
  let array = ["jenny","bill","arya","aish"]
  console.log(array);
  console.log(...array); // here ... has expanded array that is array k bahar nikaala hai
  // use case of spread operator we use to expand array and secondly as a rest parameter

  // 2nd) as Rest Parameter
  function spreadOp(...arg){
console.log(arg);
  }
  spreadOp(1,2,3)
  // here using ... in argument we can pass one argument for multiple values also it holds in form of array
  // also if we are using rest parameter along with other arguments then it should be last written





// Function with default arg



function divide(n1,n2=1) { // here i have given default value of n2 as 1
    console.log(n1/n2);
}
divide(10,5)
divide(0,7)
divide(9)// here i did not pass n2 value hence to avoid nan as result i pass default value of n2 = 1 


// OBJECT DESTRUCTORING

let person = {

    firstName: "Gajanan",

    age: 32,

    isMarried: true,

    city: "Pune",

    country: "Bharat"

}

 

// let firstName = person.firstName;

// let age = person.age;

// let city = person.city;

// let country = person.country; 
// ABOVE IS THE OLD WAY TO EXTRACT DATA FROM OBJECT

 

let { firstName, age, country, city="Mumbai", pin=12345 } = person; // Object Destructuring HERE From person object we have extracted the property by using one variable

 // above method is called as object destructoring
 // incase we do not hVE A  particular value we can also add default values in object detruction as in above pin and city Mumbai

console.log(firstName, age, city, country, pin);

// -------- ARRAY DESTRUCTORING---------

let nArray = [1,2,3,4]
 let [element0,element1,element2,element3] = nArray
 console.log(element0,element1,element2,element3, element4 = 5); // here i have given default value for not mentioned element of array


// self invoking function:

// IIFE :-- IMMEDIATELY INVOKED FUNCTION EXPRESSION
//  ( function () {
//    console.log(kaay tujha);
//     }

//     ) ()
// above is immediately invoked function
// i.e (function paramete) () ========== immediately invoked function
// TYPES OF FUNCTIONS 
// 1ST ANONYMOUS FUNCTION : FUNCTION WITHOIUT NAME 
// 2ND FUNCTION EXPRESSION : FUNCTION STORED IN VARIABLE
// ARROW FUNCTION :-- SYNTAX (arguments) =>ARROW OPERATOR {FUNCTION BODY}
 // const n1// = ()=>{

//          }
// n1()
// the function with no value and no argument and no return value is above arrow function

// arrow function with return value is written as below
// const n1// = ()=>{
//     return 100
//          }
// let result = n1(pass values)
// log result
 
//IIFE
(function () {
    console.log(`Inside IIFE`);
    
 })()
// Arrow function without arg and return value
 let arrowFunc = ()=>{
console.log(`Inside Arrow Function`);
 }
 arrowFunc()

 // Arrow function with argument and no return value

 let nArrayFunc = (n1,n2)=>{
console.log(`Addition is ${n1+n2}`);
 }
 nArrayFunc(10,11)

 // Arrow function with arguments and return value

 let mArrayFunc = (n3,n4)=>{
    let result = n3*n4
    return result

 }
 let mult = mArrayFunc(10,20)
 console.log(mult);



// write a programme by arrow function "Javascript" which returns the total no. of character

let total = (char)=>{
   return char.length
}
let result = total("Javascript")
console.log(`Total number of words in JAVASCRIpt is ${result}`);

// ARRAY OF OBJECT
class Student {

  // Data member or properties

  // Constructor

  constructor(id, name, city, marks ){

      this.id = id;

      this.name = name;

      this.city = city;

      this.marks = marks;

  }

  // Member Functions or methods

  getDetails(){

     console.log(`ID: ${this.id}, Name: ${this.name}, City: ${this.city}, Marks: ${this.marks}`);

  } 

}



const jenny = new Student(11, 'Jenny', 'Pune', 67);

const bill = new Student(43, 'Bill', 'Mumbai', 96);

const elon = new Student(32, 'Elon', 'Hyd', 83);

const stew = new Student(22, 'Stew', 'Pune', 75);

const ratan = new Student(65, 'Ratan', 'Mumbai', 90);

const arrayStudents = [jenny, bill, elon, ratan, stew];

// Program to traverse array of object

for (const element of arrayStudents) {

 element.getDetails(); // here i have called get details method.. i could also have console logged elements but .getDetails gives us proper info

}

console.log(`====== WAP to find the students from City - Pune================`);

for (const element of arrayStudents) {

  if (element.city=='Pune') {  // here we are finding out if elements have city pune in it

      element.getDetails(); 

  } 

}



console.log(`====== WAP to find the students from City - Pune OR Hyd================`);

for (const element of arrayStudents) {

  if (element.city=='Pune' || element.city=="Hyd") {

      element.getDetails(); 

  } 

}

console.log(`====== WAP to find the average marks  ================`);

let totalMarks = 0;

for (const element of arrayStudents) {

  totalMarks = totalMarks + element.marks;

}

console.log(`Total Marks of all students is: ${totalMarks}`);

const averageMarks = totalMarks/arrayStudents.length;

console.log(`Average marks is: ${averageMarks}`);

// wap to write the name of students whose name starts with R or S

for (const element of arrayStudents) {
  if (element.name.startsWith('R') || element.name.startsWith('S')) {
    element.getDetails()
  }
  
}


//  PROMISE
let notesisAvailable = false // can be true also here
const promiseNotes = new Promise (function (success , reject) {// here sucess and reject also act as function in promise
  if (notesisAvailable) {
    success(`Notes are Available... Here you go`)
  }
  reject(`Notes not ready`)
})
promiseNotes.then( (success)=>{
  console.log(success);
console.log(`Thank you sir .. for sharing the notes`);
}).catch((reject)=>{
  console.log(reject);
  console.log(` Sorry guys Notes are not available`);
} ).finally(()=>{
  console.log(`I made my own notes no worrie's`);
})




























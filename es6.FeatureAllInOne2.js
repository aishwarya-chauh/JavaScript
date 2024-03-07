// FOR EACH METHOD :-- IT TAKES FUNCTION AS AN ARGUMENT
// foreach(function(current value, index , array){

// })
// mentioning current value is mandatory but index value and array value above can be ignored
//  const array = [1,2,3,4]
//  shotcut to iterate
//  array.foreach ((current value)=>{

//        })
// hence above is shortcut to use foreach loop....

const array = [2,3,4,5,9]
array.forEach((currentValue, index, array)=>{
console.log(currentValue, index, array)
})
/// wap to write odd numbers
array.forEach((currentValue)=>{
if (currentValue%2 !==0) {
    console.log(currentValue);
    
}
})
// wap to add even numbers in array
console.log(`============array even no-===========`);
let arrayEven = []
array.forEach((element)=>{
if (element%2==0) {
 arrayEven.push(element)
 console.log(arrayEven);
    
}
})
arrayEven.forEach((element)=>{
    console.log(element);
})


// Traversing on set Values

const nSet = new Set ()
nSet.add(44)
nSet.add(55)
nSet.add(85)
nSet.add(15)
nSet.add(25)
nSet.add(36)
console.log(nSet);

console.log(`=========traverding over set=========`);

nSet.forEach((element)=>{
console.log(element);
})


// traversing on Map

const map = new Map
map.set("mame", "Aishwarya")
map.set("place","Nashik")
map.set("age",32)
console.log(map);

console.log(`===========Traversing over Map==============`);

map.forEach((value,key)=>{
console.log(key ,"==>" ,value);
})


class Student {
constructor(id, name, city, marks ) {

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

var jenny = new Student(11, 'Jenny', 'Pune', 67);
var  bill = new Student(43, 'Bill', 'Mumbai', 96);
var elon = new Student(32, 'Elon', 'Hyd', 83);
var stew = new Student(22, 'Stew', 'Pune', 75);
var ratan = new Student(65, 'Ratan', 'Mumbai', 90);
var  arrayStudents = [jenny, bill, elon, ratan, stew];

console.log(`==========WAP to get even id of students===========`);

arrayStudents.forEach((element)=>{
if (element.id%2==0) {
    console.log(element);
    
}
})

// Map Method
//Transforming array into a new array a new shortcut to learn here
let arrayA = [11,22,33,44,55,66]
let newarrayA = arrayA.map((element) => {
  return element*element
})
console.log(`=========Map Method for Square========`);
console.log(newarrayA);

console.log(`============Map Method to add a number to its elemnts==========`);

let arrayT = [11,22,33,44,55,66]
let nayatransf = arrayA.map((element) => {
  return element+100
})
console.log(nayatransf);
// basically herre what we do is we store .map into a new var....
 // same is for object
 class tudent {
    constructor(id, name, city, marks ) {
    
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
    
    var jenny = new tudent(11, 'Jenny', 'Pune', 67);
     var bill = new tudent(43, 'Bill', 'Mumbai', 96);
     var elon = new tudent(32, 'Elon', 'Hyd', 83);
     var stew = new tudent(22, 'Stew', 'Pune', 75);
     var ratan = new tudent(65, 'Ratan', 'Mumbai', 90);
    var  arraytudents = [jenny, bill, elon, ratan, stew];
    
 let newwArrayStu = arraytudents.map((element) =>{
 element.name
 })
 console.log(`==========new array students==========`);
 console.log(newwArrayStu);

 // Filter Method

 // filter means getting particular values and transform means complte change 

 var arrayNum = [50,55,16,20,73,85,36]

 var newArr = arrayNum.filter((currentValue) => {
return currentValue%5==0
 })
 console.log(newArr);

 class Rajveer {
    constructor(name,city,age){
        this.name = name;
        this.city = city;
        this.age = age
    }
 }
 const papa = new Rajveer("Ajay", "Lohner",35)
 const mumma = new Rajveer("Aish","Nashik",30)
 const nani = new Rajveer("Kiran","Nashik",55)
 const nanu = new Rajveer("Raj","Solapur",59)
  const newRajveer = [papa,mumma,nani,nanu]

  const filteredRajveer = newRajveer.filter((element) =>{
  return element.city=="Nashik"
  })
  console.log(filteredRajveer);

  filteredRajveer.forEach((element)=>{
console.log(element);
  })
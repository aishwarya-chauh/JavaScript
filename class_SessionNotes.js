


// Class : Class is a blueprint of object which has following in it
// 1 Data Member
// 2 Member Function
// 3 method ( getDetails())
// 4 constructor
// 5 this ( refers to current object)

// there are 32 different ways to create class
// 1 using object literals
// 2 constructor
// 3 function

// Object is the instance "example" of a class

// Reserved key words in class
// class 
// constructor ====== data members are writen
// this. ==== which refers to current object
// new ===== used to create new Object from class
// getDetails() ===== method to log details of object

class Student{

    // Data member or properties

    // Constructor

    constructor(id,name, city, marks ){

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

const jenny = new Student(11, "Jenny", "Pune", 70);

console.log(jenny.name);

jenny.getDetails();

 

const bill = new Student(22, "Bill", "LA", 60);

//console.table(bill);

bill.getDetails();

const elon = new Student(33, "Elon", "Mumbai", 90);

const stew = new Student(44, "Stew", "Bergen", 80);

 // traverdsing object of class

 // How to put object in array
 // const array = [object name like , object name] i.e put elements in square bracket

console.log(`Traversing array of Object...`);

const arrayStudents = [ jenny, bill, elon, stew ];

for (const element of arrayStudents) {

    element.getDetails();

}

console.log(`WAP to log the details of students having marks greater than equal 80`); 

for (const student of arrayStudents) {

    if (student.marks>=80) {

        student.getDetails();

    }

}


//Polymorphism:+====
// Poly means Many
// morphism means form
// example Mother : One person many forms
//there are two types of Polymorphism
// 1) COMPILE TIME POLYMORPHISM :USING OVERLOADING METHOD
// 2) RUNTIME POLYMORPHISM : USING METHOD OVERRIDING
// METHOD OVERRIDING : IS A FORM OF INHERITANCE WHERE WE CAN OVERRIDE THE ORIGINAL VALUE
class Parent {
    constructor(fatherName,motherName){
        this.fatherName = fatherName;
        this.motherName = motherName;

    }
    callingChild(){
        console.log(`Rajveer's Father name is:- ${this.fatherName}`);
    }
}

class Child extends Parent {
    constructor(eyeColour, hairColour , fatherName,motherName){
        super(fatherName,motherName)
        this.eyeColour = eyeColour;
        this.hairColour = hairColour
    }
    callingChild(){// here i have override parent class function value in child class hence it will not run function from parent class and log r4esult from child class hwnce known as overriding
        console.log(`Rajveer's Mother name is ${this.motherName}`);

    }
}
 const rajveer = new Child ("Brown","AshBrown","AJay", "Aishwarya")
 console.log(rajveer);
 rajveer.callingChild()

 // Overloading :

 // Polymorphism: The ability to act in more than one form

// 1. Compile Time Polymorphism: Method Overloading

// 2. Run time Polymorphism: Method Overriding

 

class Student {

    constructor(rollNo, name){

        this.rollNo = rollNo;

        this.name = name;

    }

    marks(maths, physics){

        // console.log(`maths: ${maths}, ${physics}`);

        console.log(arguments);

        console.log(typeof arguments);

        console.log(this);

        if (arguments.length==2) {

            console.log(` Addition of marks is: ${maths+ physics}`);

        }

        if (arguments.length==1 || physics ==undefined) {

            console.log(` Addition of marks is: ${maths + 0}`);

        }

        console.log(`==================`);

    }

}

const jenny = new Student(11, "Jenny");

console.log(jenny);

jenny.marks(89, 91);

jenny.marks(60);















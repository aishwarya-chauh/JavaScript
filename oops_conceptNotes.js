// oop: object oriented programme
// so we have seen that we can create object using object literals, constructor function and class
// In Class we have data member, constructor and membor function in class
// what is this. it is a reference var which points to the current object.
// INHERITANCE:=====
class MotherCat { // this class has data members
    constructor(eyeColor,totalLegs){
        this.eyeColor = eyeColor
        this.totalLegs = totalLegs
    }
    meowing(){ // this is a anonymous function
        console.log(`Cat is meowing`);
    }

}

// to create object we use new keyword
// Derivative :--  Below we are creating subclass of ParentClass(Superclass)

class BAbyCat extends MotherCat{ // here mothercat is a parent tag and babycat is a child tag we will make all the data from parent tag available to child tag
   constructor(bodyColor , name, eyeColor,totalLegs){ // while creating object of child class it will also crearte object of parent class hence lets see the use of super()
    super(eyeColor,totalLegs); // so we have 2 classes superClass or parent class and derived or child class 
   // since we have data member  in super class and we are creating object from derived class we also need to
   // initialize super class hence we use "   SUPER()  " which class the superclass 
   // "To initialize Parent class in child class we need to mention the datamembers of parent class in derivative and then also i superclass ()
    this.bodyColor = bodyColor
    this.name = name

   }

} 
// now we will create object from subClass(Derivative)
const Minty = new BAbyCat ("Peach" , "Minty", "Grey", 4)// here to initialize parentclass in derivative write the data memeber of superclass in dedrivative
console.log(Minty);
Minty.meowing() // Here i have called function from parent Class..










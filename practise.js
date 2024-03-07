// for each

 let array = [ 2,3,4,5,6]
 array.forEach((currentValue,index,array)=>{
    console.log(currentValue,index,array);
 })


 // set banana   set banane k loye new Set()  var name .add ()
 const set = new Set()
 set.add("aish")
 set.add( isMarried = true)
 set.add(35)
 console.log(set);
 // map banana var banaake new Map() neeche var name . set (key,value)

 const key = new Map()
 key.set("name","aish")
 key.set("age", 32)
 key.set("isMarried", true)
 console.log(key);

 // creating object
  class Student {
    constructor(name,age,place,id){
        this.name = name
        this.age = age;
        this.place = place;
        this.id = id
    }
    getDetails(){
        console.log(`Name ${this.name},Age ${this.age},Place${ this.place},ID${this.id}`);
    }
  }

  let jenny = new Student ("Jenny", 32, "Nashik", 3)
  

const check = function(word){
  return word.split(" ").reverse().join()
}
let result = check("LEVEL")
console.log(result);

// palindrome check karna hai toh split karke reverse karke join 
// Anagram ccheck karne we do word.split(" ")split karnese humko words alag alag milta hai array me 
// word.split("").sort()sort se humko ascending order me milega and then .join()












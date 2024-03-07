const developer = {

    firstName: "Gajanan",

    age: 32,

    isMarried: true

}

console.log(developer);

developer.age = 34;

console.log(developer);

 

// Not allowed

// developer = { i.e creating empty object using const is not allowed

 

// }

console.log(`====== Object Freezing === `);
// When we use "Freeze" the entire object gets freezed and hence no value can be updated or added

Object.freeze(developer);

developer.isMarried = false;

developer.firstName = "Jenny";

console.log(developer);

developer.babyName = "Rajveer"
console.log(developer);

// "Similary we can freeze"  Array by using Object.freeze (ArrayNAme)


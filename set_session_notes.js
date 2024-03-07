// SET
// Set cannot hold duplicate values
// set is created by using  " let creatSet =  new Set ()  "
let arrayN = [44, 22, 33, 44, 22, 66, 77];

console.log(`This an array ${arrayN}`);

// Set

 

const setOfRollNum = new Set();

setOfRollNum.add(44);

setOfRollNum.add(22);

setOfRollNum.add(33);

setOfRollNum.add(44);

setOfRollNum.add(22);

setOfRollNum.add(66);

setOfRollNum.add(77);

console.log(setOfRollNum);

 

console.log(`Size is: ${setOfRollNum.size} `);

 

console.log(`Deleting 66`);

setOfRollNum.delete(66);

console.log(setOfRollNum);


console.log(`Is element available`);

console.log(setOfRollNum.has(22));




console.log(`Traversing set collection....`); // using for of loop

for (const element of setOfRollNum) {

    console.log(element);

}

console.log(`=================Removing duplicate elements from an array======================`);

let array = [44, 22, 33, 44, 22, 66, 77]; // we can convert it to set as set does not hold duplicate value

console.log(array);

 const newArray = [...new Set(array)]; // Using spread operator we created new array by using set. we copied elements from above array and by using new Set(array) we created new array without duplicate value

console.log(newArray); 
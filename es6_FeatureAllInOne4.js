// Flat : when we have array inside a array its depth becomes 1 and to reduce its depth and include the array written inisde the array together we use flat 
// depth means array k andar kitne array hai

const arry = [ 1,5,6,8,2,["Aish",23,46]]
// depth = 2
const newArry = arry.flat()
console.log(newArry);
console.log(arry);

const newArray = arry.flat();

console.log(newArray);
const aa = [ 2, 3, 4, [50, 4], [4, 5, [9, 4 ]] ];
const bb = aa.flat();
console.log(bb);
console.log(`=== With custom logic that is depth = 2====`);
const cc = aa.flat(2);// here 2 is for no. of array .. question is asked in interview...
console.log(cc);

 // Assignment ==> flatMap() ==> Learn your self

 //SORT:---

 const aish = [ "Jenny", "Bill", "ELon","Stew"]
 console.log(`========before using reverse======`);
 console.log(aish);
 console.log(`=============after using reverse method=========`);
 aish.reverse()
 console.log(aish);

// SOrting:--- ascending chote se bada and dscending is bade se chota

// asending k lioye suse sort()
// descending k liye sort kiye huye var ko reverse() lagao

const ajay = [2,5,9,7,1,3,12,33,25]
console.log(`======before sorting=======`);
console.log(ajay);
ajay.sort()
console.log(`================after sorting which gives ascending order===========`);
console.log(ajay);// observe the result here in array when we used sort it considers first digit as small or big hence we do not get expected result
console.log(`=================using reverse to it gives descending=============`);
ajay.reverse()
console.log(ajay);
// hence sort method is customised... as shown below
ajay.sort((a,b)=>{
  return a>b ? 1 : -1 // 1 matlab bada and 
})

// Palindrome :- a word that reads the same word backward like madam, level
// p.s all these are important with reference to interview which checks our logic skills

const isPalandrome = function (word) {
   return word.split("").reverse().join("")
}
const result = isPalandrome("MADAM")
console.log(`Checking if the given word "MADAM" is Palindrome ===> result is true: ${result} `);

// ANAGRAM .. :--- which has same letter in two different words


const str1 = "heart"
const str2 = "earth"
 const newStr1 = str1.split("").sort().join("")
 const newStr2 = str2.split("").sort().join("")
 console.log(`===========checking if heart and earth is anagram==========`);


console.log(newStr1==newStr2 ? true : false);
 // Last Feature of ecma script
 // PACKAGE.JSON
 // for it we have created 3 files namely package.json
 // module.js
 //main.js
 // check it



























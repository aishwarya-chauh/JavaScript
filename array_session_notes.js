// Collection :
// "ARRAY" 
// WE HAVE SEEN THREE TYPES OF DATA TYPES
// 1 PRIMITIVE :- STRING, BOOLEAN , NUMBER
// 2 SPECIAL :- NULL , UNDEFINED
// 3 NON PRIMITIVE / REFERENCE/ COMPOSITE :- OBJECT ---> 1 ARRAY, 2 SET, 3 MAP
// DIFFERENCE BETWEEN PRIMITIVE ND NON PRIMITIVE :- PRIMITIVE CAN HOLD SINGLE VALUE ..
// IN NON PRIM :- WE CAN HOLD MULTIPLE VALUES
// Array :- Array is the collection of elements.. let array [1,2,3,4]
// we use array.length to know the no. of eleemnts also in this index starts from " 0 "
// in array when writing string use " " eg [ "aish", "ajay"]
// to add element at the end in array we use push eg array.push() 
//to remove end element we use .pop()
//to add element in the start we use unshift()
//to remove first element shift()
// array.index(length-1) is used to find last element
//to access array element we can write eg array[index no.]
// to update the value we write as  eg  array[1,2,3,4] update 2 with 8 eg array[ index no] = 8
// to write a programe for array :- let array = [1,2,3,4]
 //for (let index = 0; index < array.length; index++) {
   //  let element = array[index];
   // how above loop will work :- index length is 5 and condition is index number in loop should be less than equal to 5
   // firstly index no. will be checked and then it will be updated in let element and frther it will be added by 1 every time untill we get 5
   // now when said write a pregramme to sum the elements in array
   // let array = [ 1,2,3,4]
   // let sum = 0 now we will not write this var in for loop as it will not make iteration possible
   // for (let index = 0; index < array.length; index++) {
     //   sum = sum = array[index];  here whatever will be the index value will get added by updated sum value after each iteration
     // eg  let sum = 0 + 1 +2+3+4 = 10 so sum of eleemnts in array will become 10
     // in loop we will see -- sum = 0 + 1 where {1 is index value}        
  //  // for even index value we will use if condition in for loop if (index%2==0) ; let result = array[index of even no.] log{result}
//  if i want to read random elements from an aaray then i will use slice () eg. array.slice[ index no. ]
// in slice if we want eleemnts from oth index to 3rd index we will write it as eg. array.slice[0,4] 4 index because it exckudes last value so put one extra index 
//console.log(`===== Find index of an element =====`);
const arrayNum = [ 2, 4, 6, 8 ]; 

console.log(arrayNum);

console.log(`Total elements in the array is: ${arrayNum.length}`);

console.log(`Array type is: ${typeof arrayNum}`);

 

console.log(`===== Read or Access value from array =====`);

const elementAtIndex2 = arrayNum[2];

console.log(`Element at index 2 is: ${elementAtIndex2}`);

 

console.log(`===== Traversing value from array =====`);

for (let index = 0; index < arrayNum.length; index++) {

    const element = arrayNum[index];

    console.log(element);

}

 

console.log(`===== WAP to Sum of from array =====`);

let sum = 0;

for (let index = 0; index < arrayNum.length; index++) {

    sum = sum + arrayNum[index];

}

console.log(sum);


const indexOf6 = arrayNum.indexOf(6);

console.log(`Index of 6 is : ${indexOf6}`);

const indexOf303 = arrayNum.indexOf(303);

console.log(`Index of 303 is : ${indexOf303}`);

 

let array = ["Jenny", "Menny", "Bill"];

console.log(`===== Adding an element at the end  =====`);

array.push("Elon");

console.log(array);

 

console.log(`===== Adding an element at the beginning  =====`);

array.unshift("Narayan");

console.log(array);

// Traversing array using for in loop:--- below is example if interviewwwer asks how will you traverse array using for in loop
//  let array = [ 11,22,33,44,55]
//  for (const index in array) {
//   console.log(array[index]);
//   }
 
console.log(`==== WAP to count the vowels from the given string=======`);

const str = "Developer UI and Backend";// this is our given string

const vowels = "aeiou"; // this is vowels string

let count = 0;

for (const char of str) { // here const is variable created for character that will iterate from string

    console.log(char);

    if (vowels.includes(char.toLowerCase())) { // in if condition we said that does variable const " CHAR " has variable vowels in it alshere we converted string value to lowercase if vowels were in uppercase do convert for loop me values to uppercase

        count++; // if yes then it will count as one "1" and when on further iteration count++ will go on adding number of vowels

    }

}

console.log(`Vowels count is: ${count}`); // make sure to log vowels variable outside the for loop because we created var vowel outside the for loop..

console.log(`========WAP to write Sum of array==========`);

let arrayn = [11,22,33,44,55,66,77]
let total = 0
for (const index in arrayn ) {
  if (arrayn[index]%2==0) {
    console.log(`Print Even number${arrayn[index]}`);
    // agar me sirf index daalungi condition aur sirf index log lkarungi toh vo muje position log karke dega uski values nahi values k liye muje variable daalke [index] ese daalna padega
  }
  total = total + arrayn[index] // we use varName[index from for loop]  
  
}
console.log(`Sum of array is ${total}`); // for loop k bahar jo const hai usko humesha log karna hai outside loop.

// imp using for in loop we cannot traverse inverse because we cannot control index value here i.e for ( const index{becaue of this we cannot traverse inverse})
 

console.log(`==========Traversing using For of Loop=============`);

// for of loop directly gives value inside a array

// for (const iterator of object) {
  
//  }

// above in iterator replace by element i.e value inside array.. here value will automatically internally will go inside const iterator and we get result.. 
// for of and for in are shortcut to traverse an array
 for (const element of arrayn) {
  console.log(element); // here log iterator value into log and not object 
 }

 let arraySay = [4,5,6,7,3]
 let totalSum = 0
 for (const index in arraySay) {
  console.log(`${arraySay[index]}`);
  totalSum = totalSum + arraySay[index]
 }
 console.log(` Total Sum value is ${totalSum}`);

console.log(`============WAP to join or to get  elements in one line in an array============`);

let arrayOfFriends = ["Aish", "Ajay", "Rajveer"]
const newArrayFriends = arrayOfFriends.join(",") // converts array to string
console.log(`${newArrayFriends} `);
console.log(typeof(newArrayFriends));


console.log(`========wap to split words=============`);
console.log(`==========splitting in words===========`);
let given = "Develeoper UI and BAckend"
let arrayNewCreated = given.split(" ") // here "given " got converted to array by using split method and note that we have given space between inverted so we got it seperated in words
console.log(arrayNewCreated);


console.log(`==========splitting in characters==============`);

let givens = "Develeoper UI and BAckend"
let arrayGivenNew = givens.split("")
console.log(arrayGivenNew);
// there is reverse method only in array to reverse given value.. hence we can convert through split and then use reverse
arrayGivenNew.reverse()  // dont forget to log again
console.log(arrayGivenNew.join(""));
// SHORTCUT TO REVERSE STRING

let givenss = "Develeoper UI and BAckend"
let convertToArray = givenss.split("").reverse().join("")
console.log(convertToArray);

console.log(`=====IMP Spread Operator======== `);

let aisharray = ["Jenny", "Menny", "Bill"];

 

// Spread Operator ...  these 3 dots are spread operator

console.log(aisharray); // ['Jenny', 'Menny', 'Bill']

console.log(...aisharray); // Jenny Menny Bill here we have got spread elements

const newArray =[...aisharray]; // here we have cloned or created duplicate array of original array this is the use of spread operator

console.log(newArray);












//closure:---
// suppose i create a varibale before declaring function eg let pin = 1234
// function outer(){
// let n1 = 100
// log (pin), log ( n1)
// let innerfunction ( ) {
// let age = 30

 //   log (pin , n1 , age)
//   }
//    return innerfunction ------------ this will give me the values from innerfunction 
// }
//   let result = outer() ------------ this will invoke the innerfunction as it has complete function in it and 
// shortcut to call above function is ----- outer()()
//  log result
// hence we can access variable even if declared outside an before function in function scope..
// also i can create a innerfunction inside the main function like above
// and inside innerfunction i can access to all the variables
// in order to execute innerfunction i will use return 
// hence closure means defining a inner function which has three scope chain i.e  it can have access to its own variable , acces to outerfunction var and global var

//       }
// closure is an innerfunction which has access to outerfunction
// it has access to it own scoped variable
// it has access to outerfunction variable
// it has acess to global variable
 
var globalVariable = 100
function outerfunction(){
let outerFunExp = 200
let innerfunction = function() {
    let age = 30
    console.log(globalVariable);
    console.log(outerFunExp);
    console.log(age);
}
return innerfunction
}
let result = outerfunction() // --- here we have invoked outerfunction which has a innerfunction stored in a variable hence when we will log reult it will execute code
// in order to run and execute innerfunction we need to call result which will then give values and not the code as it is..
console.log(result); 
result ()
// below is shortcut to call innerfunction
outerfunction()()


// callback
//



function jenny(callback){ // callback is argument of jenny 

    console.log(`After session.. Jenny started homework`);
 
    console.log(`Jenny completed all steps`);
 
    console.log(`Then she is ready to call back Bill `);
 
    callback(); // here i am passing bill function as an argument to jenny function using callback
    // to callback u need to pass ' argument ()' as shown above inside the main function
 
 }
 
    let bill = function(){
 
     console.log(`I am Bill and I am going to play Cricket `);
 
     console.log(`I know Jenny likes me, Hence once She completes her homework`);
 
     console.log(`She will definitely call me back..`);
 
     console.log(`Then I will copy all the assignments as it is..`);
 
 }
 
 jenny(bill) // here when w pass bill as arg its a function expresiion hence it will be pased to  jenny as argument
 // and when we pass bill which is a function exxpression as argument to jenny it will show its function in jenny 


 //set time out which is used to call a particular function after certain timeout


 let greet = function(){

    console.log(`Hey.. Good Morning..`);
}
setTimeout(greet, 5000); // 1 Sec = 1000 Milli seconds

 // another way to write

setTimeout( function(){ // here i have passed function as an argument to seTimeOut

    for (let index = 0; index < 5; index++) {

        console.log(index);
    }

} , 3000);



// setInterval : asked in interview not in use so learn about it
   
//   setInterval(function () {
 //   console.log(hellow);
    
 //             }, 2000);
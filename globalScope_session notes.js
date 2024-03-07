//esma script 6 
//feature is let and const..
//their major difference is let value can be changed but const cannot be altered
// accesibility : we can access variable inside if and else and for inside a function block wherever we want 
// eg function ( ){
    // const pi = 3.14
    // if ( ) {
              
       // if ( ) {

   //    }
  //   }
  //  log (pi)
//  }
// here outer variable " pi " is accessible in inner blocks...
// but we cannot access variables written inside a function outside of the function
// Hence above is the explanation for variables declared inside the function are function scoped
// another concept is block scope.. we can access var outside the blocks of :" if , while for " loop
// but we cannot access ( access means log) let and const outside these blocks because they are known as blocked scopes...
// sumup.... we cannot use let and const in function scope as they are block scoped..
// " let "  can be redeclarred and we can declare alone " let " and can initialize in the next line..
// but we cannot " redeclare " aas well as we can declare and initialize the " const " in the same line..
// hence most widely let is used..
// var is flexible we can use it as much as times as we want.. and also it is function scoped
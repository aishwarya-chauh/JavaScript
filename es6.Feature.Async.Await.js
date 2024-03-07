// was introduced in the year 2017..
// use in place of closure callback and promises..
// is better than above mentioned
// how we create promise by using new Promise(inside write a arrow function)
let isPromisefailure = true
function getData(){
    const promi = new Promise((succes,reject)=>{
        if (isPromisefailure) {
            reject(`Code did not get executed hence rejected...`)
            
        } else {
            succes(`Issue Resolved`)
            
        }
    })
    return promi;
}

async function showData(){
    try {
        const promiData = await getData()
   console.log(promiData);
        
    } catch (error) {
        console.log(`We got this from doing try catch block`);
        console.log(error);
        
    }
   
  // promiData.then((success)=>{
    //console.log(success);
  // }).catch((reject)=>{
    //console.log(`Issue is not resolved`);
   //}).finally(()=>{
    //console.log(`Finally Block Executed`);
   //})
}
showData()


// Await helps us to resolve the promise successfully and async and await both are anonymous and we can only wite await in async function
// async nd await is used instead of  promise jo ki comment me likha hai uska shrtcut hai


// ADVANCE OF ASNC AND AWAIT
// scenarios
// 1)
function getData(){

    return "100 Products";
}

async function showData(){
    try {

        console.log(`Inside try block....`);
        const promiseData = await getData();
        console.log(promiseData);
    } catch (error) {
        console.log(`Inside catch block...`);
        console.log(error);
    }
}
showData();



// 2nd 
const isPromiseFailure = false;

function getData() {

  return new Promise((success, failure) => {

    setTimeout(() => {

      success("Promise Resolved: Successfully fetched data");

    }, 20000);

  });

}

async function showData() {

    console.log(`Inside try block....`);

    const promiseData = await getData();

    console.log(promiseData);

    dance()
}

showData();
function dance(){
    console.log('I am dancing as My Promise resolved...');
}





// Asynchronous V/s Synchronous
// synchronous means to be in a sequence, i.e. every statement of the code gets executed one by one.
// JavaScript is Synchronous and single threaded Programming Language


/*
console.log("script start"); // first ye print dega
for(let i=0; i< 1000; i++){   // 2nd ye
    console.log("Inside the loop");
}
console.log("script end")  // phir ye
*/

// setTimeout
console.log("script start"); // 1st ye print hua
function hello(){
    console.log("Inside hello function"); // third ye print hoga because of setTimeout
}
setTimeout(hello, 1000); // means hello function after 1000 millisecond(1sec) ke baad print hoga
console.log("script end");  // 2nd ye print hoga
// here 1000 represent kam se kam itna time 

// hum hello ki jagah arrow fxn bhi likh sakte hai.
// setTimeout is actually not the property of javascript actually ye browser ki feature hai(Web API) 
// As a result javascript engine setTimeout browser ko degi then setTimeout ko event loop wait karane ke liye bolega so that js engine is in well formed
// then Event loop setTimeout ko callstack me de dega then it prints
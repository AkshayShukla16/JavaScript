// The setTimeout() method executes a block of code after the specified time. The method executes the code only once.
// The commonly used syntax of JavaScript setTimeout is:  setTimeout(function, milliseconds);


console.log("script start"); // 1st ye print hua
setTimeout(()=>{
    console.log("Inside hello function"); // 4th ye print hoga because of setTimeout
}, 0); // means hello function after 0 millisecond ke baad print hoga but ise event loop wait karane ke liye bolega
for(let i=0; i< 100; i++){   
    console.log("Inside the loop"); // 2nd ye
}
console.log("script end");  // 3rd ye print hoga
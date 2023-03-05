
// The setInterval() function is commonly used to set a delay for functions that are executed again and again, such as animations.
// The setInterval() method calls a function at specified intervals (in milliseconds).
//The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
// i.e clearInterval(IntervalId)

console.log("script start"); 
setInterval(()=>{
    console.log("Inside hello function"); 
}, 10000);
for(let i=0; i< 100; i++){   
    console.log("Inside the loop"); 
}
console.log("script end");


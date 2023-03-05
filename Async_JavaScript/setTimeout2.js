
// setTimeout hame hamesha ek id deta hai

console.log("script start"); 
const id= setTimeout(()=>{
    console.log("Inside hello function"); 
}, 100);
for(let i=0; i< 100; i++){   
    console.log("Inside the loop"); 
}
console.log("setTimeout id is: ", id);
clearTimeout(id);  // ye line no.6 me likha hua code print he nahi hone dega
console.log("script end");  
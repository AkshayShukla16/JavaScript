// for loop in javascript

let i= 0;
for(i=0; i<10; i++){
    console.log(i);
    
}

/* note
for(let i=0; i<10; i++){
    console.log(i);
}
console.log(`current value of i is ${i}`) --> here we get uncaught error showing i is not defined. this is because i is defined inside the loop using let. So to get we use to initialise above the fore loop.
But when we use var it does not show error and gives the result of console.log(`current value of i is ${i}`)
*/
 
// example

let num= +prompt("Enter the number");
let total =0;
let k=0;
for(k=0; k<=num;k++){
     total=total+k;
}
console.log(`Sum of natural number up to ${num} is ${total}`);
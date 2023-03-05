// boolean (data type) and comparison operator

let  num1= 33;
let num2 = 5;
console.log(num1<num2);
console.log(num1>num2);
console.log(num1>=num2);

// == V/s ===
// == it only focuses on the value not on data types
// === it focuses on both value and data types

let sal1= 200; // data type number
let sal2= "200";  // data type string

console.log(sal1==sal2); // output --> true as == focuses only on values
console.log(sal1===sal2); // output--> false as === focuses on both value and data types

// != V/s !== 
// same as above 

console.log( sal1 != sal2); // Output--> false
console.log(sal1 !== sal2); //Output --> true
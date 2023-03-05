const arr= ["item1", "item2", "item3"];
 
/* 
let arr1= arr[0];   This is the normal method and we already know this
let arr2= arr[1];
console.log(arr1);
console.log(arr2); */ 

let [myarr1, myarr2, myarr3]= arr; // here we destructuring the array
console.log(myarr1);  
console.log(myarr2);
console.log(myarr3);

console.log("--------------------------------------------");
let city = ["Mumbai", "Jaipur", "Noida"];
let [mycity1, mycity2]= city; // Even though the original we have 3 value inside the array and here we fetch only two it will not show any error
console.log(mycity1);
console.log(mycity2);
console.log("--------------------------------------------");

let x=["221", "345"];
let [num1,num2,num3] = x;
console.log(num1); // 221
console.log(num2); // 345
console.log(num3);  // undefined
console.log("--------------------------------------------");

const brand = ["boat", "Noise", "Panasonic", "Hitachi"];
// suppose we want to skip the value noise then we need to put two comma , , //
let[brand1, , brand2] = brand;
console.log("value of brand1 is", brand1);
console.log("value of brand2 is", brand2);

// suppose we want to store last two value new array
let newbrand = brand.slice(2);
console.log(newbrand);
// OR
let[, , ...newbrand1] = brand;
console.log(newbrand1);



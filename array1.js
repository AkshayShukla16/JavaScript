// Arrays are mutable and its type is reference i.e object hai 

let fruits= ["Mangoes", "Apple", "Banana"];
console.log(typeof fruits); // output--> object

let fxn=  {}; // object literals
console.log(typeof fxn); // output--> object

// since both are object type but how weknow that which one is array, therefore we use Array function
console.log(Array.isArray(fruits)); // true as it is array
console.log(Array.isArray(fxn)); // false as it is object literals

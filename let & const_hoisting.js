// The var declarations are hoisted and initialized with undefined.
// The formal function declarations are hoisted and initialized with their function reference.
// let and const variables are hoisted too but they cannot be accessed before their declarations. This is called Temporal Dead Zone.

console.log(result);     // Uncaught ReferenceError: Cannot access 'result' before initialization 
let result= "hello world";    // OR const result= "hello world";
console.log(result);
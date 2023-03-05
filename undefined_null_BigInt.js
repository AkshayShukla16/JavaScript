// undefined data type
let subject; 
console.log(typeof subject); // output --> undefined

// but if we use const then it will show an error //

// null data type
let time= null;
console.log(typeof time); // output --> object [actually it is a bug in javascript] //

// BigInt data type (primitive) 
// BigInt is a built-in object in JavaScript that provides a way to represent whole numbers larger than 253-1. The largest number that JavaScript can reliably represent with the Number primitive is 2^(53)-1, which is represented by the MAX_SAFE_INTEGER constant.

let num= 22;
console.log(Number.MAX_SAFE_INTEGER); // Number.MAX_SAFE_INTEGER= 2^(53)-1= 9007199254740991

let num1 = BigInt(70015684655189651845142584614515);
let num2= 123n; // n represent BigInt //
console.log(num1+ num2);

 
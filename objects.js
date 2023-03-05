// A JavaScript object is a collection of named values
// JavaScript objects can also contain many values.
// Objects are variables too. But objects can contain many values.
// Object values are written as name : value pairs (name and value separated by a colon).
// object do not have index as like in array

const person = {name: "Akshay", age:21, eyecolor: "Brown"};
console.log(person);

// Accessing data from object
console.log(person.age);
console.log(person.name);
console.log("---------------------------------");

const fruits={
    name: "Mango",
    color: ["Red", "Yellow", "Pink"],   // here we have taken array as input to attribute color
    region: ["Mumbai", "Yavatmal"]
}
console.log(fruits);
console.log(fruits.region);
console.log(fruits.color);

// if we want to add new attribute(key) externally then 
fruits.price = "200";
console.log(fruits);
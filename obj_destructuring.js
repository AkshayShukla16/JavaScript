// object destructuring

const brand ={
    name: "TATA",
    owner: "Shri Ratan tata",
    country: "India",
    famous: "TCS"
}

// Normal method 
let input1 = brand.name;
console.log(input1);  // output --> TATA
console.log("----------------------------------------------")
// Object destructuring method
const {name, owner, famous} = brand;  // here the name(attribute) should match with original one.
console.log(name);
console.log(owner);
console.log(famous);
console.log("----------------------------------------------");

// Suppose we want to store new attribute value then 
const {name:var1, owner:var2, country:var3} = brand;
console.log(var1);
console.log(var2);
console.log(var3);
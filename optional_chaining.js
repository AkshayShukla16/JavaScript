// The optional chaining ‘?.’ is an error-proof way to access nested object properties, even if an intermediate property doesn’t exist. 
// 

const person= {
    pname: "Akshay",
    address: {houseno: 22, street: "xyz"}
}

console.log(person);
console.log(person.pname); // Akshay
console.log(person.address); // {houseno: 22, street: 'xyz'}
console.log(person.address.houseno)  // 22
console.log("--------------------");

// Suppose address nahi likha hota then it gives undefined (not an error)

const person1= {
    pname: "Aman",
   // address1: {houseno: 20}
}
console.log(person.address1);  // undefined

// console.log(person.address1.houseno);  //Uncaught TypeError: Cannot read properties of undefined (reading 'houseno')
// the above will give the error as houseno can not able to find
// sometime it happens that later add the things which required like houseno in  address as a result we dont want error we want only undefined
// so to do this we use optional chaining
console.log("--------------------");

console.log(person1?.pname);  // Aman
console.log(person1?.address1);   // undefined
console.log(person1?.address1?.houseno);  // undefined // here it is not throwing error

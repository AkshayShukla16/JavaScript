// The __proto__ property of Object.prototype is an accessor property (a getter function and a setter function) that exposes the internal [[Prototype]] (either an object or null) of the object through which it is accessed.
// __proto__ and [[prototype]] are the same 

const user1= {
    name: "ram",
    id: 1,
    address: "vsvmfv"
}

const user3= Object.create(user1);
user3.name= "aman";
user3.id= 9;
console.log(user3);
console.log(user3.address); //vsvmfv

console.log(user3.__proto__) // {name: 'ram', id: 1, address: 'vsvmfv'} i.e user1 hai

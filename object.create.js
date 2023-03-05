

const user1= {
    name: "ram",
    id: 1,
    address: "vsvmfv"
}

const user2= {
    name: "shyam",
    id: 7
}

console.log(user2.address);  // undefined // as address key is not present in user2

const user3= Object.create(user1);
user3.name= "aman";
user3.id= 9;
console.log(user3);
console.log(user3.address); //vsvmfv
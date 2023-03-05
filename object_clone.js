

const obj1 = {
    sname: "gagan",
    id: 45
}
const obj2= obj1;
obj1.class= "ssc";  // added key value pair
console.log(obj2);  // obj2 will also get it which is added to obj1

console.log("----------------------");

const obj3= {
    div: "A",
    payscale: 2000
}
const obj4= {...obj3}
obj3.id= 3;
console.log(obj3)
console.log(obj4)
console.log("----------------------");

// we can also use Object.assign method(new method)

const person= {
    pname: "Ashish",
    id: 87
}
const customer= Object.assign({}, person);
person.sal= 450000;
console.log(person);
console.log(customer);



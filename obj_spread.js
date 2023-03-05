
/* const fruits = ["Mango", "Apple", "Orange" , "Banana"];
const car = ["BMW", "Lambo"]
console.log(fruits);

const fruits1 = [...fruits , ...car,  89];
console.log(fruits1);  */ 

const fruits1 ={
    name: "Apple",
    color: "Red",
    Price: 300,
    name: "Mango"  // No two attribute is same in object, agar hua to jo last wala rahega vo print ho jayega, here name: "Mango" aayega not apple 
};
console.log(fruits1);
console.log("---------------------------------------------");


const fruits ={
    name: "Mango",
    color: "Yellow",
    Price: 345
};

const car= {
    name: "Mahindra", 
    Color: "blue",
    type: "Thar"
};

const obj= {...fruits, ...car}; // as name attribute is commomn in both so in obj we have last clone the car so the name: "Mahindra" aayega na ki "Mango"
console.log(obj);
console.log("---------------------------------------------");

console.log(..."abcd"); // it will give separate result as a  b  c  d
console.log(...["abcd"]); // it gives answer as single result abcd
console.log("---------------------------------------------");

const alphabet = {..."abcdefghijklmnopqrstuvwxyz"};  // it will give the result along with index value like 0= a, 1=b etc..

console.log(alphabet);

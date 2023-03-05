// The every() method executes a function for each array element.
// The every() method returns true if the function returns true for all elements.
// The every() method returns false if the function returns false for one element.

const num= [2,4,6,8,9];
const value= num.every((number)=>{
    return number%2===0;
});
console.log(value);  // false
console.log("-----------------------");

const product= [
    {id:1, pname: "mobile", price: 22000},
    {id:2, pname: "cover", price: 100},
    {id:3, pname: "tv", price: 29000}
];

const result= product.every((item)=>{
    return item.price< 30000;
});
console.log(result);
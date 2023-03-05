// The sort() sorts the elements of an array.
// The sort() overwrites the original array.
// The sort() sorts the elements as strings in alphabetical and ascending order.

const number= [4,2,7,40,76,1];
number.sort();
console.log(number);
// output :  [1, 2, 4, 40, 7, 76]  not properly sorted
// actually in sort() in javascript treat everything as a string then compare to its ASCII value
// [52,50,55,52, 55, 49] --->  [4,2,7,40,76,1]  for this 4 and 40 have same ascii value

// but it properly work for alphabetical order and places capital letter first then small letters
// uses the same concept of ASCII Code
const product= ["Car", "shampoo", "key","Toy"];
product.sort();
console.log(product);  // ['Car', 'Toy', 'key', 'shampoo'] <---- same manners like dictionary

console.log("-----------------------");

const num= [1,5,3,89,4];
num.sort((a,b)=>{
    console.log(a,b);
    return a-b;   // for descending b-a;   
});
console.log(num);  // [1, 3, 4, 5, 89]


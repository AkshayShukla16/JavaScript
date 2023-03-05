// different array methods are:
// 1) forEach 2) map 3) filter 4) reduce


// traditonal or normal method
/*
const arr= [3,4,5,6];

function fun1(number, index){
      console.log(`index is ${index} and ${number}*2 is ${number*2}`);
}
for(let i=0; i<arr.length; i++){
    fun1(arr[i], i);
}
*/

// now we use forEach method
// The forEach() method calls a function for each element in an array.
const arr= [3,4,5,6];

function fun1(number, index){
      console.log(`index is ${index} and ${number}*2 is ${number*2}`);
}
arr.forEach(fun1)
console.log(("--------------------------------"))

// example

const user= [
    {firstname: "Akshay", age: 22},
    {firstname: "Aman", age: 20},
    {firstname: "Akash", age: 21},
    {firstname: "Ashish", age: 26},
  ];
  
  function details(a){
    console.log(a.firstname)
  }
  user.forEach(details)


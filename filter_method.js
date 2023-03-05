// filter method return array which you want to filter
// The filter() method creates a new array filled with elements that pass a test provided by a function.

const num1= [1,2,3,4,5];

function IsEven(number){
  return number%2===0;
}

const m= num1.filter(IsEven);
console.log(m)
console.log("----------------------------")

const num2= [1,2,3,4,5];

function IsEven1(number1){
  return number1%2===0;
}

const m1= num2.map(IsEven1);
console.log(m1);
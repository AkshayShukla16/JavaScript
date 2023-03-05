// map method work same as the forEach method but it return value in array.
// so it is important that inside function we use return instead of console.log


const num1= [1,2,3,4,5];

function square(num){
  return(num*num)
}

const m1= num1.map(square)
console.log(m1)
console.log("---------------");

const mynum= [3,1,5,8];
const value= mynum.map(function(num){
    return (num*num*num)
});

console.log(value);
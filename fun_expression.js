// function expression
//Function Expression allows us to create an anonymous function which doesn't have any function name which is the main difference between Function Expression and Function Declaration. A function expression can be used as an IIFE (Immediately Invoked Function Expression)which runs as soon as it is defined.

const sum = function(num1, num2){
         return (num1+num2);
}
console.log(sum(3,4))
console.log("--------------------------------------");

const Iseven = function(num){
    return num%2===0;
}
console.log(Iseven(7))
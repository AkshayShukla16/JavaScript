// hoisting
// hoisting works only for function declartion not for expression and arrow function
// hoistion is actually calling the function before the code of declaration function start
//Hoisting is JS's default behavior of defining all the declarations at the top of the scope before code execution. One of the benefits of hoisting is that it enables us to call functions before they appear in the code.

show()     // here show() function called before the function declaration code and it will work fine.
function show(){
    console.log("My name is Akshay Shukla");
}

console.log("---------------------------------------");

console.log(print());    //  Uncaught ReferenceError: Cannot access 'print' before initialization
const print = function(){
    console.log("hello world !")
}
console.log("---------------------------------------");

console.log(drop());    //  Uncaught ReferenceError: Cannot access 'drop' before initialization
const drop = () => {
    console.log("hello duniya !")
}
// block scope and function scope
// let and const comes under block scope
// var comes under function scope

/* 
{
    let x= 7;
}
console.log(x)    here we will get an error as console.log(x) is present outside the block where x is defined
*/ 


{
    var input = "Akshay";   // var comes under functional scope thus if console.log(input) declare outside the block it will able to give answer
}
console.log(input);
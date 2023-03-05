
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
//In other words, a closure gives you access to an outer function's scope from an inner function.

function printName(firstName, lastName){

    function innerFunction(){
        console.log(firstName, lastName);
    }

    return innerFunction;  
}

const ans = printName("Akshay", "Shukla");
console.log(ans);
 ans();
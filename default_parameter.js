
function add(a,b){
    return a+b;
}
console.log(add(3,6)); // 9

function addtwonum(a,b){
    return a+b;
}
console.log(addtwonum(4)); // Result--> NaN As 4+undefined = NaN

// As like above suppose we want to pass only one parameter and it should give proper result then

// method (most usable)
function jodo(a,b=0){
    return a+b;
}
console.log(jodo(9));  // 9 , when no b value is given then it by default take zero as set by.
console.log(jodo(9,1)); // result--> 10 ,If we pass both value of a,b then it will take it and give result whether b=0 or not//
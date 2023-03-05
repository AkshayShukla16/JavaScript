// Rest parameter is an improved way to handle function parameter, allowing us to more easily handle various input as parameters in a function.
// With the help of a rest parameter a function can be called with any number of arguments, no matter how it was defined.

function fun(a,b,...c){
      console.log(`a is ${a}`); //1
      console.log(`b is ${b}`); // 2
      console.log(`c is `, c); // [3,4,5]
}
fun(1,2,3,4,5)

function addall(...number){
    let total=0;
    for(let num of number){
        total = total+num;
    }
    return total;
}
const result= addall(1,2,3,4,5);
console.log(result);
// Arrow function 
// three type for writng the function: 1) function declaration  2) function expression  3) Arrow function

const addnum = (num1,num2,num3) => {
    return(num1+num2+num3);
}
console.log(addnum(2,6,2));
console.log("----------------------------------------");

const Iseven = (num) =>{
    return num%2===0;
}
console.log(Iseven(5))
console.log("---------------------------------------");

let age= 19;
const voting = (age> 20 )? 
 () => console.log("You can vote now"):
 () => console.log("You cannot vote");

 voting();


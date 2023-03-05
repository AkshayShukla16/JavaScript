// reusable function
// function declaration

function subtract_number(num1, num2){     // here num1 and num2 are parameters
            return (num1-num2);
}

console.log(subtract_number(5,9))   // here 5,9 is your argument
const result = subtract_number(10,4);   // note: jitne parameter rahenge utna argument pass karo varna undefined aayega answer me.
console.log(result);
console.log("-------------------------------------------");

function evenORodd(num){
    if(num % 2===0){
        return true;
    }
    return false;
}
console.log(evenORodd(66));
console.log("-------------------------------------------");

function str(string){
    p1= string.slice(0,1);  // we can directlt use return string[0];
    return p1;
}
console.log(str("Akshay"));
console.log("-------------------------------------------");

function index(array, target){
    let i=0;
    for(i=0; i<array.length; i++){
        if(array[i]=== target){
            console.log(i);     // ye hame jitni baar repeate ho raha hai sabhi ka index dega but if we use return i; then ek hi index deke stop ho jayega. 
            
        }
        
    }
    return -1;

}
console.log(index([1,3,2,1,3,4], 3));
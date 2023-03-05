// falsy value means else block is executed 

// false, null, undefined, "", 0 ---> gives falsy value

let str= "";
if(str){
    console.log(str);
}
else{
    console.log("empty string gives falsy value");
}

let num= null;
if(num){
    console.log(num);
}
else{
    console.log("null gives falsy value");
}

let num1
if(num){
    console.log(num);
}
else{
    console.log("undefined gives falsy value");
}

function value(x){
    const a= "scan1";
    const b= "scan2";

    return function(){
        console.log(a,b,x)
        }
}

const msg= value("Hello world");
console.log(msg);
msg();

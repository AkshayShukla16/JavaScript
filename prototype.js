// In JavaScript, function===> function + object  hum  treat kar sakte hai


function user(){
    console.log("hi, how are u?");
}

console.log(user.name); // it will provide the name of function i.e. user
// we can also add our property to function like the way which we add key in object

user.myproperty= "akshay";  // user ek fxn hai hamne usme apna myproperty as a property set kiya hai
console.log(user.myproperty);

console.log(user.prototype);  // {} i,e empty space (object) // prototype is property of function only provided by javascript 

// prototype is only included in function not in any other things

if(user.prototype){
    console.log("Prototype is present")
}else{
    console.log("Prototype is not present")
}

const person= { key1: "xys"}

if(person.prototype){
    console.log("Prototype is present")
}else{
    console.log("Prototype is not present")
}

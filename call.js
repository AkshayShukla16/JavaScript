// call() work same as we initially call the fxn.
// With the call() method, you can write a method that can be used on different objects. 

// call, apply, bind

function info(){
    console.log("Hi, how are you?");
}

info();
info.call();  // gives same result
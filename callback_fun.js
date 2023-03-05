//A callback is a function passed as an argument to another function
//This technique allows a function to call another function
//A callback function can run after another function has finished


function details(){
    console.log("my name is Akshay");
}

function student(callback){
    console.log("Students details");
    callback();
}

student(details);
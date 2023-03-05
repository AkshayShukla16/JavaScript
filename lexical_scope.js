// lexical scope
// ex: suppose u want to print some value of variable which is not present in that function then it will check 
// lexical environment ie checks to its parent if not found then parent of parent and so on //

let var2= 100;
function todo(){
    let var1 = "hello world";

    const fun1= function(){
        console.log("my variable value is:", var1);  // here var1 is not present inside the fun function, now it will check to its parent
    }

    const fun2 = () => {
        console.log("My next variable value is:", var2);
    }
    
    console.log("Hi I am doing my work");
    fun1();
    fun2();
}
todo();
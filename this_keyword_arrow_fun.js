// this keyword normally pointing out the object who is calling the function(expression)
// but in case of arrow function calling this keyword changes its behaviour
// this keyword in arrow fun poinout to the this keyword which is one level up to the method(object containin fxn)

const person= {
    pname:  "rocky",
    age: 54,
    info: ()=>{
        console.log(this)  // here this represent whole window object
        console.log(this.pname, this.age);
    }
};

person.info();  // undefined undefined


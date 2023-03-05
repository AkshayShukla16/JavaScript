// With the call() method, you can write a method that can be used on different objects.
// The call() allows for a function/method belonging to one object to be assigned and called for a different object.


const person1= {
    pname: "Akshay",
    age: 21,
    about: function(){
        console.log(this.pname, this.age);
    }
}

person1.about();
console.log("--------------------------");

const person2= {
    pname: "Ram",
    age: 27
}
// now suppose we want to use about which is not present in person2 object but present in person1 method
// from_where_we_want_to_take.about.call(this ki value do, also we can pass argument for function)

person1.about.call(person2);
console.log("--------------------------");

// or directly we can define about fxn outside the object

function info(id, rank){
    console.log(this.sname, this.sage, id, rank);
};

const student1={
    sname: "Mahesh",
    sage: 45
};

const student2={
    sname: "Rakesh",
    sage: 32
};

info.call(student1, 345, 76); // student1---> this keyword hai // 345,76 are id and rank


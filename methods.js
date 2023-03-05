// methods:- function inside the objects
// this keyword(object) hamesha runtime ke waqt he malum chalata hai i.e this wahi hota hai jo object call kar raha ho fxn ko.

const person= {
    pname: "Akshay",
    age: 25,
    about: function(){
        console.log(`hi my name is ${this.pname} and my age is ${this.age}`); // here this keyword is important if we change the pname it will take it and reflect it in result
        // suppose if we don't use it then we canot able to get pname when we change the pname in future.
        // here this refer the person object i.e who is calling the function [person.about()], this= person hai

        console.log(this)  // this= person hai
    }
}

console.log(person.about);
person.about();
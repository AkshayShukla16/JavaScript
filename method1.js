

function Info(){
    console.log(`hi my name is ${this.pname} and my age is ${this.age}`);
}

const person1= {
    pname: "Akshay",
    age: 25,
    about: Info
}

const person2= {
    pname: "Aman",
    age: 20,
    about: Info
}

const person3= {
    pname: "Ashish",
    age: 27,
    about: Info
}

Info();  // hi my name is undefined and my age is undefined
console.log("--------------------------");

person3.about();  // about ko person3 call kar raha hai now this= person3, so ab vo pname and age person3 ka lega
console.log("--------------------------");

person2.about();
console.log("--------------------------");

person1.about();

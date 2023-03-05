// parameter destructuring
// Destructuring in JavaScript is used to unpack or segregate values from arrays or properties from object literals into distinct variables, thus it allows us to access only the values required. 

const person= {
    firstname: "Akshay",
    age:20
}

function details(obj){
    console.log(obj.firstname)
    console.log(obj.age)
    console.log(obj.height); // gives undefined
}
details(person);
console.log("---------------------------------");


const car={
    owner: "Aman",
    color: "black",
    price: 223445
}

function about({color, price}){
    console.log(color);
    console.log(price)
      
}
about(car);
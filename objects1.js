// in object we can access attribute, add attribute externally by using dot i.e (.) 
// here we can do it by brackets [] and passing attribute inside it 

const car= {
    name: "Mahindra",
    type: "SUV",
    Price: "30lakh"
}

console.log(car["type"]); // here we remember that the attribute which we are passing is in ""
car["color"]= "blue";
console.log(car);
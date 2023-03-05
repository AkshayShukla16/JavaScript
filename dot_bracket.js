
let id = "email";
const person ={
    name: "Aman",
    age: 22,
    "person hobbies" : "Playing cricket"  // person hobbies we cannot set this as attribute because it conatin the space between them
}
console.log(" Hobbies is", person["person hobbies"]); // person.person hobbies or person[person hobbies] --> both will give an error

person[id]= "abcd@gmail.com"; // here we haven't taken "id" because in result we get id as attribut not email so for getting email as attriute we should take [id] only
console.log(person);


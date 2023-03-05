// Map is a collection of elements where each element is stored as a Key, value pair. Map object can hold both objects and primitive values as either key or value. When we iterate over the map object it returns the key, value pair in the same order as inserted.

const person1= {
    name: "Akshay",
    id: 23
}

const extraInfo = new Map();
extraInfo.set(person1,{age: 22, sal:200000});
console.log(extraInfo); 

console.log(extraInfo.get(person1));
console.log(extraInfo.get(person1).age);  //22
                        
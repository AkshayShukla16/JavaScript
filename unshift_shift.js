// unshift() -> works same as push() but it will add the item to starting index

let fruits= ["Apple", "Banana", "Mango"];
console.log(fruits);

fruits.unshift("Grapes", "Orange");
fruits.unshift("Pineaple" ); // Items added at starting index as array are mutable
console.log(fruits);

//shift()--> works same as pop() but it remove item from starting index

let place= ["Mumbai", "Pune", "Noida", "Bangalore"];
console.log(place);

place.shift();
console.log(place);
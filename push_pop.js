// push() ---> to add more items into array at last position

let fruits= ["Apple", "Banana", "Mango"];
console.log(fruits);

fruits.push("Grapes", "Orange");  // Items added as array are mutable
console.log(fruits);

// pop --> it will remove the item from array but removal done through last items and pop function provide the feature to user to do anything with popped item//

let place= ["Mumbai", "Pune", "Noida", "Bangalore"];
console.log(place);

 // place.pop() --> bangalore removed from the array
let poppedItem= place.pop(); // popped item storing in poppedItem variable
console.log(place); // ['Mumbai', 'Pune', 'Noida']
console.log(poppedItem); // Bangalore


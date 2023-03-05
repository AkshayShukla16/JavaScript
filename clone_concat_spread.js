// clone, concate, spread In array

let brand1= ["Tata", "Reliance", "Adani", "Boat"];
let brand2 = brand1.slice(0);  // cloning 
console.log(brand1); // Output -> ['Tata', 'Reliance', 'Adani', 'Boat']
console.log(brand2); // Output -> ['Tata', 'Reliance', 'Adani', 'Boat']

let car1 =["Thar", "BMW", "Nexon", "Swift"];
let car2 = [].concat(car1);
console.log(car1); // output --> ['Thar', 'BMW', 'Nexon', 'Swift']
console.log(car2); // output --> ['Thar', 'BMW', 'Nexon', 'Swift']

let buc1 = ["Shirts", "T-shirts", "Pants"];
let buc2 = [...buc1];  // spread operator
console.log(buc1); // output --> ['Shirts', 'T-shirts', 'Pants']
console.log(buc2); // output --> ['Shirts', 'T-shirts', 'Pants']
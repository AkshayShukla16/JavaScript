// Array Concept --> order collection of items

let car= ["nexon","thar","maruti","bmw"];
console.log(car);

let num = ["apple",1,null,45,6,undefined,9.9]; // it can store any data type
console.log(num[2]);

let students= ["akshay","aman","ashish","ram"];
console.log(students);

students[1]= "Adarsh";  // Arrays are mutable ie their value can change 
console.log(students);

// strings are immutable
let emp= "Columbus"; 
console.log(emp); // output --> Columbus

emp[2]= "w";
console.log(emp);  // output --> Columbus  here we can see that no changes occurs even if we chane the index value in string

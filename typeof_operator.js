
// typeof operator help us to find the data type of variable

let salary= 14000;
let person= "Akshay";

console.log(typeof salary);  // output --> number
console.log(typeof person);  // output --> string

console.log(typeof 7);  // output --> number


// convert number to string
// 44 (number)--> "44" (string)
let age=40;
console.log(typeof age);  // output --> number

age= age + "";
console.log(typeof age); // output --> string (here we have changed the data type from number to string just by adding an empty string)

// convert string to number

let str= "10";
console.log(typeof str); // output --> string

str= + "10";
console.log(typeof str); // output --> number (here we have changed the data type from string to number just by adding + sign at prefix of string)


// -- New method for conversion -- //

// convert number to string

let date= 24;
console.log(typeof date); // output --> number

date= toString(date); // here we can also use only String() instead of toString() //
console.log(typeof date); // output --> string

// convert string to number

let mystr= "45";
console.log(typeof mystr); // output --> string

mystr= Number(mystr); // here we can also use parseint() instead of Number() //
console.log(typeof mystr); // output --> number


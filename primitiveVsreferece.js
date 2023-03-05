// primitive data types  ex: numbers, strings, booleans, null, and undefined.

let num1 = 40;
let num2 = num1;
console.log("Value of num1 is", num1); //40
console.log("Value of num2 is", num2); //40

num1++;
console.log("After adding value to num1");
console.log("Value of num1 is", num1); //41
console.log("Value of num2 is", num2); // 40 <-- here you can see that

// reference data types  ex: array, functions, collections

let day1= ["Monday", "Tuesday", "Wednesday"];
let day2 = day1;
console.log(day1);
console.log(day2);

day1.push("Thursday");
console.log("After pushing Wednesday as day item to day1 array")
console.log(day1);
console.log(day2);

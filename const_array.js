// we mostly preferred const variable use in array over let variable

/*
let num1 = 5;
num1 =10
console.log(num1)  here we can able to change the num1 value as we have used let keyword */

/* const num= 7;
num= 23;
console.log(num);   here we get error as we cannot change num value :-  Uncaught TypeError: Assignment to constant variable */

const comp= ["Dell", "lenovo"];
/* comp = ["Asus", "HP"]; //here we get an error as we changind value using const   ---- Uncaught TypeError: Assignment to constant variable
console.log(comp) */

comp.push("Asus", "HP"); // no error as we are adding not forcefully changing the array value //
console.log(comp);  // output--> ['Dell', 'lenovo', 'Asus', 'HP']
// while loop implementation

let i=0;

while(i<10){
    console.log(i);
   i++; 
}

console.log(`Current i value is ${i}`); // `` backtick present above your tab button

// example-2 (print sum of n natural number)

let num= +prompt("Enter number");
let j=0;
let total=0;
while(j<=num){
    total= total+j;
    j++;
}

console.log(`total answer is ${total}`);
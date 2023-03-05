// guessing game using nested if else

let winNumber= 28;
let userGuess = parseInt(prompt("Enter two digit number")) // prompt we use to get the input from user. prompt always take is as string data type thats why we use parseInt or +, number

if(userGuess=== winNumber){
    alert("Hurray! you guessed the right number!!");
}
else{
    if(userGuess<28){
        alert("too low number");
    }
    else{
        alert("too large number");
    }
}

console.log(typeof userGuess, userGuess);
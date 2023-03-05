// iterable vo hote hai jinme for of loop successfully execute ho jaye
// ex: array, string

const str= "akshay";
for(let i of str){
    console.log(i);
}
console.log("----------------------------");

/* objects are not iterable
const user= {fname: 'aman', id:34};
for(let j of user){
    console.log(j);  // Uncaught TypeError: user is not iterable
}
console.log("----------------------------");*/


// array like object
// jinke paas length hota hai
// and jinko hum index se access kar sakte hai
// ex: string

const info= "information";
console.log(info.length);
console.log(info[3]);

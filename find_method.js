

const string= ["boy","doggy","aeroplane","mango","Aam"];
const Islength3= (str)=>{
    return str.length===3;
}
const result= string.find(Islength3);
console.log(result);   // it will only give the boy as it search for 1st occurence only, jo bhi hame pahele milega wahi print hoga bas.

console.log("------------------------------------");

const arr= [
    {color: "black", age: 22},
    {color: "blue", age: 20},
    {color: "yellow", age: 10},
    {color: "red", age: 29}
];

const value= arr.find((obj)=>{
    return obj.color.length===3;
});
console.log(value);
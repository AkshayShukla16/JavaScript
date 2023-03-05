

const list= [
    { id:1, name: "Mobile", price: 12000},
    { id:2, name: "tv", price: 15000},
    { id:3, name: "laptop", price: 22000}
];

const my= list.reduce((accumulator, currentValue)=>{
    return accumulator+ currentValue.price;
}, 0);

console.log(my);

const com= ["L&T", "Infosys", "TCS", "Meesho", "Flipkart"];
const newcom= [];

for(let index in com){
    // console.log(index);  // for in loop ---> represent or always give index value
   newcom.push(com[index].toUpperCase());
}
console.log(newcom);
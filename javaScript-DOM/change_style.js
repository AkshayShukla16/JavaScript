
const myheading= document.querySelector("div.headline h2");
console.log(myheading);
console.log(myheading.style);
console.log("------------------------");


myheading.style.color= "blue";
// myheading.style.background-color= "red"; this will give me error kyuki aisa hum css me karte hai 
// css me jaha bhi - (dash)(background-color) wali property aayegi waha hame Capital letters use karane honge
myheading.style.backgroundColor= "red";  // background-color ----> backgroundColor  [C becomes Capital letter]
myheading.style.border= " 5px solid yellow";

const section= document.querySelector(".section-todo h2");
console.log(section)
console.log(section.textContent)
section.style.color="red";

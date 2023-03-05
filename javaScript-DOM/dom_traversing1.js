
const heading= document.querySelector("h1");
console.log(heading);
console.log(heading.parentNode)

const p1= (heading.parentNode);
p1.style.backgroundColor= "#333";
p1.style.color= "yellow";

const p11= (heading.parentNode.parentNode);
console.log(p11);
p11.style.backgroundColor= "#223";
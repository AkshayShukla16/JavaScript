// if we want to change the text in html using javascript

const Heading= document.getElementById("main-heading");  // heading---> object hai

console.log(Heading.innerText);
console.log("------------------------");

 
console.log(Heading.textContent); // Manage Your Task Hello
console.log("------------------------");

Heading.textContent= "This Is Something else";
console.log(Heading.textContent);



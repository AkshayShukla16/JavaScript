

const value= document.querySelector("a");
console.log(value);

console.log(value.getAttribute("href"));
console.log(value.getAttribute("href").slice(1));
// if we want to change the href attribute value then we use setAttribute

value.setAttribute("href", "https://google.com");
console.log(value.getAttribute("href"));
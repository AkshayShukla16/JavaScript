
const head= document.querySelector("head");
console.log(head)
console.log("---------------------");

const title= head.querySelector("title");  // hum element pe directly child search kar sakte hai
console.log(title);
console.log(title.childNodes);
console.log("---------------------");

const container= document.querySelector(".container");
console.log(container);
console.log(container.childNodes);
console.log(container.children);

// dom_traversing, dom_traversing1, dom_traversing2  uses index1.html bas yahi 3 use kiya baki sab index.html(dom folder)

const sectionTodo= document.querySelector(".section-todo");
console.log(sectionTodo);
console.log(sectionTodo.classList); // DOMTokenList(2) ['section-todo', 'container', value: 'section-todo container']

// if we want to add any class then

sectionTodo.classList.add("bg-color");
console.log(sectionTodo.classList) 
console.log("--------------------------");

// suppose we want to remove the bg-color class then

sectionTodo.classList.remove("bg-color");
console.log(sectionTodo.classList);
console.log("--------------------------");

// if we want to check whether the class exist or not in given element then
const ans= sectionTodo.classList.contains("bg-color");
console.log(ans);  // false
console.log("--------------------------");

// agar koi class nahi hai use add karna ho ya phir jo hai use delete karna ho then
sectionTodo.classList.toggle("bg-color"); // pehele nahi tha ab add kar dega
console.log(sectionTodo.classList);
sectionTodo.classList.toggle("bg-color"); // ab ise remove kar dega
console.log(sectionTodo.classList);
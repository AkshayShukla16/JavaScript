

const newTodolist = document.createElement("li");
newTodolist.textContent= "Teach me";
const todolist= document.querySelector(".todo-list");
todolist.append(newTodolist);  // ye last me add karega
//todolist.prepend(newTodolist); // ye usake pahele add karega
console.log(todolist);

// if we want to remove the element then we use remove()

const mytodo= document.querySelector(".todo-list li");
mytodo.remove();
console.log(mytodo);
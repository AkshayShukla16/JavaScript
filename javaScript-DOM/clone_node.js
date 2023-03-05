

const ul= document.querySelector(".todo-list");
console.log(ul)

const newli= document.createElement("li");
newli.textContent= "new todo"
const newli1= newli.cloneNode(true);
ul.append(newli); // at a time ya to ye append hoga ya toh ye prepend hoga, if we want both then use clone [see above]
ul.prepend(newli1);
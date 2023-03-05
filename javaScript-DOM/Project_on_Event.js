
const formTodo= document.querySelector(".form-todo");
const todoInput= document.querySelector(".form-todo input[type='text']");
const newTodoList= document.querySelector(".todo-list");


formTodo.addEventListener("submit", (e)=>{  // submit isliye likha kyuki todo button ka type="submit" hai aur wahi rahena bhi chahiye
    e.preventDefault();  // ise use karo taki hamara page baar baar refresh  na ho jaye
    console.log(todoInput.value);  // jo hum input karenge vahi value console me print karegi
    const newTodoText= todoInput.value;
    const newli= document.createElement("li");
    
    const newItem= `<span class="text">${newTodoText}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`
    newli.innerHTML= newItem;
    newTodoList.append(newli);
    todoInput.value= ""; // then vo text box jo hai clear karne ke lliye

});

newTodoList.addEventListener("click", (e)=>{
    // check if user clicked on button 
    console.log(e.target.classList);
    if(e.target.classList.contains("remove")){
        console.log("Yo rem")
    const targetedli= e.target.parentNode.parentNode;
    targetedli.remove();
    }

    if(e.target.classList.contains("done")){
        console.log("Yo done")
    const TextSpan= e.target.parentNode.previousElementSibling;
    TextSpan.style.textDecoration= "line-through";
    }
})
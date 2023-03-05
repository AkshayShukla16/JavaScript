

const valueBtn= document.querySelectorAll(".myButton button");
console.log(valueBtn);

for(let i of valueBtn){
    
    i.addEventListener("click", function(){
       
        console.log(i.textContent)


    })
}
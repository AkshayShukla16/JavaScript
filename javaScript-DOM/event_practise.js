
const mybutton= document.querySelectorAll(".myButton button");

for(let i of mybutton){   // we can also use forEach method, normal for loop etc..
    i.addEventListener("click", function(e){
        console.log(e.target);
        e.target.style.backgroundColor="yellow";
        e.target.style.color= "red";
       
    })
}
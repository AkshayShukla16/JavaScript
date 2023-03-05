
const bd= document.body;
bd.addEventListener("keypress", (e)=> {
    console.log(e.key)
});

const btn= document.querySelectorAll(".myButton button");
console.log(btn);

for(let i of btn){
    i.addEventListener("mouseover",()=>{   // ek mouseleave bhi hai jisme hum agar apna mouse button se hatayenge to vo print karega
        console.log("mouseover event occurred !!")
    })
}
   

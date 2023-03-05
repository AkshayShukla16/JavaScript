
const mybtn =document.querySelector(".btn-headline");

mybtn.addEventListener("click", ()=>{
    console.log("Value of this is: ",this); // As we used the Arrow function therefore this--> window hai
});

const doneBtn= document.querySelector(".done");
doneBtn.addEventListener("click", function(){
    console.log("Value of this is: ",this);  // here we uses Anonymous fxn as a result this--> btn
    
});

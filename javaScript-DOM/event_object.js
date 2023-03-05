// event object
// js engine--> line by line code execute karega
// browser---> js engine + extra feature (web API) hai
// jab bhi browser ko pata chala ki user ne event perform kiya hai then it does 2 things
// 1) Vo callback function ko js engine ko de degi
// 2) Jo bhi event perform hua hai browser uski information batayega

const firstButton= document.querySelectorAll(".myButton button");
for(let i of firstButton){
    i.addEventListener("click", function(event){
        console.log(event);   //e(kuch bhi likh sakate ho yaha pe sab result same hi denge)--> event (event object print ho jayega)
        console.log(event.target) 
})};



// pointer event aayega uper se
// isme 2 imp property hai 
// i) target:  kis element ne event ko triggered kiya
// ii) currentTarget: kis element pe humne event listener attach kiya hai


const heading1= document.querySelector(".heading1");
const heading2= document.querySelector(".heading2");
const heading3= document.querySelector(".heading3");
const heading4= document.querySelector(".heading4");
const heading5= document.querySelector(".heading5");
const heading6= document.querySelector(".heading6");

function myPromise(element, text, color,timeout){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(element){
            element.textContent= text;
            element.style.color= color;
            resolve();
         }else{
             reject("Element not found");
         }  
      }, timeout);
    })
};

myPromise(heading1, "one", "red",1000)  // ye return karega ek promise so we use then
.then(
    ()=>{
      return  myPromise(heading2, "two", "yellow",1000);
}).then(
    ()=>{
     return  myPromise(heading3, "three", "blue",1000);
}).then(
    ()=>{
     return  myPromise(heading4, "four", "green",1000);
}).then(
    ()=>{
     return  myPromise(heading5, "five", "purple",1000);
}).then(
    ()=>{
     return  myPromise(heading6, "six", "red",1000);
}).catch((error) => {
    console.log(error);
})




const grandParent= document.querySelector(".grandparent");
const Parent= document.querySelector(".parent");
const Child= document.querySelector(".child");

/* Child.addEventListener("click", ()=>{
    console.log("Captured !!! Child")
}, true);

Parent.addEventListener("click", ()=>{
    console.log("Captured !!! Parent")
},true);*/

grandParent.addEventListener("click", ()=>{
    console.log("Captured !!! grandParent")
},true);

document.body.addEventListener("click", ()=>{
    console.log("Captured !!! body")
},true);

// --------------------------------------//
Child.addEventListener("click", ()=>{
    console.log("You clicked on Child")
});

/* Parent.addEventListener("click", ()=>{
    console.log("You clicked on Parent")
});

grandParent.addEventListener("click", ()=>{
    console.log("You clicked on grandParent")
});*/

document.body.addEventListener("click", ()=>{
    console.log("You clicked on body")
});
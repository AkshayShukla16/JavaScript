
// The change in the state of an object is known as an Event.

const mybtn= document.querySelector(".btn-headline");

mybtn.addEventListener("click", ()=>{   // we can also use function declaration here but we
    console.log("You Clicked me!!")
});

/*
Method-1 

function perform(){
    console.log("You Clicked me!!"
}
mybtn.addEventListener("click", perform())
*/

/*
Method-2

mybtn.addEventListener("click", function(){
    console.log("You Clicked me!!")
})
*/ 
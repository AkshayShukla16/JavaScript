// Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.
const grandParent= document.querySelector(".grandparent");
grandParent.addEventListener("click", (e)=>{
    console.log(e)
    console.log(e.target) // hum jis bhi element pe click kare wahi dega 
})
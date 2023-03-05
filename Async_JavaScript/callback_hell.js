
const heading1= document.querySelector(".heading1");
const heading2= document.querySelector(".heading2");
const heading3= document.querySelector(".heading3");
const heading4= document.querySelector(".heading4");
const heading5= document.querySelector(".heading5");
const heading6= document.querySelector(".heading6");

// callback hell hai
setTimeout(() => {
    heading1.textContent= "Heading1 hai";
    heading1.style.color="red";

    setTimeout(() => {
    heading2.textContent= "Heading2 hai";
    heading2.style.color="blue";

    setTimeout(() => {
    heading3.textContent= "Heading3 hai";
    heading3.style.color="green";
    
    setTimeout(() => {
    heading4.textContent= "Heading4 hai";
    heading4.style.color="purple";

    setTimeout(() => {
    heading5.textContent= "Heading5 hai";
    heading5.style.color="red";

    setTimeout(() => {
    heading6.textContent= "Heading6 hai";
    heading6.style.color="blue";
    }, 4000);
    }, 1000);
    }, 3000);
    }, 2000);
  }, 2000);
}, 1000);

// Now again it is very tedius to do as we are doing nested callback again and again
// it become callback hell

// so the best way to do this job is using promises
// see next file promises3.js.
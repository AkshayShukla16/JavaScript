
const heading1= document.querySelector(".heading1");
const heading2= document.querySelector(".heading2");
const heading3= document.querySelector(".heading3");

setTimeout(() => {
    heading1.textContent= "Heading1 hai";
    heading1.style.color="red";

    setTimeout(() => {
    heading2.textContent= "Heading2 hai";
    heading2.style.color="blue";

    setTimeout(() => {
    heading3.textContent= "Heading3 hai";
    heading3.style.color="green";
    }, 1000);
    }, 1000);
}, 1000);

// Suppose we want that next hello world will change to heading 2 after 2 sec when 1st got changed, as a result hame phir se setTimeout likhna padega with 2000 milli sec
// but agar hame ye sabko change karna hua to, its tedius task
// best method use above one
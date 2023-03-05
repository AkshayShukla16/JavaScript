
// method 2: query selector
// here we can select anything id, class, element or anythings

const mainHeading = document.querySelector("#main-heading");
console.log(mainHeading);

const header= document.querySelector(".header");
console.log(header);

console.log(document.querySelector("div.headline h2"))

const navitems= document.querySelector(".nav-item");  // isme hame bas home dikhega Todo and Sign Up nahi dekhega jo navbar me hai
console.log(navitems); // nav-item class me jo pahele aa jayega bas vahi show hoga

// so sabhi show hone ke liye we use querySelectorAll

const navitems1= document.querySelectorAll(".nav-item"); // ye node list taiyar karega jisme nav-item class ke saare element select ho jayenge
console.log(navitems1);
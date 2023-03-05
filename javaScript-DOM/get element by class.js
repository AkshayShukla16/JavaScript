


const navWala= document.getElementsByClassName("nav-item"); // agar hum getElementbyId karte to pahele html me id hona jaruri hai and agar hua to sabhi select nahi honge
console.log(navWala); // HTMLCollection(3) [li.nav-item, li.nav-item, li.nav-item] // ye hame html collection de raha hai
// i.e it is array like object jiske paas length and index hai

console.log(typeof navWala)
console.log(navWala.length);
console.log(navWala[2]);
console.log("--------------------------");

// we use querySelectorAll

const formGroup= document.querySelectorAll(".nav-item");  
console.log(formGroup); // NodeList(3) [li.nav-item, li.nav-item, li.nav-item] // ye hame NodeList de raha hai
// // i.e it is array like object jiske paas length and index hai
console.log(typeof formGroup);
console.log(Array.isArray(formGroup));
console.log(formGroup[2]);
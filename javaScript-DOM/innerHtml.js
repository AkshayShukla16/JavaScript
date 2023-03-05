
const result= document.querySelector(".headline");
console.log(result);
console.log("-------------------------");

console.log(result.innerHTML);
console.log("-------------------------");

// we can also change the innerHTML

// result.innerHTML += "<h1>Hello Kaise Ho</h1>"; // jab hume purana wala bhi chahiye and add kuch karna ho
result.innerHTML = "<h1>Hello Kaise Ho</h1>"; // jab hame purana innerHTML nahi chaiye and bas yahi chahiye
result.innerHTML += "<button class=\"Click\">Click karo</button>"
console.log(result.innerHTML);
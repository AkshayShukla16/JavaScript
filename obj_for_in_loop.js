
const place ={
    name: "Mumbai",
    state: "Maharashtra",
    Country: "India",
    famous: ["cricket", "jobs", "MCGM", "BEST"]
}

console.log(place);

// for in loop in object give the attribute not value
console.log("--------------------------------");
for(let key in place){
    // console.log(key); name, state, country and famous
    // console.log(place[key]); // it will give the value of every atttribute
    console.log(key, ":", place[key]); // if we use place.key then it will give undefined because key to hai he nahi as attriute in place
    

}

const place ={
    name: "Mumbai",
    state: "Maharashtra",
    Country: "India",
    famous: ["cricket", "jobs", "MCGM", "BEST"]
}
console.log(Object.keys(place)); // Object.keys() return the attribute but in array Format

// we are using it into for_of_loop
for(let print of Object.keys(place)){
    console.log(place[print]);
}
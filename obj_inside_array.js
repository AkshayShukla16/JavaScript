// object inside array

const userinfo =[                            //  creation of an array
    {userId:1, name: "Akshay", Age: 21},   // creation of object inside an array
    {userId:2, name: "Ashish", Age: 25},
    {userId:3, name: "Abhishek", Age: 23},
];

console.log(userinfo);
console.log("----------------------------------------------");

for(let user of userinfo){
    //console.log(user);
    console.log(user.name);
}


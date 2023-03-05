// Nested destructuring

const userinfo =[                            //  creation of an array
    {userId:1, name: "Akshay", Age: 21},   // creation of object inside an array
    {userId:2, name: "Ashish", Age: 25},
    {userId:3, name: "Abhishek", Age: 23},
];

const [user1, user2]= userinfo;
console.log(user1);
console.log(user2.name);
console.log("---------------------------------------------");

const [{userId: ID, name}, , {name:Username}] = userinfo;  // we already seen in object destructuring when we give exct attribute no problem u can fetch the data but if u want to give anothe name then use : 
console.log(ID);
console.log(name);
console.log(Username);

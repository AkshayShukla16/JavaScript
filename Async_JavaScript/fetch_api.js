
const URL= "https://jsonplaceholder.typicode.com/posts";

fetch(URL) // ye hamesha promise return karega agar hum console.log(fetch(URL)) karke dekhe to
.then((a1)=> {  // a1---> response hai 
    if(a1.ok===true){
        return (a1.json());
    }else{
        throw ("Something went Wrong !!")
    }
    
}).then((data)=>{
    console.log(data)
    return (data[3].id);
}).then((value)=>{
    console.log(value);
    const URL1= `${URL}/${value}`;
    return fetch(URL1);
}).then((a2)=>{
    console.log(a2)
    console.log( typeof a2)  //object
    return (a2.json());
}).then((data2)=>{
   console.log(data2)
}).catch((error)=>{  // agar hum else me throw nahi karenge tab ye jo catch hai tab kaam karegaa jab internet nahi hoga // aur agar likha hai to koi baat he nahi hai 
    console.log("Inside catch block")
    console.log(error)
}
);
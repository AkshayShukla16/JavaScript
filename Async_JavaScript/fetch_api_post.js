
const URL= "https://jsonplaceholder.typicode.com/posts";

fetch(URL, {   // ye ek object lega 
    method: 'POST',    // data create karne ke liya ("GET" ---> DATA read karne ke liye tha)
    body: JSON.stringify({   // JSON me convert karne ke liye
           title: 'foo',
           body: 'bar',
           userId: 1,
    }),
    headers: {'Content-type': 'application/json;  charset=UTF-8' }  // charset lagana imp hai
     } 
 )

.then((response)=>{
    if(response.ok){
       return (response.json());
    }else{
        throw ("Something went wrong");
    } 
}).then((a1)=>{
    console.log(a1)
}).catch((error)=>{
    console.log("inside the catch");
    console.log(error);
})

const URL= "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url){
    return new Promise((resolve, reject)=>{
        const xhr= new XMLHttpRequest();
        xhr.open(method, url);

        xhr.onload= ()=>{
            if(xhr.status>= 200 && xhr.status<300){
            resolve(xhr.response)
            
            }else{
                reject("Something Went wrong !");
            }   
        }
        xhr.onerror=()=>{
            console.log("Network problem !!")
        }
       xhr.send();
    })
};

sendRequest("GET", URL)
.then((a1)=>{
    console.log(a1)  // a1----> xhr.response  hai
    const data= JSON.parse(a1)
    // console.log(data)
    return data;
    
}).then((a2) => {  // a2---> data
    console.log(a2[4]);
    console.log(a2[4].id);
    const Id= a2[4].id;
    return Id;
}).then((a3)=> {
    const URL1= `${URL}/${a3}`;
    return sendRequest("GET", URL1)
}).then((newResponse)=>{  // newResponse---> xhr.response of url1 ka
    const data1= JSON.parse(newResponse);
    console.log(data1);
    console.log(typeof data1);
})
.catch(()=>{
    console.log("Nahi hua")
})

// jo hum baar baar then lga rahe ha ise he promise chaining kahete hai

const URL= "https://jsonplaceholder.typicode.com/posts";
const xhr= new XMLHttpRequest();
xhr.open("GET", URL);

xhr.onload= ()=> {
    if(xhr.status >=200 && xhr.status<300){
    const data= JSON.parse(xhr.response);
    console.log(data);
    }else{
        console.log("Something went Wrong!");
    }
}
xhr.onerror= ()=>{   // agar internet nahi connect hai to ye handle karega use
    console.log("Network not connected !!");
}
xhr.send();
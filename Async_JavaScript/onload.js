
const URL= "https://jsonplaceholder.typicode.com/posts";

const xhr= new XMLHttpRequest();
xhr.open("GET", URL);

xhr.onload= function(){  // ye browser tabhi run karega jab readyState===4 hoga
    console.log(xhr.readyState)
    console.log(xhr.response);
    console.log(typeof xhr.response)
    const response= xhr.response;
    const data= JSON.parse(response);
    console.log(data);
    console.log(xhr.status); // 200-299 represent success
}

xhr.send();
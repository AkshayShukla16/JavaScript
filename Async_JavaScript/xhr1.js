
const URL= "https://jsonplaceholder.typicode.com/posts";
const xhr= new XMLHttpRequest();
// console.log(xhr)
console.log(xhr.readyState);

xhr.open("GET", URL);

console.log(xhr.readyState);

xhr.onreadystatechange= function(){
    if(xhr.readyState===4){ 
        console.log(typeof xhr.response);  // string
        console.log(xhr.response);
    }

}
xhr.send();

// Also read the Status code
// https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
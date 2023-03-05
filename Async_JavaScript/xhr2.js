
const URL= "https://jsonplaceholder.typicode.com/posts";
const xhr= new XMLHttpRequest();
// console.log(xhr)
//console.log(xhr.readyState);

xhr.open("GET", URL);

//console.log(xhr.readyState);

xhr.onreadystatechange= function(){  // ye kaam browser dekhta hai kab state change ho raha hai
    if(xhr.readyState===4){   // readyState===4 indicate successfull
       console.log(typeof xhr.response);  // string
       const response= xhr.response;
       const data= JSON.parse(response); // Now it will change data type from string to javascript object
       console.log(data);
       console.log(typeof data);   // object
    }

}
xhr.send();

// kyuki readyState===4 hoga tabhi vo successfull hai and then tabhi hum aage apna kaam karsakte hai
// so upar humne jo likha hai vo right hai but ek aur method hai jo bas sirf readyState===4 par kaam karta hai
// vo hai onload
// see file onload.js
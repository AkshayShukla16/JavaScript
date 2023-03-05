
const URL= "https://jsonplaceholder.typicode.com/posts";

 // const getPosts = async function(){}   OR
async function getPosts(){   // ab ye hamesha ek promise return karega
    const response = await fetch(URL);  // ye tab tak wai karega jab tak resolve nahi ho jata
    
    if(response.ok){
        const data= response.json();
        return data;
    }else{
        throw "Something went wrong";
    };
};

getPosts()
  .then((a1)=>{
    console.log(a1)
    return (a1[2]);
  }).then((a2)=>{
    console.log(a2)
    console.log(a2.id)
  })
  .catch((error)=>{
    console.log("Inside the catch")
  })

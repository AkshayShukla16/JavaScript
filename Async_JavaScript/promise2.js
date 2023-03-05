

function myPromise(){
    return new Promise((resolve, reject) => {
        resolve("foo");
    })
};

myPromise().then(
    (value)=>{  // yaha par value ---> resolve wala hai
        console.log(value);  // ----> foo dega
        value += "bar";  
        return value;// ye normal value nahi hai ye to vahi resolve wala hai and ye return karega
        // i.e ye actually ek promise ban gaya, so to access this we need to again call it.
    }).then((value)=>{   // ab ye value foobar ho gayi hai
    console.log(value)
})
    
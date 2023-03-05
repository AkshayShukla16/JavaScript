const bucket= ['Coffee', 'Chips', 'Vegetables', 'Salt', 'Rice'];

// promise produce
const friedRice=  new Promise((resolve, reject)=>{
    if(bucket.includes('Vegetables') && bucket.includes('Salt') && bucket.includes('Rice')){
        resolve("Fried Rice");  // yaha pr ye array, string, number, object kuch bhi le sakta hai
    }
    else{
        reject("Nahi ban paya");   // yaha pr ye array, string, number, object kuch bhi le sakta hai
    }
});

// promise consume
// friedRice.then(()=>{}, ()=>{});

friedRice.then(
    // jab promise resolve hoga
    (a1)=> {   // yaha par a1 hamesha resolve ki value lega i.e (a1--> Fried Rice) with reference to resolve
    console.log("lets eat ", a1);
    }
 ).catch(
    (a2)=> {  // yaha par a2 hamesha reject ki value lega i.e (a2-->Nahi ban paya) with reference to reject
        console.log("Something is Missing", a2);  
    }
 );
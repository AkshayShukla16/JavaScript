

// Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.

// promise include 3 state: Pending, fulfilled, reject   // imp hai
// Pending--> Jo promise kiya gaya hai vo abhi pending state me hai
// fulfilled---> jo promise kiya gaya tha kaam karne ke liye vo ho gaya
// reject--> because of some missing data or things promise reject ho gaya

// promise hamesa produce hoga then consume kar liya jayega

// Suppose we make promise that we should make Fried Rice (required things--> 'Vegetables', 'Salt', 'Rice')

const bucket= ['Coffee', 'Chips', 'Vegetables', 'Salt', 'Rice'];

// promise produce
const friedRice=  new Promise((resolve, reject)=>{
    if(bucket.includes('Vegetables') && bucket.includes('SaltS') && bucket.includes('Rice')){
        resolve("Fried Rice");  // yaha pr ye array, string, number, object kuch bhi le sakta hai
    }
    else{
        reject("Nahi ban paya");   // yaha pr ye array, string, number, object kuch bhi le sakta hai
    }
});

// promise consume
// friedRice,then(()=>{}, ()=>{});

friedRice.then(
    // jab promise resolve hoga
    (a1)=> {   // yaha par a1 hamesha resolve ki value lega i.e (a1--> Fried Rice) with reference to resolve
    console.log("lets eat ", a1);
    }, 
    // jab promise reject hoga
    (a2)=> {  // yaha par a2 hamesha reject ki value lega i.e (a2-->Nahi ban paya) with reference to reject
    console.log("Something is Missing", a2);  
});
// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.

const arr= [1,2,3,4,5];

const value = arr.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
});
console.log(value);

// accumulator   currentValue   return
// 1                 2            3       // first call
// 3(return ki value takes) 3       6      // second call
// 6                4               10
// 10              5                15

// if we want that accumulator initally take the 200 value then write 200 after the callback function

const arr1= [1,2,3,4,5];

const sum = arr.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
}, 200);
console.log(sum);    // output ---> 215
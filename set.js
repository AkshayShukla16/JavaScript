// Set (it is iterable)
// It store data
// It also have its Own Method
// No index based access
// Order is not gauranteed
// here no duplicate items are allowed (if given then it ignore that value)

const number = new Set([3,4,2,1]);
console.log(number); // Set(4) {3, 4, 2, 1}
console.log("--------------------");

const value= new Set([1,2,3,3]);
console.log(value);  // Set(3) {1, 2, 3}

if(value.has(2)){    // has() used to check whether the value is present or not
    console.log("2 is present in set")
}else{
    console.log("2 is not present in set")
}
console.log("--------------------");

const array= [1,2,3,4,4];
const result= new Set();
result.add(1);
result.add(2);
result.add(1); // ignores it
result.add(array);
result.add(array); // ignores it
result.add([1,3,4,5,1]);
result.add([1,3,4,5,1]); // not going to ignore because they both have different addresses
console.log(result)


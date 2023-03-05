// splice method is used delete, insert the items(value) in array
// it changes the length of the array
// arr.splice(start_index, how many element u want to delete, inserted element)

// delete
const number= [5,6,3,1,8,9,0,2];
number.splice(2, 4); //(2,4) start_index=2 and 4= kitne delete karne hai from index=2 se ie total 4 item delete ho jayenge
console.log(number);  // output---> [5, 6, 0, 2]
console.log("----------------------------");

// insert
const array= [4,5,2,7,8,1];
array.splice(3, 0,"inserted item"); // (index which u want to insert, how many element u want to delete, what u want to insert)
console.log(array);  //[4, 5, 2, 'inserted item', 7, 8, 1]
console.log("------------------------------------");

// delete, insert both
const value=[5,7,8,9,0,2,3,42];
value.splice(1, 3, "my-value1","my-value2");
console.log(value);// [5, 'my-value1', 'my-value2', 0, 2, 3, 42]
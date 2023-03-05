// used to fill the array by user choice 
// it will not change the length of the array

const number= new Array(10).fill(-2);
console.log(number); // [-2, -2, -2, -2, -2, -2, -2, -2, -2, -2]
console.log("--------------------");

const arr= [3,5,6,1,8,9,2,7];
arr.fill(0, 2, 6); // arr.fill(user_number, start_index, end_index) but end index is not included ie excluded
console.log(arr); // [3, 5, 0, 0, 0, 0, 2, 7]
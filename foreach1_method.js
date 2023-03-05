
// Actually forEach method uses callback function function(new_function) hota hai

const arr= [4,5,6,2];
arr.forEach(function fun1(num, index){
    console.log(`index is ${index} and ${num}*2 is ${num*2}`);
})

// we can also use the Arrow function

const student= ["Aman", "Akshay", "Ashish", "Akash"];
student.forEach((name, index)=>{
    console.log(name, index)
});
// some() method me agar ek bhi value of array satisfy kar gayi then it gives true result.
// in every() method har value of array check karega if all satisfy then it gives true as a result.

const number= [1,2,3,5,7];
function anyeven(num){
    return num%2===0;
};
const result= number.some((value)=>{
    return value%2===0;
});
console.log(result);
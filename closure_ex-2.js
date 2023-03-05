

function myfunction(power){

    return function(num){    // return num ** power  bhi kar sakte hai
        let x = Math.pow(num, power);
        console.log(x)
    }
}

const result= myfunction(2)(4);
/* const result= myfunction(2);
  result(3)*/ 



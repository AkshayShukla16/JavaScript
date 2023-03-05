// function inside function 

function work(){      // three type me se koi bhi kahi bhi use kar sakte ho

    const add = function(num1, num2){
        return (num1+num2);
    }

    const mul =(num3, num4) =>{
        return (num3*num4)
    }
    console.log("I am done with my work")  

    console.log(add(2,5));
    console.log(mul(2,4));

}

work();    // calling the main function 
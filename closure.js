


function outerFunction(){

    function innerFunction(){
        console.log("Hello world");
    }

    return innerFunction;  
}

const ans = outerFunction();
console.log(ans);
 ans();
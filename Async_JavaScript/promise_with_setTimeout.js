
// Implement promise which gives result after 2 sec
function myPromise(){
    return new Promise((resolve, reject) => {

        const value= true;
        setTimeout(() => {
          if(value){
            resolve();
        }else{
            reject();
        }
    }, 2000);
    });
};

myPromise().then(()=>{console.log("Resolved")}).catch(()=>{console.log("Rejected")})
// do while statements
let i=0;
do{
    console.log(i);
    i++;
}while(i<10);

//example 

let Userpin= 3346;
let errorcount=0;
let pin= +prompt("Enter your pin");
do{
    
    if(pin!== Userpin){
        errorcount++;
    }
}while(errorcount<3 && pin!=Userpin)

if(errorcount<3){
    console.log("Application loading....")
}
else{
    console.log("Blocked")
}

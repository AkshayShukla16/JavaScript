
console.log(message);   // message ko call nahi kar raha hoon because kiya to error dega as it is function expression

var message= function(){
  console.log("Hello World")
}
console.log(message);

// constructor function
function Customer(fname,lname,age,sal,add){

   //  const users= Object.create(customer.prototype); does not require as we are using new keyword

    this.firstname= fname;
    this.lastname= lname;
    this.age= age;
    this.salary= sal;
    this.address= add;

    //return users; hame return karne ki bhi jarurat nahi hai as new keyword always return value
}
Customer.prototype.about= function(){
    return `${this.firstname}, ${this.lastname}`;  }
Customer.prototype.vote= function(){
    return this.age>=18; }

const user1= new Customer("akshay","shukla", 21,400000,"xyz");
console.log(user1);
console.log(user1.about());
console.log("----------------------");

const user2= new Customer("Aman","sharma", 27,32000,"sghz");
console.log(user2.vote());
console.log("----------------------");

for(let key in user1){
    console.log(key);
} // it will give its own key along with the key which we have created in prototype
console.log("----------------------");

// suppose we want to see the property which is real property of the user1 then use hasOwnproperty

for(let key in user1){
    if(user1.hasOwnProperty(key)){
        console.log(key)
    }
}



// abhi tak hamne function ke prototype me method ko define kiya hai 
// now ab hame alag se kisi prototype me method ko define karne ki jarurat nahi hai (doesn't mean that wenever use it)
// now we use class keyword which have constructor in it
// but for creation of object it always require new keyword when we are using the class

class customer{
    constructor(fname,lname,age,sal,add){
        this.firstname= fname;
        this.lastname= lname;
        this.age= age;
        this.salary= sal;
        this.address= add;
    }
    // ab hum yahi par (i.e inside class, outside the constructor) apna method create karenge

    about(){
        return `${this.firstname}, ${this.lastname}`; 
    }
    vote(){
        return this.age>=18;
    }
}

const user1= new customer("akshay","shukla", 21,400000,"xyz"); // agar hum yaha par new nahi use karenge then it will give an error
console.log(user1);

for(let key in user1){
    console.log(key);
}
console.log("----------------------");

console.log(user1.about())
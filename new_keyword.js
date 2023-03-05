// create_obj_usinf_fun3  ko aur simple banane ke liye hum new keyword with this keywword use karenge
// 1) new keyword creates empty object{} i.e this===> {} equal rakhta hai
// 2) after creating it also return the {} 
// link between object and function prototype which is done by __proto__ i.e Object.create() wala does not required in new keyword as it has the capability to provide the link without using proto.


function customer(fname, Age){
    this.firstName= fname;
    this.age= Age; 
}
 customer.prototype.about=function(){
    console.log(this.firstName, this.age);
 }

 const user1= new customer("Akshay", 21);
 console.log(user1)

 user1.about();
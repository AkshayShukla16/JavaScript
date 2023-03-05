// since humne create_obj_using_fun, create_obj_using_fun1, create_obj_using_fun2 me object create using functio
// har ek me hum jyada achcha karne ki koshish kar rahe the, now we studied prototype i.e extra space or object provided by function
// In create_obj_using_fun2 file me humne method outside the function banaya tha and usethe Object.create() wala i.e concept of __proto__
// but we don't need actually kyoki ab hume prototype aata hai, to hum apne initial function ke prototype me he apna method bana lenge



function customer(fname,lname,age,sal,add){

    const users= Object.create(customer.prototype);

    users.firstname= fname;
    users.lastname= lname;
    users.age= age;
    users.salary= sal;
    users.address= add;
   /* users.about= obj.about;  ye dono yaha par add karne ki jarurat nahi hai because hamne Object.create() use kiya hai
    users.vote= obj.vote;  */

    return users;
}

customer.prototype.about= function(){
    return `${this.firstname}, ${this.lastname}`;  }
customer.prototype.vote= function(){
    return this.age>=18; }

const user1= customer("akshay","shukla", 21,400000,"xyz");
console.log(user1);

console.log(user1.about());
const value= user1.vote();
console.log(value);


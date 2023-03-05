// humne dekha ki kaise hum object with method create inside function kar rahe the and then humne 
//usee more suitable karne ke liye methods ko ek alag object me store kar diya which is outside the function but again isme ek drawback hai
// i.e jitna hum method creat karenge utna hame apne object(which is inside the fxn) me uska reference use karna hoga
// now we already learn the Object.create(),so use it

const obj= {
    about: function(){
        return `${this.firstname}, ${this.lastname}`;  },
    vote: function(){
    return this.age>=18; },
    hobby: function(){
        return "playing cricket" }
}

function customer(fname,lname,age,sal,add){

    const users= Object.create(obj);

    users.firstname= fname;
    users.lastname= lname;
    users.age= age;
    users.salary= sal;
    users.address= add;
   /* users.about= obj.about;  ye dono yaha par add karne ki jarurat nahi hai because hamne Object.create() use kiya hai
    users.vote= obj.vote;  */ 
    return users;
}

const user1= customer("akshay","shukla", 21,400000,"xyz");
console.log(user1);

const rst= user1.about();
console.log(rst)
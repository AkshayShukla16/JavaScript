// previous we seen that how we design the object but for every object it gone make method so it takes lots of space
// now we will declare that method outside


const obj= {
    about: function(){
        return `${this.firstname}, ${this.lastname}`;  },
    vote: function(){
    return this.age>=18; }
}

function customer(fname,lname,age,sal,add){
    const users= {};

    users.firstname= fname;
    users.lastname= lname;
    users.age= age;
    users.salary= sal;
    users.address= add;
    users.about= obj.about;
    users.vote= obj.vote;
    return users;
}

const user1= customer("akshay","shukla", 21,400000,"xyz");
console.log(user1);
const rst= user1.about();
console.group(rst)

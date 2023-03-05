// if we want to create many object then it is very tedius work, so we use function

function customer(fname,lname,age,sal,add){
    const users= {};

    users.firstname= fname;
    users.lastname= lname;
    users.age= age;
    users.salary= sal;
    users.address= add;
    users.about= function(){
        return `${this.firstname}, ${this.lastname}`;
    }
    users.vote= function(){
    return this.age>=18;
    }
    return users;
}

const result= customer("akshay","shukla", 21,400000,"xyz");
console.log(result);

const my= result.about();
console.log(my);
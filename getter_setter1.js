const student = {
    firstName: 'Monica',
    lastname: 'Sharma',
    
    //accessor property(setter)
    set changeName(newName) {   // 
        const[firstName,lastname]= newName.split(' ');
        this.firstName= firstName;
        this.lastname=lastname;
    }
};

console.log(student.firstName); // Monica
console.log(student.lastName);
console.log("-----------------------------");

student.changeName= 'Akshay Shukla';
console.log(student.firstName)


/* 
// change(set) object property using a setter
student.changeName = 'Sarah';

console.log(student.firstName); // Sarah*/
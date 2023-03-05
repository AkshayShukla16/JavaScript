// when we want to access the method present inside the class as property we use get method
// hum getter and setter ko kahi bhi use kar sakte hai

class customer{
    constructor(id,fname,lname,age){
        this.ID= id;
        this.firstName= fname;
        this.lastName=lname;
        this.Age=age;
    }
    get about(){   // our method
        return (`${this.firstName} ${this.lastName} is a very good customer`);
    }

    setName(naam, antim_naaam){
        this.firstName= naam;
        this.lastName= antim_naaam;

    }
}

const customer1= new customer(23,"Aakash","Pandit",34);
console.log(customer1);
// console.log(customer.about()); // here we get an error because our method is now no more fxn it become the property

console.log(customer1.about); // accessing like the property
console.log("--------------------------");

customer1.setName("Rahul", "Singh");
console.log(customer1)
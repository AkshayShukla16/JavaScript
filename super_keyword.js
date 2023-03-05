// like in the previous we use extend keyword but suppose we want to add extra property to our child class along with the parent class property then use super()




class Animal{
    constructor(name,age){
        this.Name= name;
        this.Age= age;
    }
    eat(){
        return `Animal name is ${this.Name} and age is ${this.Age}`
    }
}


class cat extends Animal{
   constructor(name,age,speed){
    super(name,age);
    this.Speed= speed;
   }
   run(){
    return `${this.Name} is running at ${this.Speed} m/s`
   }
}

const catty= new cat("baby cat", 1, 45);
console.log(catty);


console.log(catty.run())


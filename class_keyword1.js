

class Animal{
    constructor(name,age){
        this.Name= name;
        this.Age= age;
    }
    eat(){
        return `Animal name is ${this.Name} and age is ${this.Age}`
    }
}

const animal1= new Animal("Lion", 29);
console.log(animal1);

console.log(animal1.eat())
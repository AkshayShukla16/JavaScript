
class Animal{
    constructor(name,age){
        this.Name= name;
        this.Age= age;
    }
    eat(){
        return `Animal name is ${this.Name} and age is ${this.Age}`
    }
}

// Ab mai chahata hoon ki ek cat ki class banayi jaye jisme animal class ki saari property and methods ho, so for this hame phir se pura cat class banana padega
// as a result hum extends keyword use karenge so that hame phir se pura likhna na ho

class cat extends Animal{
    // isko koi bhi constructor ki jarurat nahi hai, ye directly Animala class se fetch karega
}

const catty= new cat("baby cat", 1);
console.log(catty);

// Animal class become parent class or base class or super class
// cat class become child class
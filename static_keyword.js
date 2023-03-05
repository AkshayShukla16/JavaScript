// suppose there are certain methods and properties which u want that it cannot be accesible by new object and can be accessible by pareent class or object, then we use static

class company{
    constructor(name,builtyear,rank){
        this.name=name;
        this.builtyear=builtyear;
        this.rank=rank;
    }
    about(){
        return `${this.name} is ranked ${this.rank} in India`;
    }

    static founder ='Founder is the person who made the company';

}

const com1= new company("TATA Steel", 1806,1);
console.log(com1);
console.log(com1.about());

console.log(company.founder);
console.log(com1.founder)  // undefined i.e not accessible by com1 object
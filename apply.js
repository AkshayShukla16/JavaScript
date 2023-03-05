// apply() work same as call() but in apply if we want to pass the argument for fxn we need to use array

function info(id, rank){
    console.log(this.sname, this.sage, id, rank);
};

const student1={
    sname: "Mahesh",
    sage: 45
};

const student2={
    sname: "Rakesh",
    sage: 32
};

info.apply(student1, [345,76]); // student1---> this keyword hai // 345,76 are id and rank
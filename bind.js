// bind() work same as call() but it always return the result as function

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

// info.bind(student1,345,76); // nothing will be printed

const result= info.bind(student1,345,76);
// here result store a fxn i.e it is a fxn 

result();  // Mahesh 45 345 76


const info = new Map();
info.set('pname', 'Rajat');
info.set('id', 223);
info.set('company', 'tcd');
info.set(44, 'cid'); // here 44 indicate not a number
console.log(info); // {'pname' => 'Rajat', 'id' => 223, 'company' => 'tcd', 44 => 'cid'}
console.log("--------------------");

console.log(info.get('company')); // to acess the data
console.log("--------------------");

console.log(info.keys());  // {'pname', 'id', 'company', 44}
console.log("--------------------");

console.log(info.length) // undefined
console.log("--------------------");

for(let i of info.keys()){
    console.log(i, typeof(i));
}
console.log("--------------------");

const my = new Map([['name','Akshay'],['id', 2],['sal', 20000],['name','Akshay']]); // ignore duplicate
console.log(my); // {'name' => 'Akshay', 'id' => 2, 'sal' => 20000}

console.log(my.get('name'));

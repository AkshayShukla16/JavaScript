// string are Immutable. Immutables are the objects whose state cannot be changed once the object is created

// string method
// trim(), toUppeCase(), toLowerCase(), slice(), concat(), substring(), split(), 


// trim();
let Name="     Akshay   "; // as spaces are present it is also counted in total length

console.log(Name.length);

Name= Name.trim(); //it will remove all spaces
console.log(Name);
console.log(Name.length);


// toUpperCase();
let fruit="Pineapple";
console.log(fruit);
console.log(fruit.length);

fruit=fruit.toUpperCase();
console.log(fruit); // every letter converted to upper case

// toLowerCase();
let book="God of Universe";
console.log(book);
console.log(book.length);

book=book.toLowerCase();
console.log(book); // every letter converted to lower case

// slice(start, end); here end not included
let car="Mahindra";
console.log(car);
car= car.slice(2,6); // it will print from index=2 to index=5 here it will not print index=6 as it excluded it
console.log(car);

// concat();

let str1= "Akshay";
let newstr= str1.concat(" Shukla", " Student");
console.log(newstr);

// substring(start, end);

// slice(): If startIndex is negative, it will be treated as string.length + startIndex. If the endIndex is negative, it will be treated as string.length + endIndex.
// substring(): If startIndex is negative, it will be treated as 0. If the endIndex is negative, it will be treated as 0.

let Company= "Dreamup";
let newCompany= Company.slice(-3, -2); // slice(-3+7, -2+7)   [7= length of string hai ]
console.log(newCompany);

let Media= "Subscribe";
let newMedia= Media.substring(-3, 7); // substring(0, 7) [here -ve value by default converted into 0]
console.log(newMedia);

// substr()
// substr() method fetch the part of the given string and return the new string. The number of characters to be fetched depends upon the length provided with the method. 
//string.substr(start,length)  
// start - It represents the position of the string from where the fetching starts.
// length - It is optional. It represents the number of characters to fetch.

let service= "Technical";
let newService= service.substr(2,6);
console.log(newService);
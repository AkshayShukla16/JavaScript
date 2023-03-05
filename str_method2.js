// split()  // method is used to split a string into an array of substrings.
// string.split(separator, limit)

let Flexiple = "Hire top freelance developers";
let week = "Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday";

let flexiplelist = Flexiple.split(" ");
let weeklist = week.split(",");
let flexiplelist2 = Flexiple.split();
let weeklist2 = week.split(",",3);

console.log(weeklist); //  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
console.log(flexiplelist); // ['Hire', 'top', 'freelance', 'developers']
console.log(flexiplelist2); // ['Hire top freelance developers']
console.log(weeklist2); // ['Monday', 'Tuesday', 'Wednesday']

//startsWith();
// method is used to determine whether a string starts with a character or a particular string. The method returns a boolean true in case the string starts with the specified characters.

let str_1 = 'Join our freelancer community';

console.log(str_1.startsWith('Join'));  // Output: true

console.log(str_1.startsWith('Join', 3)); // Output: false

console.log(str_1.startsWith('our', 5)); // Output: true as in our o having index value=5


// endswith();
// method is used to determine whether a string ends with a character or a particular string. The method returns a boolean true in case the string ends with the specified characters.

let place= "Mumbai the dream city";
console.log(place.endsWith('city'));

console.log(place.endsWith('i', 6));
// So when I say 6, I'm telling endsWith to grab the first "6" characters of the place string (from left to right). In this case, the first 6 characters of the string. And that will be the string we're searching with endsWith.

// The main difference between an HTMLCollection and a NodeList is that one is live and one is static. This means that when an element is appended to the DOM, a live node will recognize the new element while a static node will not.
// static list ----> queryselector (Nodelist ke form me)
// live list ----> getElementsById, getElementsByClassName, getElementsByTagName(Collection ke form me)

const myList= document.querySelectorAll(".todo-list li"); // NodeList(5) [li, li, li, li, li]
console.log(myList)

const ul= document.querySelector(".todo-list")
const newList1= document.createElement("li");
newList1.textContent= "newlist1";
ul.append(newList1); // Added one more list(total==6) here but in upper it only shows 5 list only because queryselector gives static list.
console.log(myList) // NodeList(5) [li, li, li, li, li]  not giving answer properly
console.log("---------------------------");

const List= ul.getElementsByTagName("li"); // ul jisme li hai wahi select ho tabhi likha ul.getElementsByTagName() and not uses document.getElementsByTagName()
// HTMLCollection(6) [li, li, li, li, li, li] // before writing the below code
console.log(List);


const myul= document.querySelector(".todo-list")
const addedList= document.createElement("li");
addedList.textContent= "Added list";
myul.append(addedList);
console.log(List) //HTMLCollection(7) [li, li, li, li, li, li, li] 
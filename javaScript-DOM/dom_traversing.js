
const rootNode= document.getRootNode();
console.log(rootNode);
console.log("---------------------")

const HtmlElementNode= rootNode.childNodes[0];  // Child Relationship
console.log(HtmlElementNode);

console.log(HtmlElementNode.childNodes); // NodeList [head, text, body]
console.log("---------------------")

const HeadElementNode= HtmlElementNode.childNodes[0];
console.log(HeadElementNode); 
console.log(HeadElementNode.childNodes);  // NodeList(5) [text, title, text, script, text]
console.log("---------------------")

const TextElementNode= HtmlElementNode.childNodes[1];
const BodyElementNode= HtmlElementNode.childNodes[2]
console.log(BodyElementNode);
console.log(BodyElementNode.childNodes);
console.log("---------------------");

console.log(HeadElementNode.parentNode);  //    Parent Relationship
console.log("---------------------");

// Sibling Relationship
console.log(HeadElementNode.nextSibling);  // text
console.log(HeadElementNode.nextSibling.nextSibling);  // body
console.log(HeadElementNode.nextElementSibling); // body // it directly give the element and not the text or spaces

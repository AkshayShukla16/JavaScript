

const result= document.getElementsByTagName("a");
console.log(result);

for(let i=0; i<result.length; i++){
   const v1= result[i];
   v1.style.backgroundColor= "yellow";
   v1.style.color="red";

}

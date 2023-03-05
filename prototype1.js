// prototype(object or empty space) me hum key value add kar sakte hai jaise hum normally kisi object me add karte hai

function user(){
    console.log("hi, how are u?");
}


user.prototype.id= 7;
user.prototype.address= "xyz";
user.prototype.sal= 32100;
user.prototype.about= function(){
    return 332;
};

console.log(user.prototype);
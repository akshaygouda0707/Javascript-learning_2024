
let name="Akshay";
console.log(typeof name);//String
console.log(name[0]);//A
console.log(name.charAt(0));//A
console.log(name[7]);//undefined
console.log(name.charAt(7))//""

//String Methods: charAt, toUpperCase, toLowerCase, includes, startsWith, endsWith
let counrty="India";
console.log(counrty.charAt(3));

console.log(counrty.toUpperCase());
console.log(counrty.toLowerCase());



let msg="Hello my name is Akshay";
console.log(msg.includes("Akshay"));//true

console.log(msg.endsWith("Aks"));
console.log(msg.startsWith("Hi"));

//String Methods: Search, IndexOf, lastIndexOf

let mymsg="hi my name is hi AK";
console.log(mymsg.search("hi"));//0
console.log(mymsg.indexOf("hi"));//0
console.log(mymsg.lastIndexOf("hi"));//14

//String Methods: toString, Concat, split

let num=123;
console.log(num.toString());
console.log(typeof num.toString());

//Concat

let num1=10;
let num2=10;
console.log(num1.toString().concat(num2));

let Name="Akshay";
let sname="Gowda";
console.log(Name.concat(sname));

let msgs="Hi Akshay where are u from";
//console.log(msgs.split(" "));
//console.log(msgs.split(""));
//console.log(msgs.split(" ,"));
console.log(msgs.slice(0,7));
console.log(msgs.slice(2));
console.log(msgs.substring(0,7));
console.log(msgs.substr(0,7));
## Author

- [@Akshay G Gouda](https://github.com/akshaygouda0707)

# Learn javascript 

Welcome to the JavaScript learning repository! This repository is designed to help beginners get started with JavaScript programming. Whether you're new to coding or looking to refresh your skills, you're in the right place. Below you'll find resources, exercises, and projects to guide you through your JavaScript journey.

## Contents

1. [Getting Started](#getting-started)
2. [Resources](#resources)
3. [Exercises](#exercises)
4. [Projects](#projects)
5. [Contributing](#contributing)

## Getting Started

To begin learning JavaScript, it's helpful to have some basic understanding of HTML and CSS. If you're completely new to web development, you might want to start with HTML and CSS tutorials before diving into JavaScript.

Once you're comfortable with HTML and CSS, you can start experimenting with JavaScript. You can either use an online code editor like CodePen or set up a development environment on your local machine. For local development, you'll need a text editor like Visual Studio Code and a web browser like Chrome or Firefox.

## Resources

- **Documentation**: The official [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) documentation is an excellent resource for learning JavaScript. It covers everything from basic syntax to advanced topics like asynchronous programming.
  
- **Online Courses**: Websites like [Codecademy](https://www.codecademy.com/learn/introduction-to-javascript) and [freeCodeCamp](https://www.freecodecamp.org/learn/) offer interactive JavaScript courses for beginners.

- **Books**: Books like "Eloquent JavaScript" by Marijn Haverbeke and "JavaScript: The Good Parts" by Douglas Crockford are highly recommended for gaining a deeper understanding of JavaScript concepts.

## Exercises

Practice makes perfect! Here are some exercises to reinforce your JavaScript skills:

1. **Variables and Data Types**: Write a script that declares variables of different data types (string, number, boolean) and performs operations on them.

2. **Functions**: Create functions for common tasks like calculating the area of a rectangle or converting Celsius to Fahrenheit.

3. **Arrays and Loops**: Write a script that manipulates arrays using loops (for, while) and array methods (push, pop, slice).

4. **Objects and Classes**: Explore object-oriented programming in JavaScript by creating objects and defining classes for real-world entities.

## Projects

Once you're comfortable with the basics, challenge yourself with some hands-on projects:

1. **To-Do List App**: Build a simple to-do list application that allows users to add, delete, and mark tasks as completed.

2. **Weather App**: Create a weather application that fetches data from a weather API and displays the current weather for a given location.

3. **Portfolio Website**: Design and develop your portfolio website using HTML, CSS, and JavaScript to showcase your projects and skills.

4. **Game Development**: Try your hand at game development by building classic games like Tic Tac Toe or Snake using JavaScript and HTML5 canvas.

## Contributing

This repository is open to contributions! If you have suggestions for improving the content or want to add your own exercises or projects, feel free to fork the repository and submit a pull request.

Happy coding!

---

Feel free to customize this README to fit your specific learning goals and preferences!

# Start Learning


# Java script :

* javascript is an interpreted programming language with first-class-function.it's a most know scripted language for web page.

* First-class-function: A programming language can be said to have first-class-function when a function in that language is treated like variable.Which means you can pass function as argument for another function.

Ex-1:

```javascript
const  foo= () =>{
console.log("hello");
}
foo() //Invoke the function with variable.
```

Ex-2:funtion as an agrument to another function.
```javascript
funtion sayHelo(){
    return "hello,"
}
```
```javascript
funtion greet(helloMsg,name){
    console.log(helloMsg()+name);
}
greet(sayHelo,"javascript");
```
* output: hello,javascript


Ex-3: return funtion inside funtion
```javascript
function Hello(){
    return ()=>{
        console.log("Hello");
    }
}
```

# variable:
It is a name of the memory location where the value is going to be stored.

- syntax:
```javascript
keyword variableName=value;
var name="Akshay";
```
```
let price=200;
price=300;
```
The value assigned to the let keyword can be changed.

```javascript
const name="Akshay";
name="Hello";
```
The value assigned to const keyword cannot be changed ..It will show error Assignment to constant variable.


# DataType:
It is nothing but a type of value assingned to the Variable.

### primitive dataTypes:
In javascrtipt 'typeof' operator will be used to identify which type of data is assigned to the variable.

Ex 1:
```javascript
let name="Akshay";
console.log(typeof name);//String
let age=24;
console.log(typeof age);//Number
let IsMarrried=false;
console.log(typeof IsMarrried);//boolean
let color=undefined;
console.log(typeof color);//undefined
let selctColor=null;
console.log(typeof selctColor);//object
```
- Reference type

- Object:
It is a collection of properties.These properties assosiated with name(key) and value.
```javascript
let user={
    name:"Akshay",
    age:24,
    hobby:"cricket",

};
console.log(user);
```
if you want to get a perticcular value in the object use varibale name followed by .key.
```javascript
console.log(user.name);//Akshay
console.log(user['age']);//24
```
* Reference type-Array(basic).

array:It is a collection of one or more data item in it.
```javascript
let friends=['akshay','ajay','ajith'];
console.log(friends);
console.log(typeof friends);
console.log(friends.length);
console.log(friends[0],",",friends[1]);
```

- reference type-function:
It is a block of code it will be execute some output when it is called.

Ex 1:
```javascript
function hey(){
    console.log("Hi Akshay");
}
hey();
hey();
```
Ex 2:
```javascript
function calSum(num1,num2){
    console.log(`sum of `+num1+` and `+num2+` is: `,num1+num2);
}
calSum(10,20);
```
Ex 3:
```javascript
function cali(num1,num2){
    return num1+num2;
}
let result=cali();//If i'll not pass the argument it will show output naN--which means not number.
console.log(result);
let ans=calci(10,30);
console.log(ans);//It will print 30.
```
* Templete Literals***

These uses backtick(`) instead of using single or double quotes.it will be very helpful while printing the sentences.

- ${variableName}---This will be used to acces the value inside the literals.(Important)
```javascript
let name="Akshay";
console.log(`my name is ${name}`);
```
- Excersise-creat an obejct wid diff property
```javascript
let person={
    user:{
        name:'Gowda',
        age:24,
        isMarried:false,
    },
    homeAdress:{
        long:44.4,
        lat:50.43,
    },
    friends:['akshay','Akshay','AksHay'],

    };

    console.log(person);
    console.log(person.user.name);
    console.log(person.homeAdress.lat);
    console.log(person.friends[1]);

```
# condtionals:
Use if to specify a block of code to be executed, if a specified condition is true · Use else to specify a block of code to be executed.

* if else :
```javascript
let num1=20;
let num2=30;
if(num1>num2){
    console.log(`num1 ${num1} is greater than ${num1}`);
}else if(num1<num2){
    console.log(`num1 ${num1} is less than ${num2}`);
}else{
    console.log(`num1 ${num1} is equal to ${num1}`);
}
```
- switch case:
```javascript
const prompt=require('prompt-sync')();
let year=1;
switch(year){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    default:
        console.log("ivalid ");
}
```
- Ternary operator
It is an update version of if else statement.
```javascript
let a=20;
let b=30;
let max=a>b?a:b;
console.log(`${max}`);
```
- Fizbuzz problem
```javascript
let num=10;

if(num%3===0&&num%5===0){
    console.log("fizzbuzz");
}
else if(num%3===0){
    console.log("fizz");
}
else if(num%5===0){
    console.log("Buzz");
}

else{
    console.log("none");
}
```
* Using ternory operator
```javascript
console.log(
    num%3===0&&num%5===0?"fizbuz":
    num%5===0?"buzz":
    num%3===0?"fizz":
    "nothing"

);
```
# Loops
loops are used to itterate over the program.

- if the conditon will true it start excecute untill the condition get false ,once it is false then it will exit the loop.

* syntax:
```javascript
for(condition){
   // statement
}
```

### for Loop:
It will be used when you know how many times to itterate.

ex 1:
```javascript
for(let i=1;i<=4;i++){
    console.log(`${i}, Hi Akshay`);
}
```

### while loop
It is used only when we don know how many times to itterate

```javascript
let j=1;
while(j<=5){
    console.log(`${j},Hi Akshay`);
    j++;
}
```

### Do-while loop
It will be used when you need to excecute your statement atleast once.

* Eventhough condition is false it will excecute one time .

```javascript
let k=100;
do{
console.log(`${k},Hi Akshay`);
k++;
}while(k<=5);
```

### for in loop

- In below example you can see ```key``` and ```obj[key]```,where key is similar to variableName and ```obj[key]``` is the value inside that variable
```javascript
const obj={
    name:"Akshay",
    age:24,
};

for(let key in obj){
    console.log(`${key},${obj[key]}`);
}
```

Ex 2:
```javascript
let array=['Akshay','Ajay','Ankit','Anup'];
for(let index in array){
    console.log(`${index},${array[index]}`);
}

```
### for of loop
If you wanna get only the value simply use for of loop.
- it is similar to for-each loop in java

```javascript
let number=[1,2,3,5,6,7];
for(let num of number){
    console.log(num);
}
```
output:
```javascript
1 2 3 4 5 6 7
```

- case 1:It is only used when it is an array.Incase of an object it will throws an error 

below program will throw error 

```javascript
let person={
    name:"Akshay",
    age:23,
}
for(let pers of person){
    console.log(pers);
}
```

### break and continue
- Once condition is true ,break hit it will not excute.
- Similarly,Once continue is hit it will skip that number and start excecute from next.
```javascript
for(let i=1;i<20;i++){
    if(i===10){
        break;
    }
    console.log(i);
}
```
```javascript
for(let j=1;j<20;j++){
    if(j===10){
        continue;
    }
    console.log(j);
}
```
### Infinite loop
```
for(let val=1;;val++){
    console.log(val);//It will run an infinite loop and it never stop untill unless you close that application.
}
```

### Nested Loop
```javascript
for(let n=1;n<=3;n++){
    for(let m=1;m<=3;m++){
        console.log(n,m);
    }
}
```
# operator:
It is a symbol used to operate with operand.

### Arithmatic Operator(+,-,*,/,**)
```javascript
let num1=5;
let num2=2;
console.log(num1+num2);//7
console.log(num1-num2);//3
console.log(num1*num2);//10
console.log(num1/num2);//2.5
console.log(num1**num2);//25
```
### Assignment operator-

#### passByValue----observe case2. (vvvvvvvvvimpimp)

```javascript
let num1=10;
```
- case 1:here we will assign the value of num1 variabe to the another variable num2.
```javascript
let num2=num1;
console.log(num1,num2);//10 10
```
- case 2: now i'll assign another value to num2 variable and print it.
```javascript
num2=20;

console.log(num1,num2);//10 20
```
- here you can clear observ that the changes made in num2 variable it will not change the value of num1..This is called as "pass By value".///Vvvvimp

- case3:other operator:(+=,-=,*=,/=,++,--)
```javascript
num1+=num2;
console.log(num1);//30
num1-=num2;
console.log(num1);//10
num1*=num2;
console.log(num1);//200
//num1+=1;
num1++;
console.log(num1);//201
num2--;
console.log(num2);//19
```
### comparison operators(<,>,<=,>=,==,===,!==)
```javascript
let num1=20;
let num2=22;
let num3="20";

console.log(num1>num2);//false
console.log(num1<num2);//true
console.log(num1>=num2);//false
console.log(num1<=num2)//true

console.log(num1==num3);//true
```
- You clearly observe that it will shows output as true what exactly == does..It will do type conversion before the value is going to be checked ,and then it will compare the value only.
```javascript
console.log(num1===num3);//false
```
- here you will get false bcz it will check both value as well as dataType .
```javascript
console.log(num1!==num3);//true
```


### logical operators:(and(&&),or(||),not(!))
```javascript
let num1=10;
console.log(num1<15&&num1>5);//true
console.log(num1<15||num1<5);//true----If any one of the condition is true then it'll return true.
console.log(!num1);//false means negtetive
```
# String
The String object is used to represent and manipulate a sequence of characters.

```javascript
let name="Akshay";
console.log(typeof name);
console.log(name[0]);
console.log(name.charAt(0))
console.log(name[7]);
console.log(name.charAt(7))
```

Output:
```javascript
string
A
A
undefined

```

### String Methods: charAt, toUpperCase, toLowerCase, includes, startsWith, endsWith
- charAt

It is used to get the character at the perticular index.

- syntax
```javascript
variableName.charAt(index);
```
```javascript
let counrty="India";
console.log(counrty.charAt(3));
```
- toUpperCase

syntax:
```javascript
variableName.toUpperCase();
```
- toLowerCase

syntax:
```javascript
variableName.toLowerCase();
```
- includes

It will check if the given charcharter or string value is prenet in our variable.If present  return true else return false.
```javascript
let msg="Hello my name is Akshay";
console.log(msg.includes("Akshay"));
console.log(msg.includes("Raj"));


output:
true
false
```

- startsWith and endsWith:

it will check whether the given sting is starts or ends with the value given to that function or not.

```javascript
let msg="Hello my name is Akshay";
console.log(msg.endsWith("Aks"));
console.log(msg.startsWith("Hi"));
```

### String Methods: Search, IndexOf, lastIndexOf

- search,IndexOf
It will search for the element when it is found written the index.

```javascript
let mymsg="hi my name is hi AK";
console.log(mymsg.search("hi"));
console.log(mymsg.indexOf("hi"));
```
- lastIndexOf

It will search for the last index of the elment
```javascript
let mymsg="hi my name is hi AK";
console.log(mymsg.lastIndexOf("hi"));

output:
14
``` 
###  String Methods: toString, Concat, split
- toString
convert number into String.

```javascript
let num=123;
console.log(num.toString());
console.log(typeof num.toString());
```
- Concat

It is used to concatination operation.It is possible only when of the varaible is String .

```javascript
let num1=10;
let num2=10;
console.log(num1.toString().concat(num2));

let name="Akshay";
let sname="Gowda";
console.log(name.concat(sname));

```

- split
used to split the string to an array.

```javascript
let msgs="Hi Akshay where are u from";
console.log(msgs.split(" "));
```
```javascript
output:
[ 'Hi', 'Akshay', 'where', 'are', 'u', 'from' ]
```
```javascript
console.log(msgs.split(""));
```
```javascript
Output:
[
  'H', 'i', ' ', 'A', 'k', 's',
  'h', 'a', 'y', ' ', 'w', 'h',
  'e', 'r', 'e', ' ', 'a', 'r',
  'e', ' ', 'u', ' ', 'f', 'r',
  'o', 'm'
]
```
```javascript
console.log(" ,");
```
```javascript
output:
[ 'Hi Akshay where are u from' ]
```

### String Methods: slice, subStr, subString
- slice,subString
It will be used to get the perticular part of the sting.

In below example..2nd parametere treated as index

```javascript
let msgs="Hi Akshay where are u from";
console.log(msgs.slice(0,7));
console.log(msgs.slice(2));
console.log(msgs.subString(0,3));
```
```javascript
output:
Hi Aksh
 Akshay where are u from
```
# Object:The Core of javascript & JSON

`object` is a instance of class .It have `state` and `properties`.

### Object Basics with Dot Bracket Notation
- Here name is treated as `variable`.

```js
let name="Akshay";
```
- In below example,name is treated as the `property` of the user object.
```js
let user={
    name:"Akshay",
    age:24
};
console.log(user);
```

### Adding, Modifying Deleting Properties

- **`Adding`**

Adding new property to the object.

```js
user.email="akshaygouda0707@gmail.com";
user["phone"]="910000000";

console.log(user);
```
output:
```js
{
  name: 'Akshay',
  age: 24,
  isMarried: false,
  email: 'akshaygouda0707@gmail.com',
  phone: '910000000'
}
```
- **`Modify`**

Modify the value inside the obejct.
- V-IMP
You can easily `modify` the value of an object but not the value of variable when it is of Type string.Bcs string is `Immutable`.

```js
user.age=28;
user.name="Akshay G Gouda";
console.log(user);
```
- **`Delete`**
Delete the prperty of an object.

```js
console.log(delete user.isMarried);
console.log(user);
```

### Obejct Methods, this Keywrod

It is possible to declare the methods inside the obejct.

- **`Method`**:It is a behavior of an object

```js
let user={
    name:"Akshay",
    age:24,
    isMarried:false,
    calcu:function(){
        console.log(`my name is Akshay and my age is ${this.age}`);
    }
};
```
- **`this keyword`**

by using `.this` keyword you can acces the value inside the obejct .If you imply write `age` it will shows error.


### Traversing Object Entries

- One way
```js
for(let key in user){
    console.log(key,user[key]);
}
```
- Two way
You can use InBuilt function `Object.keys` to get property `Object.value`.

```js
console.log(Object.keys(user));
console.log(Object.values(user));
```

- Exersise:
```js
let salary={
    Akshay:400000000,
    Ak:300000,
    Aj:3647832,
};
let sum=0;
for(let key in salary){
    sum+=salary[key];
}
console.log(sum);
```
### Object Destructuring

```js
let usr={
    name:"Akshay",
    age:24,
    favbook:{
        b1:"comid",
        b2:"Ak",
    },
};
```
- Destructuring:

```js
const {name,age,favbook}=usr;
const {b1,b2}=favbook;
console.log(name);
console.log(b1);

```

### Cloning Object

```js
const copy={};
copy.name=usr.name;
copy.age=usr.age;
copy.favbook=usr.favbook;
console.log(copy);
```
- 2nd way
```js
const copied=Object.assign({},usr);
console.log(copied);
```

### Math Object

```js
console.log(Math.PI);
console.log(Math.random());
console.log(Math.round(4.8));
```

- JSON format
```js
let usr={
    name:"Akshay",
    age:24,
    favbook:{
        b1:"comid"
    },
}
const json=JSON.stringify(usr);
console.log(json);
```
# Function

Fuction is a block of code it return output when it is called.

Ex 1:Function that invoked with the variable name.
```js
let name=()=>{
    return "hello";
}
console.log(name());
```

- passing the argument to the function.

```js
function nam(name,age){
    console.log(`my name is ${name} and my age is ${age}.`)
}

nam("Akshay",24);
```

- Default parameters
passing an agrumnet value to the function block .

fucntion name(`name`,`age`)-Here the `name` and `age` are the default parameters.

```js
function calsum(num1,num2){
    console.log(`sum of ${num1} and ${num2} is ${num1+num2}`);
}
calsum(3,4);
```

- Fucntion as Exression

```js
function name(){
    console.log("Akshay");
}

function hello(name,age){
    return name,age;
}
console.log(hello(name(),25));
```
ex 2:
```js
const calsum=function(num1,num2){
    let sum=num1+num2;
    return sum;
}
console.log(calsum(40,50));//if you call this function above it will shows error varibale not declared.
```
### Arrow function

```js
const calsum=(num1,num2)=>num1+num2;
console.log(calsum(40,50));
```
### Rest paramter 
When you wants to add more parameters use `...args`.

```js
let multi=(...args)=>{
    let multiply=1;
    for(let num of args){
        multiply=multiply*num;
    }
    return multiply;
}
console.log(multi(2,3,4,5));

```

## 🔗 Social Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/akshay-g-gouda-1bb424202)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/Akshayg77841279)

## Author

- [@Akshay G Gouda](https://github.com/akshaygouda0707)


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


## 🔗 Social Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/akshay-g-gouda-1bb424202)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/Akshayg77841279)

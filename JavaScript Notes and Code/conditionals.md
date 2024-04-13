## Author

- [@Akshay G Gouda](https://github.com/akshaygouda0707)


# condtion:
Use if to specify a block of code to be executed, if a specified condition is true · Use else to specify a block of code to be executed.

* if else :
```
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
```
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
```
let a=20;
let b=30;
let max=a>b?a:b;
console.log(`${max}`);
```
- Fizbuzz problem
```
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
```
console.log(
    num%3===0&&num%5===0?"fizbuz":
    num%5===0?"buzz":
    num%3===0?"fizz":
    "nothing"

);
```



## 🔗 Social Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/akshay-g-gouda-1bb424202)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/Akshayg77841279)

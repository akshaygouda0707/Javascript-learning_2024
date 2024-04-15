## Author

- [@Akshay G Gouda](https://github.com/akshaygouda0707)

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

## 🔗 Social Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/akshay-g-gouda-1bb424202)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/Akshayg77841279)

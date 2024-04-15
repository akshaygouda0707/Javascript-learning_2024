## Author

- [@Akshay G Gouda](https://github.com/akshaygouda0707)


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


## 🔗 Social Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/akshay-g-gouda-1bb424202)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/Akshayg77841279)

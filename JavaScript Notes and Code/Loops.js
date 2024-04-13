
//Loops
//For loop

for(let i=1;i<=4;i++){
    console.log(`${i}, Hi Akshay`);
}

//while loop
let j=1;
while(j<=5){
    console.log("Hello Akshay");
    j++;
}

//Do-while loop
let k=1;
do{
console.log(`${k},Hi Akshay`);
k++;
}while(k<=5);

//for in loop
const obj={
    name:"Akshay",
    age:24,
};

for(let key in obj){
    console.log(`${key},${obj[key]}`);
}

let array=['Akshay','Ajay','Ankit','Anup'];
for(let index in array){
    console.log(`${index},${array[index]}`);
}


//for of loop

let number=[1,2,3,5,6,7];
for(let num of number){
    console.log(num);
}
//In this case it will throw error msg
let person={
    name:"Akshay",
    age:23,
}
for(let pers of person){
    console.log(pers);
}

//break and continue

for(let i=1;i<20;i++){
    if(i===10){
        break;
    }
    console.log(i);
}

for(let j=1;j<20;j++){
    if(j===10){
        continue;
    }
    console.log(j);
}

//Infinite loop

for(let val=1;;val++){
    console.log(val);//It will run an infinite loop and it never stop untill unless you close that application.
}

//nested for loop 

for(let n=1;n<=3;n++){
    for(let m=1;m<=3;m++){
        console.log(n,m);
    }
}

/*
1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
*/

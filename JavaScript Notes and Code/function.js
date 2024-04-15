//Invoked with variable
/*
let name=()=>{
    return "hello";
}
console.log(name());

function nam(name,age){
    console.log(`my name is ${name} and my age is ${age}.`)
}

nam("Akshay",24);

function calsum(num1,num2){
    console.log(`sum of ${num1} and ${num2} is ${num1+num2}`);
}
calsum(3,4);

function name(){
    console.log("Akshay");
}

function hello(name,age){
    return name,age;
}
console.log(hello(name(),25));

const calsum=(num1,num2)=>num1+num2;
console.log(calsum(40,50));
*/

//Rest paramter 

let multi=(...args)=>{
    let multiply=1;
    for(let num of args){
        multiply=multiply*num;
    }
    return multiply;
}
console.log(multi(2,3,4,5));
Java script :

--javascript is an interpreted programming language with first-class-function.it's a most know scripted language for web page.

--First-class-function: A programming language can be said to have first-class-function when a function in that language is treated like variable.Which means you can pass function as argument for another function.

Ex-1:
const  foo= () =>{
console.log("hello");
}
foo() //Invoke the function with variable.

Ex-2:funtion as an agrument to another function.

funtion sayHelo(){
    return "hello,"
}

funtion greet(helloMsg,name){
    console.log(helloMsg()+name);
}
greet(sayHelo,"javascript");

//output: hello,javascript

Ex-3: return funtion inside funtion

function Hello(){
    return ()=>{
        console.log("Hello");
    }
}
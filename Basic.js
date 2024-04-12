const  foo= () =>{
    console.log("hello");
    }
foo();

function sayHelo(){
    return "hello,"
}

function greet(helloMsg,name){
    console.log(helloMsg()+name);
}
greet(sayHelo,"javascript");

//output: hello,javascript

function sayHello() {
    return () => {
      console.log("Hello!");
    };

  }
  
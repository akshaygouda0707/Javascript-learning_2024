/*var name="Akshay";
console.log(name);


let price=200;
price=300;
const name="Akshay";
console.log(price,name);
name="hello";
console.log(name);//shows an error Assgnment to cosntant variable.
*/

/*Primitive DataType
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
*/
/*Reference type-Obeject(basic)

//Object-is a collection of properties.These properties assosiated with name(key) and value.
let user={
    name:"Akshay",
    age:24,
    hobby:"cricket",

};
console.log(user);
console.log(user.name);
console.log(user['age']);
*/

/*Reference type-Array(basic).

let friends=['akshay','ajay','ajith'];
console.log(friends);
console.log(typeof friends);
console.log(friends.length);
console.log(friends[0],",",friends[1]);
*/

//Reference type-funtions(basic).

/*function hey(){
    console.log("Hi Akshay");
}
hey();
hey();

function hello(name){
    console.log('my name is '+name);
}
hello("Akshay");
hello("Ankit");

function calSum(num1,num2){
    console.log(`sum of `+num1+` and `+num2+` is: `,num1+num2);
}
calSum(10,20);

function cali(num1,num2){
    return num1+num2;
}
let result=cali(10,20);
console.log(result);
*/

/*Templete Literals

let name="Akshay";
console.log(`my name is ${name}`);
*/

//Excersise-creat an obejct wid diff property
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

   // console.log(person);
    console.log(person.user.name);
    console.log(person.homeAdress.lat);
    console.log(person.friends[1]);
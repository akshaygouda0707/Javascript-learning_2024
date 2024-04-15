//Object Basics with Dot Bracket Notation
/*
let nam="Akshay";

let user={
    name:"Akshay",
    age:24,
    isMarried:false,
    calcu:function(){
        console.log(`my name is Akshay and my age is ${this.age}`);
    }
};

console.log(user["name"]);
for(let key in user){
    console.log(key,user[key]);
}


//Adding, Modifying Deleting Properties

user.email="akshaygouda0707@gmail.com";
user["phone"]="910000000";
console.log(user);

//Modifying
user.age=28;
user.name="Akshay G Gouda";
console.log(user);

delete user.isMarried;
console.log(delete user.isMarried);
console.log(user);

//Object Methods This Keyword
user.calcu();

//Traversing Object Entries

//One way
for(let key in user){
    console.log(key,user[key]);
}

//Two way
console.log(Object.keys(user));
console.log(Object.values(user));

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

//Object Destructuring
let usr={
    name:"Akshay",
    age:24,
    favbook:{
        b1:"comid",
        b2:"Ak",
    },
};
const {name,age,favbook}=usr;
const {b1,b2}=favbook;
//console.log(name);
//console.log(b1);

//Cloning Object

const copy={};
copy.name=usr.name;
copy.age=usr.age;
copy.favbook=usr.favbook;
console.log(copy);

const copied=Object.assign({},usr);
console.log(copied);
*/

//Math Object
console.log(Math.PI);
console.log(Math.random());
console.log(Math.round(4.8));

//JSON format
let usr={
    name:"Akshay",
    age:24,
    favbook:{
        b1:"comid"
    },
}
const json=JSON.stringify(usr);
console.log(json);
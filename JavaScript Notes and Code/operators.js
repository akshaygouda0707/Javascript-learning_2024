//operator:It is a symbol used to operate with operand.

//Arithmatic Operator(+,-,*,/,**)

let num=5;
let num4=2;
console.log(num+num4);//7
console.log(num-num4);//3
console.log(num*num4);//10
console.log(num/num4);//2.5
console.log(num**num4);//25

//Assignment operator
let d=10;

//here we will assign the value of num1 variabe to the another variable num2.
let e=d;
console.log(d,e);//10 10

//now i'll assign another value to num2 variable and print it.
e=20;
console.log(d,e);//10 20
//here you can clear observ that the changes made in num2 variable it will not change the value of num1..This is called as "pass By value".///Vvvvimp

//others(+=,-=,*=,/=,++,--)

d+=e;
console.log(d);//30
d-=e;
console.log(d);//10
d*=e;
console.log(d);//200
//num1+=1;
d++;
console.log(d);//201
e--;
console.log(e);//19



//comparison operators(<,>,<=,>=,==,===,!==)

let number1=20;
let num2=22;
let num3="20";

console.log(number1>num2);//false
console.log(number1<num2);//true
console.log(number1>=num2);//false
console.log(number1<=num2)//true

//Important equality opertors
console.log(number1==num3);//true

//You clearly observe that it will shows output as true what exactly == does..It will do type conversion before the value is going to be checked ,and then it will compare the value only.

console.log(number1===num3);//false

//here you will get false bcz it will check both value as well as dataType .

console.log(number1!==num3);//true



//logical operators:(and(&&),or(||),not(!))

let num1=10;
console.log(d<15&&d>5);//true
console.log(d<15||d<5);//true----If any one of the condition is true then it'll return true.
console.log(!d);//false means negtetive

//excersise-swap two number;
//using tempory variab
let a=20;
let b=10;
let c=a;
a=b;
b=c;
console.log(a,b);


//using +and- and *and/

a=(b+a)-a;;
b=(a+b);
console.log(a,b);

a=a*b/a;
b=a*b/(a/2);
console.log(a,b);
## Author

- [@Akshay G Gouda](https://github.com/akshaygouda0707)


# String
The String object is used to represent and manipulate a sequence of characters.

```
let name="Akshay";
console.log(typeof name);
console.log(name[0]);
console.log(name.charAt(0))
console.log(name[7]);
console.log(name.charAt(7))
```

Output:
```
string
A
A
undefined

```

### String Methods: charAt, toUpperCase, toLowerCase, includes, startsWith, endsWith
- charAt

It is used to get the character at the perticular index.

- syntax
```
variableName.charAt(index);
```
```
let counrty="India";
console.log(counrty.charAt(3));
```
- toUpperCase

syntax:
```
variableName.toUpperCase();
```
- toLowerCase

syntax:
```
variableName.toLowerCase();
```
- includes

It will check if the given charcharter or string value is prenet in our variable.If present  return true else return false.
```
let msg="Hello my name is Akshay";
console.log(msg.includes("Akshay"));
console.log(msg.includes("Raj"));


output:
true
false
```

- startsWith and endsWith:

it will check whether the given sting is starts or ends with the value given to that function or not.

```
let msg="Hello my name is Akshay";
console.log(msg.endsWith("Aks"));
console.log(msg.startsWith("Hi"));
```

### String Methods: Search, IndexOf, lastIndexOf

- search,IndexOf
It will search for the element when it is found written the index.

```
let mymsg="hi my name is hi AK";
console.log(mymsg.search("hi"));
console.log(mymsg.indexOf("hi"));
```
- lastIndexOf

It will search for the last index of the elment
```
let mymsg="hi my name is hi AK";
console.log(mymsg.lastIndexOf("hi"));

output:
14
``` 
###  String Methods: toString, Concat, split
- toString
convert number into String.

```
let num=123;
console.log(num.toString());
console.log(typeof num.toString());
```
- Concat

It is used to concatination operation.It is possible only when of the varaible is String .

```
let num1=10;
let num2=10;
console.log(num1.toString().concat(num2));

let name="Akshay";
let sname="Gowda";
console.log(name.concat(sname));

```

- split
used to split the string to an array.

```
let msgs="Hi Akshay where are u from";
console.log(msgs.split(" "));
```
```
output:
[ 'Hi', 'Akshay', 'where', 'are', 'u', 'from' ]
```
```
console.log(msgs.split(""));
```
```
Output:
[
  'H', 'i', ' ', 'A', 'k', 's',
  'h', 'a', 'y', ' ', 'w', 'h',
  'e', 'r', 'e', ' ', 'a', 'r',
  'e', ' ', 'u', ' ', 'f', 'r',
  'o', 'm'
]
```
```
console.log(" ,");
```
```
output:
[ 'Hi Akshay where are u from' ]
```

### String Methods: slice, subStr, subString
- slice,subString
It will be used to get the perticular part of the sting.

In below example..2nd parametere treated as index

```
let msgs="Hi Akshay where are u from";
console.log(msgs.slice(0,7));
console.log(msgs.slice(2));
console.log(msgs.subString(0,3));
```
```
output:
Hi Aksh
 Akshay where are u from
```
## 🔗 Social Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/akshay-g-gouda-1bb424202)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/Akshayg77841279)

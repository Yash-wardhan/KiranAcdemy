/*

 & . It is open source scripting language

 & . and its run in client side 

 & . node is run time environment of Javascript

 * its support all chrome(V8 engine JS),internet explore

1.Js is a weakly typed language

2.js is an object based programming language 

3.js is a light weighted and interpreted language(it run code fully)

4.js is a case sensitive language

5.Programming lang that use prototype rather than using classes for inheritance.

it compat.  various os like window , linux , macos 

1Q.)java and javascript?
Answer : Both are different programming language . Java is run only sever side(Java is sever side programming language ) but in javaScripts is
a scripting and interpreted language and run client side and server side rendering 


Javascript Version

It is invented 1995 but EMCAScript standard in the year 1997 ES5 And ES6

Currently version in EMCAScript 14

array descrition
var [c1,c2,c3] = color

*/



var names = ["John","Blake","Scott","Martin","doe"]

for(var i = 0; i<names.length ; i++){
    document.write(names[i] + "<br>")
}

document.write(`Array Methods`)
document.write(names.length+"<br>")  //object or properties
document.write("{"+names.reverse()+"}")
names.push("Yash")
document.write(names)
names.pop()  //and last from remove
document.write(names)
names.shift("Yash")  //shift is remove from first
console.log(names)
document.write(names)

names.splice(2,0,"ram","julies") //start | delete count | added items1 | item 2
console.log(names)

let arr1 = [1,2,3,4,5]
let arr2 = [,6,7,8,9,10]

console.log((arr3  = arr1+ arr2))


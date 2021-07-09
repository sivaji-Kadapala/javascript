//Function with Parameters
function greet1(name) {
  console.log("Hello " + name); //Hello sivaji
}

greet1("sivaji"); //function calling
//function with no parameters
function qspiders() {
  console.log("sivaji"); //sivaji
}
qspiders();
//Add Two Numbers
function add(a, b) {
  console.log(a + b); //5,8
}

add(2, 3); //5
add(3, 5); //8
//Function Return
function sub(a, b) {
  return a - b;
}
console.log(sub(2, 1)); //printing with function calling,output is 1
//Function Expressions
let x = function (num) {
  return num * num;
};
console.log(x(4));
let z = function (num) {
  return num * num;
};
console.log(z(9));
let y = x(5);
console.log(y); //5
//global scope
var a = "Hello";
function greet() {
  a = 3;
}
console.log(a); //outside of the variable hello is printed
greet();
console.log(a); //hello
//local scope
var a = "hello";

function greet() {
  var b = "World";
  console.log(a + b); //hello world
}

greet();
//console.log(a + b); // error,because b is having local scope

a = 5;
console.log(a);
var a; // 5
(function () {
  var $ = "jquery";
  console.log($);
})();
(function () {
  var $ = "React";
  console.log($);
})();
hoisted();
function hoisted() {
  console.log("foo");
}
hoisted();
var hoisted = function () {
  console.log("foo1");
};
//hoisting error ,why because hoisting not allow the let keyword
// hoisted();
// let  hoisted=function (){
//     console.log("foo2");
// }
function user(name, age) {
  console.log(name, age);
}
user("sivaji", 24);
function user(name, age) {
  return { name, age };
}
console.log(user("kadapala", 25));
function add() {
  return arguments;
}
console.log(add(22, 25));
//default parameters in javaScript
function Jspiders(x = 10, y = 10) {
  return x + y;
}
console.log(Jspiders());
function Jspiders1(x, y) {
  return x + y;
}
console.log(Jspiders1());
//Arrow function
var hello = () => {
  return "hello world";
};
console.log(hello());
let users = (username) => username;
console.log(users("sivaji"));
let users2 = (_) => console.log("iam a arrow function");
users2();
//Arrow function with return object
// let users3 = (name, age) => {
//   name, age;
// };
// console.log(users3("sivaji", 25))(
  //IIFE
  let demo=(function (a,b) {
    return a+b;
  })(7,5);
console.log(demo);
//IIFE
let msg=(function(){
  let name="Sivaji";
  return name;
})();
console.log(msg);
//----------------
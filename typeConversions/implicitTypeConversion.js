// implicit typeonversion to String
// numeric string used with + gives string type
var result;

result = '3' + 2; 
console.log(result) // "32"

result = '3' + true; 
console.log(result); // "3true"

result = '3' + undefined; 
console.log(result); // "3undefined"

result = '3' + null; 
console.log(result); // "3null"
// numeric string used with - , / , * results number type

var result;

result = '4' - '2'; 
console.log(result); // 2

result = '4' - 2;
console.log(result); // 2

result = '4' * 2;
console.log(result); // 8

result = '4' / 2;
console.log(result); // 2
//non numeric String used with +,-,/,* results to NaN
var result;
result="Hello"-"world";
console.log(result);
result="hello"*"world";
console.log(result);
result="2"/"world";
console.log(result);
result="2"+4;
console.log(result);
result="2"+"5";
console.log(result);
// if boolean is used, true is 1, false is 0

var result;

result = '4' - true;
console.log(result); // 3

result = 4 + true;
console.log(result); // 5

result = 4 + false;
console.log(result); // 4
result=4*true;
console.log(result);
result=4/true;
console.log(result);
// null is 0 when used with number
var result;

result = 4 + null;
console.log(result);  // 4

result = 4 - null;
console.log(result);  // 4
result=null*4;
console.log(result);
result=null/4;
console.log(result);
// Arithmetic operation of undefined with number, boolean or null gives NaN

var result;

result = 4 + undefined;
console.log(result);  // NaN

result = 4 - undefined;
console.log(result);  // NaN

result = true + undefined;
console.log(result);  // NaN

result = null + undefined;
console.log(result);  // NaN
result=2*undefined;
console.log(result);//NaN
result=null/2;
console.log(result);//0

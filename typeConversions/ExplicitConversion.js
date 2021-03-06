var result;

// string to number
result = Number('324');
console.log(result); // 324

result = Number('324e-1')  
console.log(result); // 32.4

// boolean to number
result = Number(true);
console.log(result); // 1

result = Number(false);
console.log(result); // 0
// empty strings and null values return 0. 
var result;
result = Number(null);
console.log(result);  // 0

var result = Number(' ')
console.log(result);  // 0
// If a string is an invalid number, the result will be NaN
var result;
result = Number('hello');
console.log(result); // NaN

result = Number(undefined);
console.log(result); // NaN

result = Number(NaN);
console.log(result); // NaN
// You can also generate numbers from strings using parseInt(), parseFloat(), unary operator + and Math.floor(). For example,
var result;
result = parseInt('20.01');
console.log(result); // 20

result = parseFloat('20.01');
console.log(result); // 20.01

result = +'20.02';
console.log(result); // 20.01

result = Math.floor('20.01');
console.log(result); // 20
result = Math.ceil('20.06');
console.log(result); // 21
// To convert other data types to strings, you can use either String() or toString()
//number to string
var result;
result = String(324);
console.log(result);  // "324"

result = String(2 + 4);
console.log(result); // "6"

//other data types to string
result = String(null);
console.log(result); // "null"

result = String(undefined);
console.log(result); // "undefined"

result = String(NaN);
console.log(result); // "NaN"

result = String(true);
console.log(result); // "true"

result = String(false);
console.log(result); // "false"

// using toString()
result = (324).toString();
console.log(result); // "324"

result = true.toString();
console.log(result); // "true"
// result=null.tostring();toString() gives error when null are passed
// console.log(result);
// Convert to Boolean Explicitly
// To convert other data types to a boolean, you can use Boolean().

// In JavaScript, undefined, null, 0, NaN, '' converts to false
var result;
result = Boolean('');
console.log(result); // false

result = Boolean(0);
console.log(result); // false

result = Boolean(undefined);
console.log(result); // false

result = Boolean(null);
console.log(result); // false

result = Boolean(NaN);
console.log(result); // false
// All other values give true
result = Boolean(324);
console.log(result); // true

result = Boolean('hello');
console.log(result); // true

result = Boolean('');
console.log(result); // false
result = Boolean(' ');
console.log(result); // true
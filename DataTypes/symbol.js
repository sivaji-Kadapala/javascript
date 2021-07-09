//This data type was introduced in a newer version of JavaScript (from ES2015).

//A value having the data type Symbol can be referred to as a symbol value. Symbol is an immutable primitive value that is unique.
const value1 = Symbol('hello');
const value2 = Symbol('hello');

console.log(value1 === value2);//false
// creating symbol
const x = Symbol()

console.log(typeof x); // symbol
const x1 = Symbol('hey');
console.log(x1); // Symbol(hey)
//Access Symbol Description
console.log(x1.description); //hey
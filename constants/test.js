//
const x = 5;
console.log(x);
const x = 5;
x = 10;  // Error! constant cannot be changed.
console.log(x);
const x;  // Error! Missing initializer in const declaration.
x = 5;
console.log(x);
var y=10;                                 
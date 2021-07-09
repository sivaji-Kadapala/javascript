const numbers=[1,2,3,4,5];
const deleted=numbers.splice(2,3,6,7);
console.log(numbers);
console.log(deleted);
const deleted1=numbers.splice(2,0,6,7,10,100);
console.log(numbers);
console.log(deleted1);



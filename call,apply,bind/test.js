let obj={
    num:19,
};
function addNumbers(a,b,c){
    return this.num+a+b+c;
}
console.log(addNumbers.call(obj,100,50,11));
console.log(addNumbers.apply(obj,[100,50,11]));
let result=addNumbers.bind(obj,[100,50,11]);
console.log(result());
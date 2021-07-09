//hoisting  is mutually exchanging the order
//hoisting is  move the declarations the top
//varibles can be used before variable declaration and intializations
getname();
console.log(x);
console.log(y);
console.log(z);
function getname()
{
    console.log("Namasthe sivaji");
}
var x=10;
//let keyword does not support hoisting 
let y=10;
//const keyword does not support hoisting 
const z=10;
//Functions
function add(a,b){
   console.log(a+b);
}

add(1,2)
//A number type can also be +Infinity, -Infinity, and NaN (not a number). 
const number1 = 3/0;
console.log(number1); // returns Infinity
const number2 = -3/0;
console.log(number2); // returns -Infinity
// strings can't be divided by numbers
const number3 = "abc"/3; 
console.log(number3);  // returns NaN
const num1=10;
const num2=10.2;
console.log(num1);
console.log(num2);
console.log(typeof num1);
console.log(typeof num2);
//number typecasting
var num4="10";
console.log(num4);
console.log(typeof num4);
//type casting
var convertNum=Number(num4);
console.log(convertNum+10);
var num5=Number("sivaji");
console.log(num5);//Nan
var num6="10";
var num7="20";
console.log(Number(num6)+Number(num7));//30
var num8="10";
var num9="20.2";
//Using inbuilt function for typecasting like parseInt
console.log(parseInt(num8)+parseInt(num9));//30
console.log(parseInt(num8)+parseFloat(num9));//30.2
var num10=parseInt("sivaji");
console.log(num10);//Nan
//if block
if(isNaN(num10))//isNaN is built-in function ,whether it is NaN or not ,output is "It is not a number"
{
    console.log("It is not a number");//It is not a number
}else{
console.log("It is a number");//It is  a number
}







function areaOfCircle(pi,r){
    return pi*r*r;
}
function calculate(num1,num2,cal2cType){
    return calc2Type(num1,num2)
}
console.log(calculate(3.14,1,areaOfCircle));
// without call back
function calculate(num1,num2,calTyp){
    if(calTyp=='areaOfRectangle'){
        return num1*num2;
    }
};
console.log(10,20,'areaOfRectangle');
//
function ReactJs(){
    console.log("Iam react js,if you want to learn react js,then you first want to learn javaScript");
}
function javaScript(callback){
    return callback();
}
// console.log(javaScript(ReactJs));
// function add(a,b){
//     return a+b;
// }
function mul(a,b,c){
    return a*b*c;
}
function calculate(num1,num2,num3,callback){
    return callback(num1,num2,num3)
}
// console.log(calculate(10,20,add));
console.log(calculate(10,20,30,mul));
//--------------
function sample(a){
    a();
    console.log("inner function");
}
sample(function(){
    console.log('')
})
//fun interesting point
function test()
{
    console.log("test");
}
function demo()
{
    console.log("demo");
    return test;
}
function sample(){
    console.log('sample');
    return demo;
}
// var value=sample();
// console.log(sample());
// value();
sample()()();
sample()
//function as argument
function sample1(a,b)//
{
    a();
    b();
}
function demo1(){
    console.log("demo called");//call back
}
function demo2(){
    console.log("test called");
}
sample1(demo1,demo2);
//---------------------------------------
// Callback Function Example
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);
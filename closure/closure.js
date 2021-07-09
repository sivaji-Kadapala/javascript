function outer(){
    var outerText="Iam OuterText here";
    function innerFunction(){
        var innerBlock="iam inner Block";
        function innerInnerBlock(){
            console.log(outerText);
            console.log(innerBlock);
        }
        return innerInnerBlock;
 
   }
   return innerFunction;
}
outer();
//function demo
function outerdemo(){
    var msg='sivaji';
console.log("Inside a outer function");
inner();
function inner()
{
    console.log(msg);
    console.log("inside a inner function");
}
}
outerdemo();
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
//-----------------------
// function
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
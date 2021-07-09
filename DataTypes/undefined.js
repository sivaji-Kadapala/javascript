let name;
console.log(typeof name); // returns undefined because it is only declaration ,not intializing anyvalue to the variable
name="sivaji";
var username;
if(username===undefined){
    console.log('Iam undefined');
}
else{
    console.log('Iam have value');
}
var username1;
if(typeof username1==='undefined'){
    console.log('Iam undefined');
}
else{
    console.log('Iam have value');
}
//if condition only global scope except functions
if(true){
    var x=10;
}
console.log(x);
//functions are only support local scope
var username4="sivaji";
function jspiders(){
    var company="jspiders";
    console.log(username4);
    console.log(company);

}
jspiders();
//let overcome the global scope in if condition
if(true){
    let x1=20;
}
console.log(x1);
console.log(null==undefined);//true
console.log(null===undefined);//false
console.log(null==null);//true
console.log(null===null);//true
console.log(undefined==undefined);//true
console.log(undefined===undefined);//true
console.log(isNaN(null+1));
console.log(isNaN(1+null));
console.log(isNaN(1+undefined));
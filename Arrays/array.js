let languages=["java",[[["javaScript"]]],[[["nodeJs"]]],"reactJs","angular",[["fireBase"]]];
//flat
console.log("Before flat",languages)
let result=languages.flat(Infinity);
result.forEach (x=>console.log(x))
let c2="js2";
let c1="java1";
let c3="python5";
let result5=(c1,c2,c3);
console.log(result5);
var str="Hello";
console.log(str);
var convertStringToArray=str.split("");
console.log(convertStringToArray);
let user1=["Sivaji"];
let user2=["kadapala"];
let user3="manu";
let user4=user3.split(" ");
let result7=[...user1,...user2,...user4];
console.log(result7);
//reverse String
let word="sivaji";
let wordToarray=[...word];
let revWord=wordToarray.reverse();
console.log(revWord);
let joinWord=revWord.join();
console.log(joinWord);
//reverse String with one line
var str="kadapala";
let reverseIt=[...str].reverse().join("");
console.log(reverseIt);
////reverse String with function
function reverseFunction(Str){
  return [...str].reverse().join("");  
}
console.log("Chethana");




var numbers=[1,2,3,4,5,6,7];
var result=numbers.filter(function(number,index) {
   return index>=4;
});
console.log(result);
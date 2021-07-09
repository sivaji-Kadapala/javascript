var arr=[1,2,3,4,5,,false,{age:24}]
arr.name="sivaji";
for (x in arr)
{
    console.log(arr[x]);
}
console.log("-----")
var arr1=[23,23.5,"hello",,false,{age:24}];
arr1.name="sivaji";
for(var i=0;i<arr1.length;i++)
{
    console.log(arr1[i]);
}
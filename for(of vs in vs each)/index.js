let a=[1,2,3];
a[3]=4;
a['five']=5;
for(let i=0;i<a.length;i++)
{
    if(a[i]=='2'){
 break;
    }
   
    console.log(a[i]);
}
a.forEach(a1=>console.log(a))
for(aid in a)
{
    console.log(aid);//printing indexes only
    console.log(a[aid]);//printing elements
}
for(a1 of a){
    console.log(a1);
}
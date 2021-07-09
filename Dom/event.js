let template=document.getElementById("template");
console.log(template);
template.onclick=function() 
{
    console.log("hey template play music");
    this.textContent="iam playing........";
};
template.onmousemove=function()
{
    this.textContent="music playing..............";
};
template.onmouseleave=function(){
this.textContent="music stoppped";    
};
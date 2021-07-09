let username=document.getElementById("username");
let password=document.getElementById("password");
let form=document.getElementById("form");
let errorBlock=document.getElementById("errorBlock");
//submit event
form.addEventListener("submit",e => {
    let errorMessages=[];
    e.preventDefault();
    var name=username.Value;
     var pwd=password.Value;
     console.log(name);
     console.log(pwd);
    if(name===""||name===null)
{
    errorMessages.push("username is required");
}
if(pwd===""||pwd===null)
{
    errorMessages.push("password is required");
}
//checking errors
if(errorMessages.length>0)
{
   errorBlock.innerHTML=errorMessages.join("");}
else{
    console.log(name);
    console.log(pwd);
}
if(pwd.length<=6)
{
     errorMessages.innerHTML=errorMessages.join("<br />");
}
else{
    alert(``)
}
});

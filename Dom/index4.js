let username=document.getElementById("username");
console.log(username);
username.addEventListener("keyup",e=> {
    
    console.log(e.target.value);
});
let textarea=document.getElementById("textarea");
let textClone=document.getElementById("textClone");
textarea.addEventListener("keyup",e=> {
    let result=e.target.value;
    textClone.innerHTML=result;
    if(result.length>20)
    {
        document.body.innerHTML=`<img src="`
});
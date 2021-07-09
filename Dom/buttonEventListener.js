let btn=document.getElementById("btn");
btn.addEventListener("click",event=> {
    let changeText=event.target.classList.toggle("active");
    console.log(changeText);
    if(changeText===true)
    {
        
        event.target.innerHTML="successfully submitted";
       
        event.target.className="btn btn-success active";


    }else{
        event.target.innerHTML="login";
       
        event.target.className="btn btn-danger";
    }
});
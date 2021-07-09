let template=document.getElementById("template");
        
        template.addEventListener("click",event=>{
            console.log("Iam eventListener");
            console.log(event.target);
            console.log(event.type);
            console.log(this);
            console.log(event.clientX);
            console.log(event.clientY);
        });
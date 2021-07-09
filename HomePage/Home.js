let lists = document.querySelectorAll("li");

    let form = document.getElementById("form");
    let input = document.getElementById("input");

    form.addEventListener("submit",e =>{
        e.preventDefault();
        let item = input.Value;
    });
    for( let list of lists) {
let btn = document.createElement("button");
    btn.classList.add("btn" , "btn-danger" , "btn-sn" , "float-right");
    btn.textContent="Remove";
     list.appendChild(btn)
        btn.addEventListener("click", e => {
            console.log(e.target);
            //list.remove();
            btn.parentElement.remove();
        })
    }
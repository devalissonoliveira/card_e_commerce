let btnAddCancel = document.querySelector(".btn-add");
let iconAddCancel = document.querySelector(".material-symbols-outlined");


function addCancel(){
    if (iconAddCancel.classList.contains("cancel")){
    iconAddCancel.classList.remove("cancel")
    iconAddCancel.innerText = "add_circle";
    } else{
        iconAddCancel.classList.add("cancel")
        iconAddCancel.innerText = "cancel";
    }
}


btnAddCancel.addEventListener("click", addCancel);
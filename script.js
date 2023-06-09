const subTituloTenisContainer = document.querySelector(".sub-titulo-tenis-container");
const subTituloTenisContainerOriginal = subTituloTenisContainer.innerHTML;

const subTituloTenis = document.querySelector(".sub-titulo-tenis");

const btnAddCancel = document.querySelector(".btn-add");
const iconAddCancel = document.querySelector(".material-symbols-outlined");

function precoOver(){
    subTituloTenisContainer.innerHTML = `<p class="preco">R$ 279,00</p>`;
}

function DevolverSubTituloTenis(){
    subTituloTenisContainer.innerHTML = `${subTituloTenisContainerOriginal}`;
}

iconAddCancel.addEventListener("mouseover", precoOver);
iconAddCancel.addEventListener("mouseout", DevolverSubTituloTenis);

function addCancel(){
    if (iconAddCancel.classList.contains("cancel")){
        iconAddCancel.classList.remove("cancel");
        iconAddCancel.innerText = "add_circle";
    } else{
        iconAddCancel.classList.add("cancel");
        iconAddCancel.innerText = "cancel";
    }
}

btnAddCancel.addEventListener("click", addCancel);
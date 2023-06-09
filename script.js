const body = document.querySelector("body");
const selecaoCor = document.querySelectorAll(".selecao-cor");

const subTituloTenisContainer = document.querySelector(".sub-titulo-tenis-container");

const imagemTenisContainer = document.querySelector(".imagem-tenis-container");

const subTituloTenis = document.querySelector(".sub-titulo-tenis");
const preco = document.querySelector(".preco");

const btnAddCancel = document.querySelector(".btn-add");
const iconAddCancel = document.querySelector(".material-symbols-outlined");


// FUNÇÕES E EVENTOS DA SELEÇÃO DE COR
function mudarCorTenisAzul(){
    body.style.backgroundColor = "#5ec8cd";
    subTituloTenis.innerText = "BLUE";
    iconAddCancel.classList.remove("cancel");
    iconAddCancel.innerText = "add_circle";
    iconAddCancel.classList.remove("colorRoxo");
    iconAddCancel.classList.remove("colorVermelho");  
    iconAddCancel.classList.add("colorAzul");
    imagemTenisContainer.innerHTML = `<img class="imagem-tenis" src="./imagens/tenisAzul.png" alt="Tenis Azul">`;
    
}

function mudarCorTenisRoxo(){
    body.style.backgroundColor = "#7a5ab9";
    subTituloTenis.innerText = "PURPLE";
    iconAddCancel.classList.remove("cancel");
    iconAddCancel.innerText = "add_circle";
    iconAddCancel.classList.remove("colorAzul");
    iconAddCancel.classList.remove("colorVermelho");  
    iconAddCancel.classList.add("colorRoxo");
    imagemTenisContainer.innerHTML = `<img class="imagem-tenis" src="./imagens/tenisRoxo.png" alt="Tenis Azul">`;
}

function mudarCorTenisVermelho(){
    body.style.backgroundColor = "#db3842";
    subTituloTenis.innerText = "RED";
    iconAddCancel.classList.remove("cancel");
    iconAddCancel.innerText = "add_circle";
    iconAddCancel.classList.remove("colorAzul");
    iconAddCancel.classList.remove("colorRoxo");  
    iconAddCancel.classList.add("colorVermelho");
    imagemTenisContainer.innerHTML = `<img class="imagem-tenis" src="./imagens/tenisVermelho.png" alt="Tenis Azul">`;
}

selecaoCor[0].addEventListener("click", mudarCorTenisAzul);
selecaoCor[1].addEventListener("click", mudarCorTenisRoxo);
selecaoCor[2].addEventListener("click", mudarCorTenisVermelho);


// FUNÇÕES E EVENTOS DO BOTÃO DE ADICIONAR A COMPRA
function precoOver(){
    subTituloTenis.classList.add("display-none");
    preco.classList.remove("display-none");
}

function DevolverSubTituloTenis(){
    subTituloTenis.classList.remove("display-none");
    preco.classList.add("display-none");
}

btnAddCancel.addEventListener("mouseover", precoOver);
btnAddCancel.addEventListener("mouseout", DevolverSubTituloTenis);

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
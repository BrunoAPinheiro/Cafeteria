const modal = document.querySelector (".modal")
const mascara = document.querySelector (".mascara-modal")
const menu = document.getElementById ("menu-recolher")


function mostrarModal() {
    document.querySelector('.modal').style.visibility = 'visible';
    document.querySelector('.modal').style.opacity = '1';
    document.querySelector('.mascara-modal').style.visibility = 'visible';
    document.querySelector('.mascara-modal').style.opacity = '1';
}

function esconderModal() {
    document.querySelector('.modal').style.visibility = 'hidden';
    document.querySelector('.modal').style.opacity = '0';
    document.querySelector('.mascara-modal').style.visibility = 'hidden';
    document.querySelector('.mascara-modal').style.opacity = '0';
}

//Função para recolher o menu
function recolherMenu(){
    const menu = document.getElementById("nav-menu");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

//fecha o menu quando o clique for fora do menu ou do botão de hambúrguer
document.addEventListener("click", function (clickNoBody){
    const menu = document.getElementById("nav-menu");
    const menuRecolher = document.getElementById("menu-recolher");

//Verifica se o clique foi fora do menu e do botão hambúrguer
    if (!menu.contains(clickNoBody.target) && !menuRecolher.contains(clickNoBody.target)) {
        menu.style.display = "none"; //fecha o menu
    }
});

// Fecha o modal se o clique for fora do iframe (dentro do modal)
mascara.addEventListener("click", esconderModal);
// Verifica se o clique foi fora do iframe dentro do modal
modal.addEventListener("click", function (clickNoBody){

    if (!clickNoBody.target.closest("iframe")) {
        esconderModal();
    }
});
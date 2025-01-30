const modal = document.querySelector (".modal")
const mascara = document.querySelector (".mascara-modal")


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

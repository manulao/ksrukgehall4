// Función para mostrar el pop-up con el texto correspondiente
function mostrarPopup(texto) {
    document.getElementById('popup-texto').textContent = texto;
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

// Función para ocultar el pop-up
function ocultarPopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}
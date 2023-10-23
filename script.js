// Obtén referencias a los elementos del DOM
var openModalButton = document.getElementById('openModalButton');
var miModal = document.getElementById('miModal');
var cerrarModal = document.getElementById('cerrarModal');

// Abrir el modal al hacer clic en el botón
openModalButton.addEventListener('click', function() {
  miModal.style.display = 'block';
});

// Cerrar el modal al hacer clic en la "X" (cerrar)
cerrarModal.addEventListener('click', function() {
  miModal.style.display = 'none';
});

// Cerrar el modal al hacer clic en cualquier área fuera del modal
window.addEventListener('click', function(event) {
  if (event.target === miModal) {
    miModal.style.display = 'none';
  }
});

// Obtén una referencia al elemento del título
var titulo = document.querySelector('.cambio-color-titulo');

// Colores para el cambio
var colores = ['#FF00FF', '#00FFFF', '#0000FF', '#FF0000'];
var colorIndex = 0;

// Cambiar el color del título cada 2 segundos
setInterval(function() {
  titulo.style.color = colores[colorIndex];
  colorIndex = (colorIndex + 1) % colores.length;
}, 2000);
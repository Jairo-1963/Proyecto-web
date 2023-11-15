// Opcional: Agrega este código si deseas inicializar el carrusel utilizando JavaScript
const carousel = document.querySelector('#carouselExampleControls');
const carouselInstance = new bootstrap.Carousel(carousel, {
  interval: 5000 // Cambia el intervalo para cambiar automáticamente las tarjetas (opcional)
});
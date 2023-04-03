const slides = document.querySelectorAll(".carrusel-slide");
const intervalo = 5000; // Cambiar imagen cada 5 segundos

let indice = 0;
setInterval(() => {
  slides[indice].classList.remove("active");
  indice++;
  if (indice === slides.length) {
    indice = 0;
  }
  slides[indice].classList.add("active");
}, intervalo);
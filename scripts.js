// scripts.js

document.addEventListener('DOMContentLoaded', (event) => {
  const popup = document.getElementById('newsletterPopup');
  const closeBtn = document.querySelector('.close-btn');
  const form = document.getElementById('newsletterForm');

  // Funzione per mostrare il popup
  function showPopup() {
    popup.style.display = 'flex';
  }

  // Funzione per nascondere il popup
  function closePopup() {
    popup.style.display = 'none';
  }

  // Mostra il popup dopo un ritardo di 2 secondi
  setTimeout(showPopup, 2000);

  // Chiudi il popup quando si clicca sul pulsante di chiusura
  closeBtn.addEventListener('click', closePopup);

  // Chiudi il popup quando si invia il form
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Grazie per esserti iscritto!');
    closePopup();
  });

  // Chiudi il popup se si clicca fuori dal contenuto del popup
  window.addEventListener('click', (e) => {
    if (e.target === popup) {
      closePopup();
    }
  });
});
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
}
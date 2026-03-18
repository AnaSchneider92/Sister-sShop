// ➤ SLIDER AUTOMÁTICO
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';
}

// Alterna para a próxima imagem
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Inicializa
showSlide(currentSlide);
setInterval(nextSlide, 3000); // troca a cada 3 segundos

// Inicializa
showSlide(currentSlide);
setInterval(nextSlide, 3000);

// ➤ ANIMAÇÃO NOS PRODUTOS
const cards = document.querySelectorAll('.product-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = "scale(1.05)";
        card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "0 3px 10px rgba(0,0,0,0.1)";
    });
});
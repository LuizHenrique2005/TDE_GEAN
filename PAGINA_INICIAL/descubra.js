let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function showImage(index) {
    images[currentIndex].classList.remove('active');
    currentIndex = (index + images.length) % images.length;
    images[currentIndex].classList.add('active');
}

function prevSlide() {
    showImage(currentIndex - 1);
}

function nextSlide() {
    showImage(currentIndex + 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showImage(currentIndex); // Garante que a primeira imagem seja exibida ao carregar
});

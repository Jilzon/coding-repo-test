const slider = document.querySelector('.slider');
const dotsContainer = document.querySelector('.slider-dots-container');
let currentIndex = 0;
let intervalId;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');

    if (index < 0 || index >= slides.length) return;

    slides[currentIndex].style.display = 'none';
    slides[index].style.display = 'flex';

    dots[currentIndex].classList.remove('active');
    dots[index].classList.add('active');

    currentIndex = index;
}

function createDots() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        dot.addEventListener('click', () => showSlide(index));
        dotsContainer.appendChild(dot);
    });
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function startAutoSlide() {
    intervalId = setInterval(nextSlide, 4000);
}

function stopAutoSlide() {
    clearInterval(intervalId);
}

createDots();
showSlide(currentIndex);
startAutoSlide();

slider.addEventListener('mouseenter', stopAutoSlide);
slider.addEventListener('mouseleave', startAutoSlide);

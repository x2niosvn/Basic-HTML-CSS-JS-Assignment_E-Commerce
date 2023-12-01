let currentIndex = 0;
let interval;

function showSlide(index) {
    const slides = document.getElementById("slides");
    const slideWidth = document.querySelector(".slide").clientWidth;

    if (index < 0) {
        currentIndex = slides.childElementCount - 1;
    } else if (index >= slides.childElementCount) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    slides.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function startAutoSlide() {
    interval = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
    clearInterval(interval);
}

window.onload = startAutoSlide;
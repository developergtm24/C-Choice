function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}


let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.review-box');
    const totalSlides = slides.length;

    slideIndex += step;

    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }

    // Move the slider
    const slider = document.querySelector('.review-slider');
    const offset = -slideIndex * 320; // Adjust based on the width of each box (300px + gap)
    slider.style.transform = `translateX(${offset}px)`;
}

// Optional: Auto-slide every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);
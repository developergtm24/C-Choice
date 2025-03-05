const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const navLinks = document.getElementById('nav-links');

// Open the navbar
menuIcon.addEventListener('click', () => {
  navLinks.classList.add('open');
  closeIcon.classList.add('show');
  menuIcon.style.display = 'none'; // Hide hamburger icon when navbar is open
});

// Close the navbar
closeIcon.addEventListener('click', () => {
  navLinks.classList.remove('open');
  closeIcon.classList.remove('show');
  menuIcon.style.display = 'block'; // Show hamburger icon when navbar is closed
});


// Animated Text
const words = ["Keyboard", "Mouse", "Monitor", "Headset"];
let currentWordIndex = 0;
const animatedTextElement = document.querySelector(".animated-text");

function changeWord() {
    animatedTextElement.style.opacity = 0;
    setTimeout(() => {
        animatedTextElement.textContent = words[currentWordIndex];
        animatedTextElement.style.opacity = 1;
        currentWordIndex = (currentWordIndex + 1) % words.length;
    }, 500); // Delay for fade effect
}

setInterval(changeWord, 2000); // Change word every 2 seconds

// Category Filter Functionality
const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        // Add active class to clicked button
        button.classList.add("active");

        const category = button.getAttribute("data-category");

        // Filter products
        productCards.forEach((card) => {
            if (category === "all" || card.getAttribute("data-category") === category) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

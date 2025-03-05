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

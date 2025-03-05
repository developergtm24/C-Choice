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

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Simulate sending data to the server
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    // Show success message
    document.getElementById("successMessage").style.display = "block";

    // Clear form fields
    document.getElementById("contactForm").reset();

    // Hide success message after 3 seconds
    setTimeout(() => {
        document.getElementById("successMessage").style.display = "none";
    }, 3000);
});
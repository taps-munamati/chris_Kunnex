// Simple cart alert for now
document.querySelectorAll(".product-card button").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Product added to cart!");
    });
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
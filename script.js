// Smooth Scroll Functionality for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add functionality to toggle the mobile menu
const nav = document.querySelector('nav');
const toggleButton = document.createElement('button');
toggleButton.className = 'mobile-menu-toggle';
toggleButton.innerHTML = '☰';
nav.insertBefore(toggleButton, nav.firstChild);

toggleButton.addEventListener('click', function() {
    const ul = nav.querySelector('ul');
    ul.classList.toggle('visible');
});

document.addEventListener('scroll', function() {
    // Example effect: change opacity based on scroll position
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const opacity = Math.max(0, 1 - (rect.top / window.innerHeight));
        section.style.opacity = opacity;
    });
});

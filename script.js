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

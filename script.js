
window.addEventListener('load', () => {
    alert("Welcome to Barecha Construction!");
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


const serviceIcons = document.querySelectorAll('.services i');
serviceIcons.forEach(icon => {
    icon.style.cursor = 'pointer';
    icon.addEventListener('click', () => {
        icon.style.transform = 'scale(1.2)';
        icon.style.transition = 'transform 0.3s ease';
        setTimeout(() => {
            icon.style.transform = 'scale(1)';
        }, 300);
    });
});


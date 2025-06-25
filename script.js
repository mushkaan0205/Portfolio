// Redirect to project page when checkbox is clicked
function redirectToProjects() {
    const checkbox = document.getElementById("viewProjects");
    if (checkbox.checked) {
        window.location.href = "project.html";
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.backgroundColor =
        window.scrollY > 50
            ? 'rgba(10, 10, 10, 0.98)'
            : 'rgba(10, 10, 10, 0.95)';
});

// Reveal timeline blocks on scroll
function revealOnScroll() {
    const reveals = document.querySelectorAll('.timeline-block');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('reveal');
        }
    }
}

window.addEventListener('scroll', revealOnScroll);


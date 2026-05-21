
// Smooth Scrolling Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });

});


// Navbar Scroll Effect
window.addEventListener('scroll', () => {

    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 50) {

        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.5)';

    } else {

        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';

    }

});
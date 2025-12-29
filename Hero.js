/* Lógica de HV Medical Supplier - Versión Limpia */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica del Slider
    const slides = document.querySelectorAll('.hero-slide');
    let currentIndex = 0;

    if (slides.length > 0) {
        setInterval(() => {
            // Quitamos 'active' al actual
            slides[currentIndex].classList.remove('active');
            // Pasamos al siguiente
            currentIndex = (currentIndex + 1) % slides.length;
            // Añadimos 'active' al nuevo
            slides[currentIndex].classList.add('active');
        }, 5000); // Cambio cada 5 segundos
    }

    // 2. Scroll Suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // 3. Formulario (Solo si existe el ID en el HTML)
    const form = document.getElementById('form-contacto');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mensaje enviado con éxito.');
            form.reset();
        });
    }
});
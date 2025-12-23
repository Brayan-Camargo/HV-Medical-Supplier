/*Lógica de Multiespecialidades Médicas
  Este archivo maneja la interactividad sin depender de frameworks.
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Manejo del formulario de contacto
    const contactoForm = document.getElementById('form-contacto');
    
    if (contactoForm) {
        contactoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí podrías añadir una lógica de envío real con fetch()
            alert('Gracias por contactar a Multiespecialidades Médicas. En breve un profesional le atenderá.');
            
            this.reset();
        });
    }

    // 2. Scroll suave para los enlaces del menú y botones
    // Selecciona todos los enlaces que apuntan a un ID (#)
    const linksInteriores = document.querySelectorAll('a[href^="#"]');
    
    linksInteriores.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Evitamos errores si el link es solo "#"
            if (targetId !== "#") {
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // 3. (Opcional) Cambio de estilo de la Navbar al hacer Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

});
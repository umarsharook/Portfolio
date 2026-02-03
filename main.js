/* Main JS for Interactions */

document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio Loaded");

    // Typewriter Effect for Hero
    const typeWriterElement = document.getElementById('typewriter');
    const roles = ['Penetration Tester.', 'Python Developer.', 'Network Defender.'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        // Current role
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            // Remove Char
            typeWriterElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50; // Faster deletion
        } else {
            // Add Char
            typeWriterElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 150; // Normal typing
        }

        // Handle Status
        if (!isDeleting && charIndex === currentRole.length) {
            // Finished typing word
            isDeleting = true;
            typeSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            // Finished deleting word
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500; // Pause before next word
        }

        setTimeout(type, typeSpeed);
    }

    // Start Typewriter
    if(typeWriterElement) {
        type();
    }

    // Smooth Scrolling for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // TODO: Add Mobile Menu Toggle logic here
});

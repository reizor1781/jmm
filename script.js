document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const cta = document.querySelector('#main-cta');

    // Smooth hover effect for the container
    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    // Reset transform when mouse leaves
    document.addEventListener('mouseleave', () => {
        container.style.transform = `rotateY(0deg) rotateX(0deg)`;
        container.style.transition = 'all 0.5s ease';
    });

    document.addEventListener('mouseenter', () => {
        container.style.transition = 'none';
    });

    // Button click animation
    cta.addEventListener('click', (e) => {
        // Just a small visual feedback before redirecting
        cta.style.transform = 'scale(0.95)';
        setTimeout(() => {
            cta.style.transform = 'scale(1)';
        }, 100);
    });
});

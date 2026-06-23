document.addEventListener('DOMContentLoaded', () => {
    // Dynamic mini chart values generator in the code showcase preview
    const chartBars = document.querySelectorAll('.mini-chart-bar');
    if (chartBars.length > 0) {
        setInterval(() => {
            chartBars.forEach(bar => {
                const randomHeight = Math.floor(Math.random() * 80) + 15; // random between 15% and 95%
                bar.style.height = `${randomHeight}%`;
            });
        }, 3000);
    }

    // Scroll Fade-in Animation via IntersectionObserver
    const fadeElements = document.querySelectorAll('.fade-in-up');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Once visible, no need to track again
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => fadeObserver.observe(el));

    // IntersectionObserver to rotate/scale mockup screenshot card when entering view
    const showcaseCard = document.querySelector('.product-screenshot-card');
    if (showcaseCard) {
        const showcaseObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.2 });
        showcaseObserver.observe(showcaseCard);
    }

    // Mobile Navigation Menu Toggle (Simple, clean, functional)
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '56px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = 'rgba(1, 1, 2, 0.95)';
                navLinks.style.padding = '20px';
                navLinks.style.borderBottom = '1px solid var(--hairline)';
                navLinks.style.gap = '15px';
                navLinks.style.zIndex = '1000';
            }
        });
    }

    // Dynamic metrics generation simulation
    const apiMetric = document.getElementById('api-speed');
    const mrrMetric = document.getElementById('mrr-growth');
    if (apiMetric && mrrMetric) {
        setInterval(() => {
            const currentSpeed = Math.floor(Math.random() * 8) + 8; // 8ms to 15ms
            apiMetric.textContent = `${currentSpeed}ms`;
        }, 4000);
    }

    console.log('[NEXUS-IO-LOG] Estúdio de Engenharia de Software carregado com sucesso.');
});

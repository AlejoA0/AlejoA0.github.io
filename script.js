document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Movimiento muy sutil en las palabras de color, como un detalle vivo de la página.
if (window.gsap && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  gsap.to('.accent-mint, .accent-lav, .accent-peach', {
    y: -4,
    duration: 2.4,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1,
    stagger: 0.3,
  });

  gsap.to('.skill-group h4, .experience-date', {
    y: -3,
    duration: 2.8,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1,
    stagger: 0.2,
  });

  gsap.to('.tag-list li', {
    y: -2,
    duration: 2.2,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1,
    stagger: 0.08,
  });
}

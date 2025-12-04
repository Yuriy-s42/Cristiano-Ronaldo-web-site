document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.rmacr7_imag, .manutd-photo,.ronaldo-title,.sport-career,.sporting-first,.juve_img');
  const AMPLITUDE = 70;
  const SPEED = 0.01;

  function checkVisibility() {
    images.forEach(image => {
      const imageTop = image.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (imageTop < windowHeight - 100) { 
        image.classList.add('visible');
      }
    });
  }
9
  function applyParallax() {
    images.forEach(image => {
      const offset = Math.sin(window.scrollY * SPEED) * AMPLITUDE;
      image.style.transform = `translateX(${offset}px)`;
    });
  }

  window.addEventListener('scroll', () => {
    checkVisibility();
    applyParallax();
  });

  checkVisibility();
});


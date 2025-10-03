document.addEventListener("DOMContentLoaded", () => {


  // Observador de intersección para animaciones
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll(".footer-section").forEach((section) => {
    observer.observe(section);
  });

  function initHeroSlider() {
    const slides = document.querySelectorAll(".hero-slide");
    let currentSlide = 0;

    slides[0].classList.add("active");

    setInterval(() => {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }, 5000);
  }

  initHeroSlider();
});

// Animación de tarjetas de programas
document.querySelectorAll(".program-card").forEach((card) => {
  let timeoutId;

  card.addEventListener("click", (e) => {
    if (e.target.classList.contains("learn-more")) {
      return;
    }

    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      const randomRotation = Math.random() < 0.5 ? -3 : 3;
      card.style.transform = `scale(1.1) rotate(${randomRotation}deg)`;

      setTimeout(() => {
        card.style.transform = "";
      }, 500);
    }, 50);
  });
});

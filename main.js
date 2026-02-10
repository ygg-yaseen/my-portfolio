document.addEventListener('DOMContentLoaded', () => {
    // Scroll Observer for Fade-up animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-up, .reveal-text');
    revealElements.forEach(el => observer.observe(el));

    // Smooth Scroll for Anchors
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
});


const card = document.querySelector(".summary-card");

card.addEventListener("mousemove", e => {
  const r = card.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top) / r.height - 0.5;
  card.style.transform = `translateY(-8px) rotateX(${y * -2}deg) rotateY(${x * 2}deg)`;
});

card.addEventListener("mouseleave", () => {
  card.style.transform = "translateY(0)";
});


document.querySelectorAll(".exp-toggle").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".exp-card");
    card.classList.toggle("active");
    btn.textContent = card.classList.contains("active")
      ? "Close"
      : "Details";
  });
});




const menuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

if (menuBtn) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      mobileMenu.classList.remove('show');
    });
  }



const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-active");
      }
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll(
  ".experience-card, .history-card, .hero-card"
).forEach(el => observer.observe(el));






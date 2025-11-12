// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Active nav link basert på side
const navLinks = document.querySelectorAll(".nav-link");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPage || (href === "index.html" && currentPage === "")) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

// Product filtering
function filterProducts(category, el) {
  const products = document.querySelectorAll(".feature-card");
  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach((tab) => tab.classList.remove("active"));
  el.classList.add("active");
  products.forEach((product) => {
    if (category === "alle" || product.dataset.category === category) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

// Fade-in IntersectionObserver
const faders = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);
faders.forEach((fade) => observer.observe(fade));
// Mobile menu toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navMenu = document.querySelector(".nav-menu");

mobileMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  mobileMenuBtn.classList.toggle("open");
});
const form = document.getElementById("kontaktForm");
const popup = document.getElementById("popupBekreftelse");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // validering
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // Vis popup kontakt form
  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
  }, 5000);

  // Nullstill skjema
  form.reset();
});

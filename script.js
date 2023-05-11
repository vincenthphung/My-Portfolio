document.addEventListener("DOMContentLoaded", function () {
  /* ====== toggle icon navbar ====== */
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  });

  /* ====== scroll sections active link ====== */
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll('header nav a[href^="#"]');

  window.addEventListener("scroll", () => {
    const top = window.scrollY;
    sections.forEach((sec) => {
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");
      if (top >= offset && top < offset + height) {
        const prevActiveLink = document.querySelector("header nav a.active");
        const currActiveLink = document.querySelector(
          `header nav a[href="#${id}"]`
        );
        if (prevActiveLink !== currActiveLink) {
          prevActiveLink?.classList.remove("active");
          currActiveLink?.classList.add("active");
        }
      }
    });
  });

  /* ====== sticky navbar ====== */
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 100);
  });

  /* ====== remove toggle icon and navbar when click link (scroll) ====== */
  const navLinksArray = Array.from(navLinks);
  navLinksArray.forEach((link) => {
    link.addEventListener("click", () => {
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
    });
  });

  /* ====== scroll reveal ====== */
  ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200
  });

  ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
  ScrollReveal().reveal(
    ".home-img, .services-container, .portfolio-box, .contact form",
    { origin: "bottom" }
  );
  ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
  ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

  /* ====== typed js ====== */
  const typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Shopify Specialist"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
});

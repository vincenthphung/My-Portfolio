AOS.init({
  duration: 1000,
  delay: 500,
  easing: "ease-in-out",
  offset: 120, // Change this value to tweak when animation starts
});

window.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  });

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll('header nav a[href^="#"]');
  const header = document.querySelector("header");
  const contactNavLink = document.querySelector(
    'header nav a[data-section="contact"]'
  );

  window.addEventListener("scroll", () => {
    const top = window.scrollY;

    sections.forEach((sec) => {
      const height = sec.offsetHeight;
      const offset = sec.offsetTop - header.offsetHeight - 150;
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

        if (id === "contact") {
          contactNavLink.classList.add("glow");
        } else {
          contactNavLink.classList.remove("glow");
        }
      }
    });
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
    });
  });

  const typed = new Typed(".multiple-text", {
    strings: [
      "Frontend Developer",
      "Software Engineer",
      "Full Stack Developer",
      "Versatile",
      "Detail-Oriented",
      "Experienced with Agile",
      "Problem-Solver",
      "Collaborative Team Member",
      "Proactive Leader",
      "Efficient Project Manager",
      "Strong Leadership Skills",
      "Excellent Communicator",
    ],
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });

  const typedAbout = new Typed(".about-text", {
    strings: [
      "Passionate about Tech",
      "Innovative Thinker",
      "Collaborative Partner",
      "Results-driven Professional",
      "Dedicated and Committed",
      "Adaptable to Change",
      "Team Player",
      "Critical Thinker",
      "Reliable Colleague",
      "Fast Learner",
      "Skilled Negotiator",
      "Effective Problem Solver",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
  });
});

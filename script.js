// AOS.init({
// 	duration: 500
// });

AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 140, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease-in-out', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});




// document.addEventListener("DOMContentLoaded", function () {
//   /* ====== toggle icon navbar ====== */
//   const menuIcon = document.querySelector("#menu-icon");
//   const navbar = document.querySelector(".navbar");

//   menuIcon.addEventListener("click", () => {
//     menuIcon.classList.toggle("bx-x");
//     navbar.classList.toggle("active");
//   });

//   /* ====== scroll sections active link ====== */
//   const sections = document.querySelectorAll("section");
//   const navLinks = document.querySelectorAll('header nav a[href^="#"]');

//   // window.addEventListener("scroll", () => {
//     // const top = window.scrollY;
//     // sections.forEach((sec) => {
//       // const offset = sec.offsetTop - 150;
//       // const height = sec.offsetHeight;
//       // const id = sec.getAttribute("id");
//       // if (top >= offset && top < offset + height) {
//         // const prevActiveLink = document.querySelector("header nav a.active");
//         // const currActiveLink = document.querySelector(
//           // `header nav a[href="#${id}"]`
//         // );
//         // if (prevActiveLink !== currActiveLink) {
//           // prevActiveLink?.classList.remove("active");
//           // currActiveLink?.classList.add("active");
//         // }
//       // }
//     // });
//   // });



// window.addEventListener("scroll", () => {
//   const top = window.scrollY;
//   sections.forEach((sec) => {
//     const offset = sec.offsetTop - header.offsetHeight - 150;
//     const height = sec.offsetHeight;
//     const id = sec.getAttribute("id");
//     if (top >= offset && top < offset + height) {
//       const prevActiveLink = document.querySelector("header nav a.active");
//       const currActiveLink = document.querySelector(
//         `header nav a[href="#${id}"]`
//       );
//       if (prevActiveLink !== currActiveLink) {
//         prevActiveLink?.classList.remove("active");
//         currActiveLink?.classList.add("active");
//       }
//     }
//   });
// });






//   /* ====== sticky navbar ====== */
//   const header = document.querySelector("header");

//   window.addEventListener("scroll", () => {
//     header.classList.toggle("sticky", window.scrollY > 100);
//   });

//   /* ====== remove toggle icon and navbar when click link (scroll) ====== */
//   const navLinksArray = Array.from(navLinks);
//   navLinksArray.forEach((link) => {
//     link.addEventListener("click", () => {
//       menuIcon.classList.remove("bx-x");
//       navbar.classList.remove("active");
//     });
//   });

//   /* ====== scroll reveal ====== */
//   ScrollReveal({
//     reset: true,
//     distance: "80px",
//     duration: 2000,
//     delay: 200
//   });

//   ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
//   ScrollReveal().reveal(
//     ".home-img, .skills-container, .portfolio-box, .contact form",
//     { origin: "bottom" }
//   );
//   ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
//   ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

//   /* ====== typed js ====== */
//   const typed = new Typed(".multiple-text", {
//     strings: ["Frontend Developer", "Software Engineer", "UI/UX"],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
//   });
// });








  // window.addEventListener("DOMContentLoaded", function () {
  //     /* ====== toggle icon navbar ====== */
  //     const menuIcon = document.querySelector("#menu-icon");
  //     const navbar = document.querySelector(".navbar");

  //     menuIcon.addEventListener("click", () => {
  //       menuIcon.classList.toggle("bx-x");
  //       navbar.classList.toggle("active");
  //     });

      /* ====== scroll sections active link ====== */
      // const sections = document.querySelectorAll("section");
      // const navLinks = document.querySelectorAll('header nav a[href^="#"]');


      // window.addEventListener("scroll", () => {
      //   const top = window.scrollY;
      //   sections.forEach((sec) => {
      //     const height = sec.offsetHeight;
      //     // const height = sec.offsetHeight / 2;
      //     const offset = sec.offsetTop - header.offsetHeight - 150;
      //     const id = sec.getAttribute("id");
      //     if (top >= offset && top < offset + height) {
      //       const prevActiveLink = document.querySelector("header nav a.active");
      //       const currActiveLink = document.querySelector(
      //         `header nav a[href="#${id}"]`
      //         );
      //         if (prevActiveLink !== currActiveLink) {
      //           prevActiveLink?.classList.remove("active");
      //           currActiveLink?.classList.add("active");
      //         }
      //     }
      //   });
      // });

      // /* ====== sticky navbar ====== */
      // const header = document.querySelector("header");

      // window.addEventListener("scroll", () => {
      //   header.classList.toggle("sticky", window.scrollY > 100);
      // });

      // /* ====== remove toggle icon and navbar when click link (scroll) ====== */
      // const navLinksArray = Array.from(navLinks);
      // navLinksArray.forEach((link) => {
      //   link.addEventListener("click", () => {
      //     menuIcon.classList.remove("bx-x");
      //     navbar.classList.remove("active");
      //   });
      // });

      // /* ====== scroll reveal ====== */
      // ScrollReveal({
      //   reset: true,
      //   distance: "80px",
      //   duration: 2000,
      //   delay: 200
      // });

      // ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
      // ScrollReveal().reveal(
      //   ".home-img, .skills-container, .portfolio-box, .contact form",
      //   { origin: "bottom" }
      // );
      // ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
      // ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

      /* ====== typed js ====== */
      const typed = new Typed(".multiple-text", {
        strings: ["Frontend Developer", "Software Engineer", "UI/UX"],
        typeSpeed: 80,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
      });
    
    const typedAbout = new Typed(".about-text", {
        strings: ["Software Engineer", "UI/UX", "Frontend Developer", "Doggie Lover"],
        typeSpeed: 50,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
      });
    // });
    
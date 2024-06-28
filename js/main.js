// Pre-Loader
window.addEventListener("load", () => {
    const loader = document.querySelector(".preloader");
  
    loader.classList.add("preloader_hidden");
  
    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
});

// Hamburger Menu
const hamMenu = document.querySelector(".ham_menu");
const offMenu = document.querySelector(".offScreenMenu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offMenu.classList.toggle("active");
});


// sticky Navigation
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const overlay = document.querySelector(".overlay");
    const logo = document.querySelector(".logo");
    const nav = document.querySelector(".main_nav ul");

    header.classList.toggle("sticky", window.scrollY > 0);
    overlay.classList.toggle("sticky", window.scrollY > 0); 
    logo.classList.toggle("sticky", window.scrollY > 0); 
    nav.classList.toggle("sticky", window.scrollY > 0); 
  });
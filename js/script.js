document.addEventListener("DOMContentLoaded",() =>{
    const menuResponsivo = document.getElementById("menuResponsivo");
    const navMenu = document.getElementById("nav-menu");
    menuResponsivo.addEventListener("click",() =>{
        navMenu.classList.toggle("active")
});//Fecha menu responsivo
const navLinks = document.querySelectorAll(".nav-menu a");
navLinks.forEach((Link) => {
    Link.addEventListener("click", () =>{
    navMenu.classList.remove("active");
    });
    const slides = document.querySelectorAll (".carousel-slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let slideAtual = 0;
    let slideIntervalo;
    function showSlide(index){
        slides.forEach((slide) => slide.classList.remove("active"));
        dots.forEach((dot) => dot.classList.remove("active"));
        slideAtual = (index + slides.length) % slides.length;
        slides[slidesAtual].classList.add("active");
        dots[slidesAtual].classList.add("active")
    }

});
});//Final função evento carregar tudo HTML
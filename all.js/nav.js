const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('#mobileMenu');

const toggleMenu = () => mobileMenu.classList.toggle('active');
hamburger.addEventListener('click',()=>{
    toggleMenu();  
}) 
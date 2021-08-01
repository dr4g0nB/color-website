const toggleMenu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

//Mobile menu
const mobileMenu = () => {
  toggleMenu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
}

toggleMenu.addEventListener('click', mobileMenu);

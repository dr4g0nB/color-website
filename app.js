const toggleMenu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

//Mobile menu
const mobileMenu = () => {
  toggleMenu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
}

toggleMenu.addEventListener('click', mobileMenu);

const highlightMenu = () => {
  const e = document.querySelector('.highlight');
  const homePage = document.querySelector('#home-page');
  const aboutPage = document.querySelector('#about-page');
  const servicesPage = document.querySelector('#service-page');

  let scrollPosition = window.scrollY
  //shows the scroll position
  //console.log(scrollPosition)

  //Adds .highlight to menu items
  if(window.innerWidth > 960 && scrollPosition < 600) {
    homePage.classList.add('highlight');
    aboutPage.classList.remove('highlight');
    return
  } else if(window.innerWidth > 960 && scrollPosition < 1400) {
    aboutPage.classList.add('highlight');
    homePage.classList.remove('highlight');
    servicesPage.classList.remove('highlight');
    return
  } else if(window.innerWidth > 960 && scrollPosition < 2345) {
    servicesPage.classList.add('highlight');
    aboutPage.classList.remove('highlight');
    return
  }

  if((e && window.innerWidth < 960 && scrollPosition < 600) || e) {
    e.classList.remove('highlight');
  }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//Mobile version 
//Closes the menu
const hideMenu = () => {
  const menuBars = document.querySelector('.is-active')
  if(window.innerWidth <= 768 && menuBars) {
    menuBars.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
}

menuLinks.addEventListener('click', hideMenu);
navLogo.addEventListener('click', hideMenu);

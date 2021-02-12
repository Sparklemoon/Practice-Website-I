const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('navbar-menu')
const navLogo = document.querySelector('#navbar-logo')

const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// show activ menu when scrolling

const highlightMenu = () => {
  const elem = document.querySelector('.highlight')
  const homeMenu = document.querySelector('#unicorns')
  const aboutMenu = document.querySelector('#dolphins')
  const servicesMenu = document.querySelector('#rainbow')
}
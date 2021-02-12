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
  const element = document.querySelector('.highlight')
  const homeMenu = document.querySelector('#unicorns')
  const aboutMenu = document.querySelector('#dolphins')
  const servicesMenu = document.querySelector('#rainbow')
  let scrollPosition = window.scrollY

  //adds highlight class to menu items
  if (window.innerWidth > 960 && scrollPosition < 600) {
    unicornsMenu.classList.add('highlight')
    dolphinsMenu.classList.remove('highlight')
    return
  } else if (window.innerWidth > 960 && scrollPosition < 1400 ) {
    dolphinsMenu.classList.add('highlight')
    unicornsMenu.classList.remove('highlight')
    rainbowMenu.classList.remove('highlight')
    return
  } else if (window.innerWidth > 960 && scrollPosition < 2345 ) {
    rainbowMenu.classList.add('highlight')
    dolphinsMenu.classList.remove('highlight')
    return
  }

  if((element && window.innerWidth < 960 && scrollPosition < 600) || element) {
    elem.classList.remove('highlight')
  }
  
}
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
  const unicornsMenu = document.querySelector('#unicorns')
  const dolphinsMenu = document.querySelector('#dolphins')
  const rainbowMenu = document.querySelector('#rainbow')
  let scrollPosition = window.scrollY
  // console.log(scrollPosition);

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
    element.classList.remove('highlight')
  }

}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//close mobile menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active')
  if(window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active')
    menuLinks.classList.remove('active')
  }
}



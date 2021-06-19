const hideshowMobile = document.querySelector('.hamburger');
const navlinks = document.querySelector('.navbar-links');
const hamburgericon = document.querySelector('.hamburger img');
let toggle = true;
hideshowMobile.addEventListener('click', () => {
    navlinks.classList.toggle('show');
    if (toggle) {
        hamburgericon.src = './images/cross-icon.svg';
    }else {
        hamburgericon.src = './images/icon-hamburger.svg';
    }
    toggle = !toggle;
});

const navbar = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('nav-active');
        navlinks.classList.remove('show');
        hamburgericon.src = './images/icon-hamburger.svg';
        toggle = true;
    } else {
        navbar.classList.remove('nav-active');
    }
};
import  {disableScroll, enableScroll}  from "./scroll.js";


const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation__list');
const wrapper = document.querySelector('.wrapper');
const logo = document.querySelector('.logo');
const logoNav = document.querySelector('.logo-nav');

burger.addEventListener('click', () => {
  logo.classList.toggle('logo-invisible');
  logoNav.style.display = 'block';
  burger.classList.toggle('burger_active');
  navigation.classList.toggle('navigation__list-active');
  wrapper.classList.toggle('page__overlay');
  if (burger.classList.contains('burger_active')) disableScroll();
  else enableScroll();
  
});

const closeMenu = () => {
  logo.classList.remove('logo-invisible');
  logoNav.style.display = 'none';
  burger.classList.remove('burger_active');
  navigation.classList.remove('navigation__list-active');
  wrapper.classList.remove('page__overlay');
  enableScroll();
};

navigation.addEventListener('click', e => {
  if (e.target.classList.contains('navigation__link')) closeMenu();
});

wrapper.addEventListener('click', () => {
  closeMenu();
});

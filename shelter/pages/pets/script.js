/**Burger-menu */
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation__list');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger_active');
  navigation.classList.toggle('navigation__list-active');
});

const closeMenu = () => {
  burger.classList.remove('burger_active');
  navigation.classList.remove('navigation__list-active');
};

navigation.addEventListener('click', e => {
  if (e.target.classList.contains('navigation__link')) closeMenu()
});

/**Modal-window */

const petsList = document.querySelector('.pets__list');
const pageOverlayModal = document.querySelector('.page__overlay_modal');
const modalClose = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');

const showModal = (elem, param) => {
  let opacity = 0;
  elem.opacity = opacity;
  elem.style.display = '';

  const animation = () => {
    opacity += param;
    elem.style.opacity = opacity;
    if (opacity < 1) requestAnimationFrame(animation);
  }
  requestAnimationFrame(animation)
};

const hideModal = (elem, param) => {
  let opacity = getComputedStyle(elem).getPropertyValue('opacity');
  const animation = () => {
    opacity -= param;
    elem.style.opacity = opacity;
    if (opacity > 0) requestAnimationFrame(animation);
    else elem.style.display = 'none';
  }
  requestAnimationFrame(animation);
};


petsList.addEventListener('click', e => {
  if (e.target.classList.contains('pets__button')) {
    pageOverlayModal.classList.add('page__overlay_modal_open');
    showModal(modal, 0.03)
  }
});

modalClose.addEventListener('click', () => {
  hideModal(modal, 0.03)
  pageOverlayModal.classList.remove('page__overlay_modal_open');
})

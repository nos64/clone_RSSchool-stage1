import  {disableScroll, enableScroll}  from "./scroll.js";
import { showElem, hideElem } from "./show-hide.js";
import { petsList } from "./cards.js";

const pageOverlayModal = document.querySelector(".page__overlay_modal");
const modalClose = document.querySelector('.modal__close');
// const modal = document.querySelector('.modal');

const openModal = () => {
  disableScroll();
  showElem(pageOverlayModal, 0.03);
  pageOverlayModal.classList.add('page__overlay_modal_open');
};

const closeModal = () => {
  hideElem(pageOverlayModal, 0.05);
  enableScroll();
};


const renderModal = modal => {
  const modalTextName = document.querySelector('.modal__text-name');
  const modalImage = document.querySelector('.modal__image');
  const modalType = document.querySelector('.type');
  const modalBreed = document.querySelector('.breed');
  const modalDescription = document.querySelector('.description');
  const modalAge = document.querySelector('.age');
  const modalInoculations = document.querySelector('.inoculations');
  const modalDiseases = document.querySelector('.diseases');
  const modalParasites = document.querySelector('.parasites');
  
  modalTextName.textContent = modal.name;
  modalImage.src = modal.img;
  modalType.textConten = modal.type;
  modalBreed.textContent = modal.breed;
  modalDescription.textContent = modal.description;
  modalAge.textContent = modal.age;
  modalInoculations.textContent = modal.inoculations;
  modalDiseases.textContent = modal.diseases;
  modalParasites.textContent = modal.parasites;
};

export const getModal = data => {
  petsList.addEventListener('click', e => {
    if (e.target.closest('.pets-list__item')) {
      const modal = data.find(item => item.name === e.target.dataset.name);
      renderModal(modal);
      openModal();
    }
  });
};

/**Modal-window close */
modalClose.addEventListener('click', closeModal);

pageOverlayModal.addEventListener('click', (e) => {
  if (e.target.classList.contains('page__overlay_modal')) closeModal();
});

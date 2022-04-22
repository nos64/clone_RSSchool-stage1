
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation__list');
const wrapper = document.querySelector('.wrapper');

const petsList = document.querySelector('.pets-list__list');
const petsListWrapper = document.querySelector('.pets-list');
const screenWidth = screen.width;


const disableScroll = () => {
  const scrollY = document.body.style.top;
  const widthScroll = window.innerWidth - document.body.offsetWidth;
  document.body.scrollPosition = window.scrollY;
  document.documentElement.style.cssText = `
  position: relstive;
  height: 100vh;
  `;

  document.body.style.cssText = `
  position: fixed;
  left: 0;
  width: 100vw;
  overflow: hidden;
  padding-right: ${widthScroll}px;
  top:-${window.scrollY}px;
`;
};

const enableScroll = () => {
  document.documentElement.style.cssText = ``;
  document.body.style.cssText = `position: relative`;
  window.scroll({ top: document.body.scrollPosition });
};

const showElem = (elem, param) => {
  let opacity = 0;
  elem.opacity = opacity;
  elem.style.display = '';

  const animation = () => {
    opacity += param;
    elem.style.opacity = opacity;
    if (opacity < 1) requestAnimationFrame(animation);
  }
  requestAnimationFrame(animation);
};

const hideElem = (elem, param) => {
  let opacity = getComputedStyle(elem).getPropertyValue('opacity');
  const animation = () => {
    opacity -= param;
    elem.style.opacity = opacity;
    if (opacity > 0) requestAnimationFrame(animation);
    else {
      elem.style.display = 'none';
      opacity = 0;
    } 
  }
  requestAnimationFrame(animation);
};

/**Burger-menu */
burger.addEventListener('click', () => {
  burger.classList.toggle('burger_active');
  navigation.classList.toggle('navigation__list-active');
  wrapper.classList.toggle('page__overlay');
  if (burger.classList.contains('burger_active')) disableScroll();
  else enableScroll();
  
});

const closeMenu = () => {
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



/**Get data */
const getData = () => {
  return fetch('../../assets/db/pets.json').then(response => response.json())
};

 /**Shuffle card */
const shuffle = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i --) {
    let j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

/**Render card */
const renderCard = data => {
  petsList.textContent = '';
  let cardsArray = [];
 
  for (let i = 0; i < data.length; i++) {
    const li = document.createElement('li');
    li.className = 'pets-list__item';
    li.dataset.name = data[i].name;

    const img = document.createElement('img');
    img.className = 'pets-list__image';
    img.src = data[i].img;
    img.dataset.name = data[i].name;

    const h4 = document.createElement('h4');
    h4.className = 'pets-list__name';
    h4.textContent = data[i].name;
    h4.dataset.name = data[i].name;

    const button = document.createElement('button');
    button.className = 'pets-list__button';
    button.textContent = 'Learn more';
    button.dataset.name = data[i].name;

    // petsList.append(li);
    li.append(img, h4, button);

    cardsArray.push(li);
  }
  return cardsArray;
}

const showCard = (array) => {
  let shuffleArray = shuffle(array);
  let numberOfLi = 0;
  if (screenWidth >= 1280) numberOfLi = 3;
  else if (screenWidth >= 768) numberOfLi = 2;
  else numberOfLi = 1;
  for (let i = 0; i < numberOfLi; i++) {
    petsList.append(shuffleArray[i]);
  }
}

const paginationBtn = document.querySelector('.pets-list__pagination-button')

petsListWrapper.addEventListener('click', e => {
  if (e.target.classList.contains('pets-list__pagination-button')) {
 
  }
});


/**Modal-window */
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
  pageOverlayModal.classList.remove('page__overlay_modal_open');
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

const getModal = data => {
  petsList.addEventListener('click', e => {
    if (e.target.closest('.pets-list__item')) {
      const modal = data.find(item => item.name === e.target.dataset.name);
      renderModal(modal);
      openModal();
    }
  });
}

/**Modal-window close */
modalClose.addEventListener('click', () => {
enableScroll();
closeModal();
});

pageOverlayModal.addEventListener('click', closeModal);






/**Start page */
  const initPage = async () => {
    const data = await getData();
    const cards = renderCard(data);

    getModal(data);
    showCard(cards);

  }

  initPage();







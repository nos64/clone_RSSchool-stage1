import shuffle from './shuffleCard.js';
import { createCard } from './createCard.js';

export const petsList = document.querySelector('.pets-list__list');

const sliderLeft = document.querySelector('.pets-list__left');
const sliderVisible = document.querySelector('.pets-list__visible');
const sliderRight = document.querySelector('.pets-list__right');

/**Загрузка страницы и стартовые карточки */
const initArr = [];
let visibleArr = [];

export const loadPage = (array) => {
  const shuffleArray = shuffle(array);
  for (let i = 0; i < shuffleArray.length; i++) {
    if (i < 3) {
      sliderLeft.append(createCard(shuffleArray[i]));
      initArr.push(shuffleArray[i]);
    } else if ( i < 6) {
      sliderVisible.append(createCard(shuffleArray[i]));
      initArr.push(shuffleArray[i]);
      visibleArr.push(shuffleArray[i]);
    } else {
      sliderRight.append(createCard(shuffleArray[i]));
      initArr.push(shuffleArray[i]);
    }
  }
  sliderRight.append(createCard(shuffleArray[1]));
  initArr.push(shuffleArray[1]);
};

/**Получение массива уникальных карточек */
const getUnicalVisibleArray = () =>  {

  let newArray = [];
  while (newArray.length < 3) {
    let card = initArr[Math.floor(Math.random() * initArr.length)];
    if (!visibleArr.includes(card) && !newArray.includes(card)) {
      newArray.push(card);
    }
  }
  visibleArr = [...newArray];
}

/**Заполнение карточек */
const insertLeftCards = () => {
  visibleArr.forEach(item => sliderRight.append(createCard(item)));
}

const insertRightCards = () => {
  visibleArr.forEach(item => sliderLeft.append(createCard(item)));
}

/**Переключение карточек кнопками */
const leftBtn = document.querySelector('.button-left');
const rightBtn = document.querySelector('.button-right');

const moveLeft = () => {
  petsList.classList.add('transition-left');
  leftBtn.removeEventListener('click', moveLeft);
  rightBtn.removeEventListener('click', moveRight);
  sliderRight.innerHTML = '';
  getUnicalVisibleArray();
  insertLeftCards(); 
};

const moveRight = () => {
  petsList.classList.add('transition-right');
  leftBtn.removeEventListener('click', moveLeft);
  rightBtn.removeEventListener('click', moveRight); 
  sliderLeft.innerHTML = '';
  getUnicalVisibleArray();
  insertRightCards();
};

leftBtn.addEventListener('click', moveLeft); 
rightBtn.addEventListener('click', moveRight); 

/**Перерисовка карточек */
petsList.addEventListener('animationend', AnimationEvent => {

  if (AnimationEvent.animationName === 'move-left') {
    petsList.classList.remove('transition-left');
    sliderVisible.innerHTML = sliderRight.innerHTML;

  } else {
    petsList.classList.remove('transition-right');
    sliderVisible.innerHTML = sliderLeft.innerHTML; 
  }
  
  leftBtn.addEventListener('click', moveLeft); 
  rightBtn.addEventListener('click', moveRight); 
});
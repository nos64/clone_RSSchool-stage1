
import shuffle from './shuffleCard.js';
import { createCard } from './createCard.js';

export const petsList = document.querySelector('.pets__list');

const screenWidth = screen.width;

/**Загрузка страницы и стартовые карточки */
export const loadPage = (array) => {
  const shuffleArray = shuffle(array);
  for (let i = 0; i < shuffleArray.length; i++) {
    petsList.append(createCard(shuffleArray[i]));
  };
};

/**Получение массива 6 страниц по 8 карточек */
const newArray = [];
const newArray8 = [];

let newArray6 = [];

const newArray3 = [];

export const getAllCards = (array) =>  {
  for (let i = 0; i < 6; i++) {
    newArray8.push(shuffle(array));
  };
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < newArray8[i].length; j++) {
      newArray.push(newArray8[i][j]);
    };
  };
  while(newArray.length) newArray6.push(newArray.splice(0, 6));
}
console.log('newArray: ', newArray);
console.log('newArray8: ', newArray8);
console.log('newArray6: ', newArray6);

const firstPage = document.querySelector('.pagination__start');
const prevPage = document.querySelector('.pagination__prev');
const currentPage = document.querySelector('.pagination__num');
const nextPage = document.querySelector('.pagination__next');
const lastPage = document.querySelector('.pagination__end');


const enableStyle = (elem) => {
  elem.disabled = false;
}

const disableStyle = (elem) => {
  elem.disabled = true;
}
console.log(screenWidth)

const getNextPage = () => {
  if (screenWidth >= 1280) {
    if (currentPage.textContent === '1') {
      petsList.innerHTML = '';
      newArray8[1].forEach(item => petsList.append(createCard(item)));
      currentPage.textContent = '2';
      enableStyle(firstPage);
      enableStyle(prevPage);
      enableStyle(lastPage);
      enableStyle(nextPage);
    } else if (currentPage.textContent === '2') {
      petsList.innerHTML = '';
      newArray8[2].forEach(item => petsList.append(createCard(item)));
      currentPage.textContent = '3'; 
      enableStyle(firstPage);
      enableStyle(prevPage);
      enableStyle(lastPage);
      enableStyle(nextPage);
    } else if (currentPage.textContent === '3') {
      petsList.innerHTML = '';
      newArray8[3].forEach(item => petsList.append(createCard(item)));
      currentPage.textContent = '4';
      enableStyle(firstPage);
      enableStyle(prevPage);
      enableStyle(lastPage);
      enableStyle(nextPage);
    } else if (currentPage.textContent === '4') {
      petsList.innerHTML = '';
      newArray8[4].forEach(item => petsList.append(createCard(item)));
      currentPage.textContent = '5';
      enableStyle(firstPage);
      enableStyle(prevPage);
      enableStyle(lastPage);
      enableStyle(nextPage);
    } else if (currentPage.textContent === '5') {
      petsList.innerHTML = '';
      newArray8[5].forEach(item => petsList.append(createCard(item)));
      currentPage.textContent = '6';
      enableStyle(firstPage);
      enableStyle(prevPage);
      disableStyle(lastPage);
      disableStyle(nextPage);
    }
}
  if (screenWidth >= 768) {
    if (currentPage.textContent === '1') {
      petsList.innerHTML = '';
      newArray6[1].forEach(item => petsList.append(createCard(item)));
      currentPage.textContent = '2';
      enableStyle(firstPage);
      enableStyle(prevPage);
      enableStyle(lastPage);
      enableStyle(nextPage);
    } else if (currentPage.textContent === '2') {
      petsList.innerHTML = '';
      newArray6[2].forEach(item => petsList.append(createCard(item)));
      currentPage.textContent = '3'; 
      enableStyle(firstPage);
      enableStyle(prevPage);
      enableStyle(lastPage);
      enableStyle(nextPage);
    } else if (currentPage.textContent === '3') {
      petsList.innerHTML = '';
      newArray6[3].forEach(item => petsList.append(createCard(item)));
      currentPage.textContent = '4';
      enableStyle(firstPage);
      enableStyle(prevPage);
      enableStyle(lastPage);
      enableStyle(nextPage);
    } else if (currentPage.textContent === '4') {
      petsList.innerHTML = '';
      newArray6[4].forEach(item => petsList.append(createCard(item)));
      currentPage.textContent = '5';
      enableStyle(firstPage);
      enableStyle(prevPage);
      enableStyle(lastPage);
      enableStyle(nextPage);
    } else if (currentPage.textContent === '5') {
      petsList.innerHTML = '';
      newArray6[5].forEach(item => petsList.append(createCard(item)));
      currentPage.textContent = '6';
      enableStyle(firstPage);
      enableStyle(prevPage);
      enableStyle(lastPage);
      enableStyle(nextPage);
    } else if (currentPage.textContent === '6') {
      petsList.innerHTML = '';
      newArray6[6].forEach(item => petsList.append(createCard(item)));
      currentPage.textContent = '7';
      enableStyle(firstPage);
      enableStyle(prevPage);
      enableStyle(lastPage);
      enableStyle(nextPage);
    } else if (currentPage.textContent === '7') {
      petsList.innerHTML = '';
      newArray6[7].forEach(item => petsList.append(createCard(item)));
      currentPage.textContent = '8';
      enableStyle(firstPage);
      enableStyle(prevPage);
      disableStyle(lastPage);
      disableStyle(nextPage);
    } 
  }
  
}

const getPrevPage = () => {
  if (screenWidth >= 1280) {
    if (currentPage.textContent === '6') {
      petsList.innerHTML = '';
      newArray8[4].forEach(item => petsList.append(createCard(item)));
      currentPage.textContent = '5';
      enableStyle(firstPage);
      enableStyle(prevPage);
      enableStyle(lastPage);
      enableStyle(nextPage);
    } else if (currentPage.textContent === '5') {
      petsList.innerHTML = '';
      newArray8[3].forEach(item => petsList.append(createCard(item)));
      currentPage.textContent = '4'; 
      enableStyle(firstPage);
      enableStyle(prevPage);
      enableStyle(lastPage);
      enableStyle(nextPage);
    } else if (currentPage.textContent === '4') {
      petsList.innerHTML = '';
      newArray8[2].forEach(item => petsList.append(createCard(item)));
      currentPage.textContent = '3';
      enableStyle(firstPage);
      enableStyle(prevPage);
      enableStyle(lastPage);
      enableStyle(nextPage);
    } else if (currentPage.textContent === '3') {
      petsList.innerHTML = '';
      newArray8[1].forEach(item => petsList.append(createCard(item)));
      currentPage.textContent = '2';
      enableStyle(firstPage);
      enableStyle(prevPage);
      enableStyle(lastPage);
      enableStyle(nextPage);
    } else if (currentPage.textContent === '2') {
      petsList.innerHTML = '';
      newArray8[0].forEach(item => petsList.append(createCard(item)));
      currentPage.textContent = '1';
      enableStyle(lastPage);
      enableStyle(nextPage);
      disableStyle(firstPage);
      disableStyle(prevPage);
    }
  }
  if (screenWidth >= 768) {
    if (currentPage.textContent === '8') {
      petsList.innerHTML = '';
      newArray6[6].forEach(item => petsList.append(createCard(item)));
      currentPage.textContent = '7';
      enableStyle(firstPage);
      enableStyle(prevPage);
      enableStyle(lastPage);
      enableStyle(nextPage);
    } else if (currentPage.textContent === '7') {
      petsList.innerHTML = '';
      newArray6[5].forEach(item => petsList.append(createCard(item)));
      currentPage.textContent = '6'; 
      enableStyle(firstPage);
      enableStyle(prevPage);
      enableStyle(lastPage);
      enableStyle(nextPage);
    } else if (currentPage.textContent === '6') {
      petsList.innerHTML = '';
      newArray6[4].forEach(item => petsList.append(createCard(item)));
      currentPage.textContent = '5'; 
      enableStyle(firstPage);
      enableStyle(prevPage);
      enableStyle(lastPage);
      enableStyle(nextPage);
    } else if (currentPage.textContent === '5') {
      petsList.innerHTML = '';
      newArray6[3].forEach(item => petsList.append(createCard(item)));
      currentPage.textContent = '4'; 
      enableStyle(firstPage);
      enableStyle(prevPage);
      enableStyle(lastPage);
      enableStyle(nextPage);
    } else if (currentPage.textContent === '4') {
      petsList.innerHTML = '';
      newArray6[2].forEach(item => petsList.append(createCard(item)));
      currentPage.textContent = '3';
      enableStyle(firstPage);
      enableStyle(prevPage);
      enableStyle(lastPage);
      enableStyle(nextPage);
    } else if (currentPage.textContent === '3') {
      petsList.innerHTML = '';
      newArray6[1].forEach(item => petsList.append(createCard(item)));
      currentPage.textContent = '2';
      enableStyle(firstPage);
      enableStyle(prevPage);
      enableStyle(lastPage);
      enableStyle(nextPage);
    } else if (currentPage.textContent === '2') {
      petsList.innerHTML = '';
      newArray6[0].forEach(item => petsList.append(createCard(item)));
      currentPage.textContent = '1';
      enableStyle(lastPage);
      enableStyle(nextPage);
      disableStyle(firstPage);
      disableStyle(prevPage);
    }
  }
}

const getLastPage = () => {
  if (screenWidth >= 1280) {
    petsList.innerHTML = '';
    newArray8[5].forEach(item => petsList.append(createCard(item)));
    currentPage.textContent = '6';
    disableStyle(lastPage);
    disableStyle(nextPage);
    enableStyle(firstPage);
    enableStyle(prevPage);
  }
  if (screenWidth >= 768) {
    petsList.innerHTML = '';
    newArray6[7].forEach(item => petsList.append(createCard(item)));
    currentPage.textContent = '8';
    disableStyle(lastPage);
    disableStyle(nextPage);
    enableStyle(firstPage);
    enableStyle(prevPage);
  }
  
}

const getFirstPage = () => {
  if (screenWidth >= 1280) {
    petsList.innerHTML = '';
    newArray8[0].forEach(item => petsList.append(createCard(item)));
    currentPage.textContent = '1';
    disableStyle(firstPage);
    disableStyle(prevPage);
    enableStyle(lastPage);
    enableStyle(nextPage);
  }
  if (screenWidth >= 768) {
    petsList.innerHTML = '';
    newArray6[0].forEach(item => petsList.append(createCard(item)));
    currentPage.textContent = '1';
    disableStyle(firstPage);
    disableStyle(prevPage);
    enableStyle(lastPage);
    enableStyle(nextPage);
  }
}

nextPage.addEventListener('click', getNextPage);
prevPage.addEventListener('click', getPrevPage);
lastPage.addEventListener('click', getLastPage);
firstPage.addEventListener('click', getFirstPage);
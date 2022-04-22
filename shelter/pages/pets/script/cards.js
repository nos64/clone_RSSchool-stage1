
import shuffle from './shuffleCard.js'
export const petsList = document.querySelector('.pets__list');

// const petsListWrapper = document.querySelector('.pets-list');
const screenWidth = screen.width;


/**Render card */
export const renderCard = data => {
  petsList.textContent = '';
  let cardsArray = [];
 
  for (let i = 0; i < data.length; i++) {
    const li = document.createElement('li');
    li.className = 'pets__item';
    li.dataset.name = data[i].name;

    const img = document.createElement('img');
    img.className = 'pets__image';
    img.src = data[i].img;
    img.dataset.name = data[i].name;

    const h4 = document.createElement('h4');
    h4.className = 'pets__name';
    h4.textContent = data[i].name;
    h4.dataset.name = data[i].name;

    const button = document.createElement('button');
    button.className = 'pets__button';
    button.textContent = 'Learn more';
    button.dataset.name = data[i].name;

    // petsList.append(li);
    li.append(img, h4, button);

    cardsArray.push(li);
  }
  return cardsArray;
}

export const showCard = (array) => {
  let shuffleArray = shuffle(array);
  let numberOfLi = 0;
  if (screenWidth >= 1280) numberOfLi = 8;
  else if (screenWidth >= 768) numberOfLi = 6;
  else numberOfLi = 3;
  for (let i = 0; i < numberOfLi; i++) {
    petsList.append(shuffleArray[i]);
  }
}

// const paginationBtn = document.querySelector('.pets-list__pagination-button');

// petsListWrapper.addEventListener('click', e => {
//   if (e.target.classList.contains('pets-list__pagination-button')) {
//   }
// });

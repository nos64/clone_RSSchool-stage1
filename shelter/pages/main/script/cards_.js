
import shuffle from './shuffleCard.js';
import getData from './getData.js'


export const petsList = document.querySelector('.pets-list__list');

const petsListWrapper = document.querySelector('.pets-list');
const screenWidth = screen.width;


let arrayItems = [];


/**Create card */
const createCard = (item) => {
  const li = document.createElement('li');
  li.className = 'pets-list__item';
  li.dataset.name = item.name;

  const img = document.createElement('img');
  img.className = 'pets-list__image';
  img.src = item.img;
  img.dataset.name = item.name;

  const h4 = document.createElement('h4');
  h4.className = 'pets-list__name';
  h4.textContent = item.name;
  h4.dataset.name = item.name;

  const button = document.createElement('button');
  button.className = 'pets-list__button';
  button.textContent = 'Learn more';
  button.dataset.name = item.name;

  li.append(img, h4, button);
  // petsList.append(li);

  return li;
}

// get random number function
const getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**Render card */
export const renderCard = data => {
  let array = shuffle(data)
  array.forEach(item => {
    arrayItems.push(createCard(item));
    // console.log(createCard(item));
    // petsList.append(createCard(item))
  })

  // console.log('arrayItems: ', arrayItems);
  return arrayItems
}

export const showCard = (array) => {
// console.log(array)

  let shuffleArray = shuffle(array);
  let numberOfLi = 0;
  if (screenWidth >= 1280) numberOfLi = 3;
  else if (screenWidth >= 768) numberOfLi = 2;
  else numberOfLi = 1;
  for (let i = 0; i < shuffleArray.length; i++) {
    petsList.append(shuffleArray[i]);
  }
  // array.forEach(item => petsList.append(item))
}


const paginationBtn = document.querySelector('.pets-list__pagination-button');

// petsListWrapper.addEventListener('click', e => {

//   if (e.target.classList.contains('pets-list__pagination-button')) {
//     showCard(arrayItems)
//   } 
// })




const leftBtn = document.querySelector('.button-left');
const rightBtn = document.querySelector('.button-right');

const moveLeft = () => {
  petsList.classList.add('transition-left');
  leftBtn.removeEventListener('click', moveLeft);
  rightBtn.removeEventListener('click', moveRight); 
};

const moveRight = () => {
  petsList.classList.add('transition-right');
  leftBtn.removeEventListener('click', moveLeft);
  rightBtn.removeEventListener('click', moveRight); 
};

leftBtn.addEventListener('click', moveLeft); 
rightBtn.addEventListener('click', moveRight); 


// const cardLi = document.querySelectorAll('.pets-list__item')
petsList.addEventListener('animationend', (AnimationEvent) => {

  if (AnimationEvent.animationName === 'move-left') {
    petsList.classList.remove('transition-left');
    
    const leftItems = arrayItems.slice(0, 3);
    // leftItems.forEach(item => petsList.append(item))
    // for (let i = 0; i < arrayItems.length; i++) {
    //   arrayItems[i] = arrayItems[i+3]
    // }

  } else if (AnimationEvent.animationName === 'move-right') {
    petsList.classList.remove('transition-right');

    const rightItems = arrayItems.slice(5, 3);
    // rightItems.forEach(item => petsList.append(item))
  
  }
  leftBtn.addEventListener('click', moveLeft); 
  rightBtn.addEventListener('click', moveRight); 
});






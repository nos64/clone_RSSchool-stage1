import shuffle from './shuffleCard.js';
import getData from './getData.js'
import {pets} from '../../../assets/db/pets.js';
export const petsList = document.querySelector('.pets-list__list');

const petsListWrapper = document.querySelector('.pets-list');
const screenWidth = screen.width;

const sliderLeft = document.querySelector('.pets-list__left')
const sliderVisible = document.querySelector('.pets-list__visible')
const sliderRight = document.querySelector('.pets-list__right')

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
  return Math.floor(Math.random() * 8);
}

const loadPage = (array) => {
  const newArray = shuffle(array)

  


  for (let i = 0; i < 3; i++) {
    sliderLeft.append(createCard(newArray[i]))
  }
  for (let i = 3; i < 6; i++) {
    sliderVisible.append(createCard(newArray[i]))
  }
  for (let i = 0; i < 3; i++) {
    sliderRight.append(createCard(newArray[i]))
  }
}
loadPage(pets)


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



// petsList.addEventListener('animationend', (AnimationEvent) => {
  
//   if (AnimationEvent.animationName === 'move-left') {
//     petsList.classList.remove('transition-left');
    
//     const rightItems = sliderRight.innerHTML
//     sliderVisible.innerHTML = rightItems; 
//     const card1 = createCard(pets[getRandomNum()])
//     const card2 = createCard(pets[getRandomNum()])
//     const card3 = createCard(pets[getRandomNum()])
//     sliderRight.innerHTML = '';
//     sliderRight.append(card1, card2, card3)



//   } else if (AnimationEvent.animationName === 'move-right') {
//     petsList.classList.remove('transition-right');

//     const leftItems = sliderLeft.innerHTML
//     sliderVisible.innerHTML = leftItems; 
//     const card1 = createCard(pets[getRandomNum()])
//     const card2 = createCard(pets[getRandomNum()])
//     const card3 = createCard(pets[getRandomNum()])
//     sliderLeft.innerHTML = '';
//     sliderLeft.append(card1, card2, card3)

//   }
//   leftBtn.addEventListener('click', moveLeft); 
//   rightBtn.addEventListener('click', moveRight); 
// });


petsList.addEventListener('animationend', (AnimationEvent) => {
  let changedItem;
  if (AnimationEvent.animationName === 'move-left') {
    petsList.classList.remove('transition-left');
    changedItem = sliderRight;
    sliderVisible.innerHTML = sliderRight.innerHTML;
  } else {
    petsList.classList.remove('transition-right');
    changedItem = sliderLeft
    sliderVisible.innerHTML = sliderLeft.innerHTML; 
  }
  changedItem.innerHTML = '';
  let numberOfLi = 0;
  if (screenWidth >= 1280) numberOfLi = 3;
  else if (screenWidth >= 768) numberOfLi = 2;
  else numberOfLi = 1;
  for (let i = 0; i < numberOfLi; i++) {
    const card = createCard(pets[getRandomNum()]);
    changedItem.append(card);
  }



  // changedItem.innerHTML = '';
  // for (let i = 0; i < 3; i++) {
  //   const card = createCard(pets[getRandomNum()]);
  //   changedItem.append(card);
  // }

  leftBtn.addEventListener('click', moveLeft); 
  rightBtn.addEventListener('click', moveRight); 
});

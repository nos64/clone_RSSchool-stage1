import shuffle from './shuffleCard.js';
import getData from './getData.js'
import {pets} from '../../../assets/db/pets.js';

export const petsList = document.querySelector('.pets-list__list');

// const screenWidth = screen.width;
const sliderLeft = document.querySelector('.pets-list__left')
const sliderVisible = document.querySelector('.pets-list__visible')
const sliderRight = document.querySelector('.pets-list__right')

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
  return li;
};

/**Загрузка страницы и стартовые карточки можно вынести */
let initArr = [];
let visibleArr = [];


const loadPage = (array) => {
  const shuffleArray = shuffle(array);
  for (let i = 0; i < 3; i++) {
    sliderLeft.append(createCard(shuffleArray[i]));
    initArr.push(shuffleArray[i]);
  }
  for (let i = 3; i < 6; i++) {
    sliderVisible.append(createCard(shuffleArray[i]));
    initArr.push(shuffleArray[i]);
    visibleArr.push(shuffleArray[i]);
  }
  for (let i = 0; i < 3; i++) {
    sliderRight.append(createCard(shuffleArray[i]));
    initArr.push(shuffleArray[i]);
  }
};
// console.log('initArr: ', initArr);
console.log('visibleArr: ', visibleArr);
loadPage(pets)

//Рандом
function getRandom() {
  let newArr = [];
  while (newArr.length < 3) {
    let item = initArr[Math.floor(Math.random() * initArr.length)];
    // if (!visibleArr.includes(item) && !newArr.includes(item)) {
      visibleArr.forEach(elem => {
        console.log(elem.name)
        
      })
      
  }
  visibleArr = newArr;
  console.log('visibleArr: ', ...visibleArr);
}

//Заполнение карточек
function getCardsLeft() {
  sliderLeft.append(...visibleArr)
}

function getCardsRight() {
  sliderRight.append(...visibleArr)
  
}

// console.log('sliderLeft: ', sliderLeft);
// console.log('sliderRight: ', sliderRight);


// const newCard = () => {
//   // let visibleItems = document.getElementsByClassName('pets-list__item');
  
//   const visible = []
//   for (let i = 0; i < visibleItems.length; i++) {
//     if (i > 2 && i < 6) {
//       visible.push(visibleItems[i])
//     } 
//   }
//   console.log('visible: ', visible);
//   const a = Array.from(visibleItems);
//   const b = Array.from(visible);
//   let result = [];
 
//   a.forEach((element) => {
//     if ( !~b.indexOf(element)) arrayNewItems.push(element);
// });

//   return 
// }
// newCard(pets)



const leftBtn = document.querySelector('.button-left');
const rightBtn = document.querySelector('.button-right');

const moveLeft = () => {
  petsList.classList.add('transition-left');
  leftBtn.removeEventListener('click', moveLeft);
  rightBtn.removeEventListener('click', moveRight);
  sliderRight.innerHTML = "";
  getRandom()
  getCardsLeft(); 
};

const moveRight = () => {
  petsList.classList.add('transition-right');
  leftBtn.removeEventListener('click', moveLeft);
  rightBtn.removeEventListener('click', moveRight); 
  sliderLeft.innerHTML = ""
  getRandom()
  getCardsRight()
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
    // sliderVisible.innerHTML = sliderRight.innerHTML;

    // let itemLeftBACKUP = sliderRight.innerHTML;
    // let itemRightBACKUP = sliderVisible.innerHTML;

    // sliderVisible.innerHTML = sliderLeft.innerHTML;
    // sliderLeft.innerHTML = itemRightBACKUP;

  } else {
    petsList.classList.remove('transition-right');
  // changedItem = sliderLeft;
    sliderVisible.innerHTML = sliderLeft.innerHTML;

    // let itemRightBACKUP = sliderLeft.innerHTML;
    // let itemLeftBACKUP = sliderVisible.innerHTML;
    // sliderVisible.innerHTML = sliderRight.innerHTML;
    // sliderLeft.innerHTML = itemLeftBACKUP

  }
  // changedItem.innerHTML = '';
  // let numberOfLi = 0;
  // if (screenWidth >= 1280) numberOfLi = 3;
  // else if (screenWidth >= 768) numberOfLi = 2;
  // else numberOfLi = 1;
  // for (let i = 0; i < numberOfLi; i++) {
  //   const card = createCard(pets[getRandomNum()]);
  //   changedItem.append(card);
  // }


  // changedItem.innerHTML = '';
  // for (let i = 0; i < 3; i++) {
  //   const card = createCard(getRandom());
  //   changedItem.append(card);
  // }
  
  leftBtn.addEventListener('click', moveLeft); 
  rightBtn.addEventListener('click', moveRight); 
});



// newCard()
// const initPage = async () => {
//   const data = await getData();
//  const cards =  loadPage(data);
//  newCard(cards)
//   // return data
// }

// initPage()








const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation__list');
const wrapper = document.querySelector('.wrapper');

const petsList = document.querySelector('.pets-list__list');
const pageOverlayModal = document.querySelector('.page__overlay_modal');

// const modal = document.querySelector('.modal');


const screenWidth = screen.width;
// const screenWidth = document.body.clientWidth * window.devicePixelRatio
// console.log(document.body.clientHeight * window.devicePixelRatio)

const disableScroll = () => {
  const widthScroll = window.innerWidth - document.body.offsetWidth;
  document.body.scrollPosition = window.scrollY;
  document.documentElement.style.cssText = `
  position: relstive;
  height: 100vh;
  `;

  document.body.style.cssText = `
overflow: hidden;
position: fixed;
top: -${document.body.scrollPosition}px;
left: 0;
height: 100vh;
width: 100vw;
padding-right: ${widthScroll}px;
`;
};

const enableScroll = () => {
  console.log(1)
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
  requestAnimationFrame(animation)
};

const hideElem = (elem, param) => {
  let opacity = getComputedStyle(elem).getPropertyValue('opacity');
  const animation = () => {
    opacity -= param;
    elem.style.opacity = opacity;
    if (opacity > 0) requestAnimationFrame(animation);
    else elem.style.display = 'none';
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
  enableScroll()
};

navigation.addEventListener('click', e => {
  if (e.target.classList.contains('navigation__link')) closeMenu()
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

    cardsArray.push(li)
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


/* <div class="page__overlay page__overlay_modal">
<div class="modal">
  <img class="modal__image" src="../../assets/images/pets-jennifer.png" alt="">
  <div class="modal__text-wapper">
    <h3 class="modal__text-name">Jennifer</h3>
    <p class="modal__text-type">Dog - Labrador</p>
    <p class="modal__text-story">
      Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.
    </p>
    <ul class="modal__text-list">
      <li class="modal__text-item"><span class="text-item__text"><b>Age: </b><span class="modal__text-param">2 months</span></span></li>
      <li class="modal__text-item"><span class="text-item__text"><b>Inoculations: </b><span class="modal__text-param">none</span></span></li>
      <li class="modal__text-item"><span class="text-item__text"><b>Diseases: </b><span class="modal__text-param">none</span></span></li>
      <li class="modal__text-item"><span class="text-item__text"><b>Parasites: </b><span class="modal__text-param">none</span></span></li>
    </ul>
  </div>
  <button class="modal__close">
    <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929"/>
      </svg>
  </button>
</div>
</div> */


const renderModal = (data) => {
  let modals = [];
  const modal = document.createElement('div')
  modal.className = 'modal';
  for (let i = 0; i < data.length; i++) {
    modal.dataset.name = data[i].name
    modal.innerHTML = `
      <img class="modal__image" src="${data[i].img}" alt="">
      <div class="modal__text-wapper">
        <h3 class="modal__text-name">${data[i].name}</h3>
        <p class="modal__text-type">${data[i].type} - ${data[i].breed}</p>
        <p class="modal__text-story">
        ${data[i].description}
        </p>
        <ul class="modal__text-list">
        <li class="modal__text-item"><span class="text-item__text"><b>Age: </b><span class="modal__text-param age">${data[i].age}</span></span></li>
        <li class="modal__text-item"><span class="text-item__text"><b>Inoculations: </b><span class="modal__text-param inoculations">${data[i].inoculations}</span></span></li>
        <li class="modal__text-item"><span class="text-item__text"><b>Diseases: </b><span class="modal__text-param diseases">${data[i].diseases}</span></span></li>
        <li class="modal__text-item"><span class="text-item__text"><b>Parasites: </b><span class="modal__text-param parasites">${data[i].parasites}</span></span></li>
        </ul>
      </div>
      <button class="modal__close">
        <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929"/>
          </svg>
      </button>
    </div>
    `;

  pageOverlayModal.append(modal);
    modals.push(modal);
  }
  // console.log(modals)

  return modals;
}




// const renderModal = (data) => {

//   const modalTextName = document.querySelector('.modal__text-name');
//   const modalImage = document.querySelector('.modal__image');
//   const modalType = document.querySelector('.type');
//   const modalBreed = document.querySelector('.breed');
//   const modalDescription = document.querySelector('.description');
//   const modalAge = document.querySelector('.age');
//   const modalInoculations = document.querySelector('.inoculations');
//   const modalDiseases = document.querySelector('.diseases');
//   for (let i = 0; i < data.length; i++) {
//     modalTextName.textContent = data[i].name;
//     modalImage.src = data[i].img;
//     modalType.textConten = data[i].type;
//     modalBreed.textContent = data[i].breed;
//     modalDescription.textContent = data[i].description;
//     modalAge.textContent = data[i].age;
//     modalInoculations.textContent = data[i].inoculations;

//   }
// }

const showModal = popup => {
  const openModal = document.createElement('div');
  openModal.classList.add('page__overlay_modal_open');
  // showElem(openModal);
  document.body.append(openModal);
}

const modalClick = (modals) => {
  // console.log(modals)
  let dataSet ='';
  // modals.forEach(modal => {
    // console.log(modal)
    petsList.addEventListener('click', e => {
      if (e.target.closest('.pets-list__item')) {
        dataSet = e.target.dataset.name;
        console.log('dataSet: ', dataSet);
      }
        const popup = modals.find(item => {

          
          item.name === e.target.dataset.name
        } )
        console.log(popup)
        showModal(popup)

        // pageOverlayModal.classList.add('page__overlay_modal_open');
        // showElem(modal, 0.03);
      
    // });
  })  
  // if (event.target.closest('.pets-list__item')) {
  //   let dataSet = e.target.dataset.name;
    

  //   pageOverlayModal.classList.add('page__overlay_modal_open');
  //   showElem(modal, 0.03);
  // }
}



// petsList.addEventListener('click', e => {
//   if (e.target.closest('.pets-list__item')) {
//     let dataSet = e.target.dataset.name;
    
//     // renderModal(dataSet)
//     pageOverlayModal.classList.add('page__overlay_modal_open');
//     showElem(modal, 0.03);
//   }
// });

const modalClose = document.querySelector('.modal__close');
/**Modal-window close */
modalClose.addEventListener('click', () => {
  hideElem(modal, 0.03)
  pageOverlayModal.classList.remove('page__overlay_modal_open');
});


/**Start page */
  const initPage = async () => {
    const data = await getData();
    const cards = renderCard(data);
    const modals = renderModal(data);

    
    showCard(cards);
    modalClick(modals);
  }

  initPage();
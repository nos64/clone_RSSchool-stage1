// import {dataBase} from '../../src/db/db';
// import { Card } from '../modules/types/types';
// import { createCard } from '../modules/main/content/content';

// interface Filters {
//   [color: string]: DOMStringMap;
// }

// const colorsBtn: NodeListOf<HTMLElement> = document.querySelectorAll('.button-color');
// // console.log('colorsBtn: ', colorsBtn);
// const allCards: NodeListOf<HTMLElement> = document.querySelectorAll('.card');

// const appliedFilters:Filters = {
// };

// function addClickColorBtn() {
//   colorsBtn.forEach(btn => {
//     btn.addEventListener('click', () => {
//       if(btn.classList.contains('button-white')) {
//         btn.classList.toggle('button-color-active-negative');
//       }
//       btn.classList.toggle('button-color-active');
      
//       appliedFilters.color = btn.dataset;
//       allCards.forEach(card => {
//         let canShow = true;
//         Object.keys(appliedFilters).forEach(function(key) {
//           if (card?.getAttribute('data-' + key) !== appliedFilters.color) {
//             canShow = false;
//           }
//         })
//         if (canShow) {
//           card.style.display = 'block';
//         } else {
//           card.style.display = 'none';
//         }
//       })
//     })
//   });
// }

// addClickColorBtn()

// function addClick (btn: HTMLElement) {
//   if(btn.classList.contains('button-white')) {
//     btn.classList.toggle('button-color-active-negative');
//   }
//   btn.classList.toggle('button-color-active');
// }



const colorsBtn= document.querySelectorAll('.button-color');
// console.log('colorsBtn: ', colorsBtn);
const allCards= document.querySelectorAll('.card');

const appliedFilters = {};


function addClickColorBtn() {
  colorsBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      if(btn.classList.contains('button-white')) {
        btn.classList.toggle('button-color-active-negative');
      }
      btn.classList.toggle('button-color-active');
      
      if (btn.classList.contains('button-color-active') || btn.classList.contains('button-color-active-negative')) {
        appliedFilters[`color-${btn.getAttribute('data-color')}`] = btn.getAttribute('data-color');
      } else delete appliedFilters[`color-${btn.getAttribute('data-color')}`]
      
      

      showFiltered()
      console.log('appliedFilters: ', appliedFilters);
    })
  });
}

function showFiltered () {
  Object.keys(appliedFilters).forEach(key => {
    let dataCard = key.split('-').splice(0, 1).join();
    let dataObj = key.split('-').splice(1, 1).join();

    function filt() {
      
    }
    const arr = allCards.filter(card => card.getAttribute(`data-${dataCard}`) === appliedFilters[`color-${dataObj}`])
    console.log(arr)
  });

  // allCards.forEach(card => {
  //   let canShow = true;
  //   Object.keys(appliedFilters).forEach(key => {
  //     let dataCard = key.split('-').splice(0, 1).join();
  //     let dataObj = key.split('-').splice(1, 1).join();
  //     if (card.getAttribute(`data-${dataCard}`) !== appliedFilters[`color-${dataObj}`]) {
  //       canShow = false;
  //     }
  //   })
  //   if (!canShow) {
  //     card.classList.add('hide');
  //   } else {
  //     card.classList.remove('hide');
  //   }
  // })
}

addClickColorBtn()


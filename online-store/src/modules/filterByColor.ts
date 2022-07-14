import {dataBase} from '../../src/db/db';
import { Card } from '../modules/types/types';
import { createCard } from '../modules/main/content/content';

const colorsBtn: NodeListOf<HTMLElement> = document.querySelectorAll('.button-color');
// console.log('colorsBtn: ', colorsBtn);

const sortArrObj: Card[] = [];

const addClickColorBtn = () => {
  Array.from(colorsBtn).forEach(btn => {
    btn.addEventListener('click', () => {
      if(btn.classList.contains('button-white')) {
        btn.classList.toggle('button-color-active-negative');
      }
      btn.classList.toggle('button-color-active');

      dataBase.forEach(item => {
        if (item.colorID === btn.dataset.color) {
          console.log(item)
          sortArrObj.push(item)
          console.log('sortArrObj: ', sortArrObj);
        }
      })
      createCard(sortArrObj)
    })
  });
}

addClickColorBtn()

// function addClick (btn: HTMLElement) {
//   if(btn.classList.contains('button-white')) {
//     btn.classList.toggle('button-color-active-negative');
//   }
//   btn.classList.toggle('button-color-active');
// }




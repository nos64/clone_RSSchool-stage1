import {dataBase} from '../../src/db/db';
import { Card } from '../modules/types/types';
import { createCard, variableBase } from '../modules/main/content/content';

const sortField: HTMLSelectElement | null = document.querySelector('.sort-field');


  console.log(sortField?.value)
  let sortedArray: Card[];
sortField?.addEventListener("change", () => {
  if (sortField?.value ===  'name_a-z') {
    sortedArray = dataBase.sort((obj1, obj2) => {
      if (obj1.brand > obj2.brand) {
          return 1;
      }
      if (obj1.brand < obj2.brand) {
          return -1;
      }
      return 0;
    });
  } else if (sortField?.value ===  'name_z-a') {
    sortedArray = dataBase.sort((obj1, obj2) => {
      if (obj1.brand < obj2.brand) {
          return 1;
      }
      if (obj1.brand > obj2.brand) {
          return -1;
      }
      return 0;
    });
  } else if (sortField?.value ===  'year_asc') {
    sortedArray = dataBase.sort((obj1, obj2) => {
      if (obj1.year > obj2.year) {
          return 1;
      }
      if (obj1.year < obj2.year) {
          return -1;
      }
      return 0;
    });
  } else if (sortField?.value ===  'year_desc') {
    sortedArray = dataBase.sort((obj1, obj2) => {
      if (obj1.year < obj2.year) {
          return 1;
      }
      if (obj1.year > obj2.year) {
          return -1;
      }
      return 0;
    }); 
  } else if (sortField?.value ===  'volume_asc') {
    sortedArray = dataBase.sort((obj1, obj2) => {
      if (obj1.volume > obj2.volume) {
          return 1;
      }
      if (obj1.volume < obj2.volume) {
          return -1;
      }
      return 0;
    });
  } else if (sortField?.value ===  'volume_desc') {
    sortedArray = dataBase.sort((obj1, obj2) => {
      if (obj1.volume < obj2.volume) {
          return 1;
      }
      if (obj1.volume > obj2.volume) {
          return -1;
      }
      return 0;
    });
  }
  createCard(sortedArray);
})


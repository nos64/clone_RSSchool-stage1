import { variableBase } from '../../src/modules/main/content/content';
import { createCard } from '../modules/main/content/content';
import { Card } from '../modules/types/types';


const brandSet: Set<string> = new Set(); 
variableBase.forEach(item => brandSet.add(item.brand));
const brandArray = Array.from(brandSet);
console.log('brandArray: ', brandArray);

interface filterTypes {
  brand?: string;
  colorID?: string | null | undefined;
}

const filtersObj:filterTypes = {}
let brandAuto: Card[];
// const colorSet: Set<string> = new Set(); 
// variableBase.forEach(item => colorSet.add(item.colorID));
// const colorArray = Array.from(colorSet);

// const yearSet: Set<string> = new Set(); 
// variableBase.forEach(item => yearSet.add(item.year));
// const yearArray = Array.from(yearSet);

// const volumeSet: Set<string> = new Set(); 
// variableBase.forEach(item => volumeSet.add(item.volume));
// const volumeArray = Array.from(volumeSet);

const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('.check');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', () => {
    
    if (checkbox.checked) {
      filtersObj.brand = checkbox.value;
      brandAuto = variableBase.filter(item => item.brand === filtersObj.brand);
    } else {
      brandAuto = variableBase;
    }
    
    createCard(brandAuto);
  })
})

const colorBtns: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.button-color');
colorBtns.forEach(btn => {
  btn.addEventListener('click', () => {
  if (!btn.classList.contains('button-color-active')) {
    filtersObj.colorID = btn.getAttribute('data-color');
    brandAuto = variableBase.filter(item => item.colorID === filtersObj.colorID);
  } else {
    brandAuto = variableBase;
  } 
    
    createCard(brandAuto);
  })
})




const sortField: HTMLSelectElement | null = document.querySelector('.sort-field');
let sortedArray: Card[];

sortField?.addEventListener("change", () => {
  if (sortField?.value ===  'name_a-z') {
    sortedArray = variableBase.sort((obj1, obj2) => {
      if (obj1.brand > obj2.brand) {
          return 1;
      }
      if (obj1.brand < obj2.brand) {
          return -1;
      }
      return 0;
    });
  } else if (sortField?.value ===  'name_z-a') {
    sortedArray = variableBase.sort((obj1, obj2) => {
      if (obj1.brand < obj2.brand) {
          return 1;
      }
      if (obj1.brand > obj2.brand) {
          return -1;
      }
      return 0;
    });
  } else if (sortField?.value ===  'year_asc') {
    sortedArray = variableBase.sort((obj1, obj2) => {
      if (obj1.year > obj2.year) {
          return 1;
      }
      if (+obj1.year < +obj2.year) {
          return -1;
      }
      return 0;
    });
  } else if (sortField?.value ===  'year_desc') {
    sortedArray = variableBase.sort((obj1, obj2) => {
      if (+obj1.year < +obj2.year) {
          return 1;
      }
      if (+obj1.year > +obj2.year) {
          return -1;
      }
      return 0;
    }); 
  } else if (sortField?.value ===  'volume_asc') {
    sortedArray = variableBase.sort((obj1, obj2) => {
      if (+obj1.volume > +obj2.volume) {
          return 1;
      }
      if (+obj1.volume < +obj2.volume) {
          return -1;
      }
      return 0;
    });
  } else if (sortField?.value ===  'volume_desc') {
    sortedArray = variableBase.sort((obj1, obj2) => {
      if (+obj1.volume < +obj2.volume) {
          return 1;
      }
      if (+obj1.volume > +obj2.volume) {
          return -1;
      }
      return 0;
    });
  }
  createCard(sortedArray)
})
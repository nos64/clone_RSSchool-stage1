import { variableBase } from '../../src/modules/main/content/content';
import { createCard } from '../modules/main/content/content';
import { Card } from '../modules/types/types';


const prevArray: Card[] = JSON.parse(JSON.stringify(variableBase));
let sortedArray: Card[] = Object.assign(variableBase);

interface filterTypes {
  valueMin?: string[];
  valueMax?: string[];
  yearMin?: string[];
  yearMax?: string[];
  brand?: string[];
  colorID?: string[] | null;
}

const filtersObj:filterTypes = {
  brand: [],
  colorID: [],
}

/**Чекбоксы по брендам */
const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('.check');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
      if (!filtersObj.brand?.includes(checkbox.value)) filtersObj.brand?.push(checkbox.value);
      sortedArray = prevArray.filter(obj => filtersObj.brand?.includes(obj.brand));
    } else {
      filtersObj.brand?.splice(filtersObj.brand?.indexOf(checkbox.value), 1)
        sortedArray = prevArray.filter(obj => filtersObj.brand?.includes(obj.brand));
      if (filtersObj.brand?.length === 0) sortedArray = prevArray;
    }
    createCard(sortedArray);
  })
})

/**Фильтр по цвету */
const colorBtns: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.button-color');
colorBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const attr: string | null = btn.getAttribute('data-color');
    if (attr) {
      if (!btn.classList.contains('button-color-active')) {
        if (!filtersObj.colorID?.includes(attr)) filtersObj.colorID?.push(attr);
        sortedArray = prevArray.filter(obj => filtersObj.colorID?.includes(obj.colorID));
      } else {
        filtersObj.colorID?.splice(filtersObj.colorID?.indexOf(attr), 1)
          sortedArray = prevArray.filter(obj => filtersObj.colorID?.includes(obj.colorID));
        if (filtersObj.colorID?.length === 0) sortedArray = prevArray;
      }
      createCard(sortedArray);
    }
    
  })
})

/**Сортировка */
const sortField: HTMLSelectElement | null = document.querySelector('.sort-field');

sortField?.addEventListener("change", () => {
  if (sortField?.value ===  'name_a-z') {
    sortedArray.sort((obj1, obj2) => {
      if (obj1.brand > obj2.brand) {
          return 1;
      }
      if (obj1.brand < obj2.brand) {
          return -1;
      }
      return 0;
    });
  } else if (sortField?.value ===  'name_z-a') {
    sortedArray.sort((obj1, obj2) => {
      if (obj1.brand < obj2.brand) {
          return 1;
      }
      if (obj1.brand > obj2.brand) {
          return -1;
      }
      return 0;
    });
  } else if (sortField?.value ===  'year_asc') {
    sortedArray.sort((obj1, obj2) => {
      if (obj1.year > obj2.year) {
          return 1;
      }
      if (+obj1.year < +obj2.year) {
          return -1;
      }
      return 0;
    });
  } else if (sortField?.value ===  'year_desc') {
    sortedArray.sort((obj1, obj2) => {
      if (+obj1.year < +obj2.year) {
          return 1;
      }
      if (+obj1.year > +obj2.year) {
          return -1;
      }
      return 0;
    }); 
  } else if (sortField?.value ===  'volume_asc') {
    sortedArray.sort((obj1, obj2) => {
      if (+obj1.volume > +obj2.volume) {
          return 1;
      }
      if (+obj1.volume < +obj2.volume) {
          return -1;
      }
      return 0;
    });
  } else if (sortField?.value ===  'volume_desc') {
    sortedArray.sort((obj1, obj2) => {
      if (+obj1.volume < +obj2.volume) {
          return 1;
      }
      if (+obj1.volume > +obj2.volume) {
          return -1;
      }
      return 0;
    });
  }
  createCard(sortedArray);
})


/**Показать популярные */
const popularCheck: HTMLInputElement | null = document.querySelector('.popularity-check');

popularCheck?.addEventListener('click', () => {
  if (popularCheck.checked) {
    sortedArray = sortedArray.filter(item => item.favorite === true)
  } else {
    sortedArray = prevArray;
  }
  createCard(sortedArray);
})

/**Поиск */
const searchField: HTMLInputElement | null = document.querySelector('.search-form__search-field');

  searchField?.addEventListener('input', () => {
    const searchValue = searchField.value.toLowerCase().trim();
    if (searchValue !== '') {
      sortedArray = sortedArray.filter(item => item.brand.toLowerCase().search(searchValue) !== -1)
    } else {
      sortedArray = prevArray;
    }
    createCard(sortedArray);
  })



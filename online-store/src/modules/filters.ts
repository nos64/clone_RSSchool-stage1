import { variableBase } from './main/content/createCard';
import { createCard } from './main/content/createCard';
import { Card } from '../modules/types/types';

const prevArray: Card[] = JSON.parse(JSON.stringify(variableBase));
let sortedArray: Card[] = Object.assign(variableBase);

/**Сортировка */
const sortField: HTMLSelectElement | null = document.querySelector('.sort-field');
  function sorting(arr: Card[]) {
  if (sortField?.value === 'name_a-z') {
    arr.sort((obj1, obj2) => {
      if (obj1.brand > obj2.brand) {
        return 1;
      }
      if (obj1.brand < obj2.brand) {
        return -1;
      }
      return 0;
    });
  } else if (sortField?.value === 'name_z-a') {
    arr.sort((obj1, obj2) => {
      if (obj1.brand < obj2.brand) {
        return 1;
      }
      if (obj1.brand > obj2.brand) {
        return -1;
      }
      return 0;
    });
  } else if (sortField?.value === 'year_asc') {
    arr.sort((obj1, obj2) => {
      if (obj1.year > obj2.year) {
        return 1;
      }
      if (+obj1.year < +obj2.year) {
        return -1;
      }
      return 0;
    });
  } else if (sortField?.value === 'year_desc') {
    arr.sort((obj1, obj2) => {
      if (+obj1.year < +obj2.year) {
        return 1;
      }
      if (+obj1.year > +obj2.year) {
        return -1;
      }
      return 0;
    });
  } else if (sortField?.value === 'volume_asc') {
    arr.sort((obj1, obj2) => {
      if (+obj1.volume > +obj2.volume) {
        return 1;
      }
      if (+obj1.volume < +obj2.volume) {
        return -1;
      }
      return 0;
    });
  } else if (sortField?.value === 'volume_desc') {
    arr.sort((obj1, obj2) => {
      if (+obj1.volume < +obj2.volume) {
        return 1;
      }
      if (+obj1.volume > +obj2.volume) {
        return -1;
      }
      return 0;
    });
  }
  createCard(arr);
}

/**Показать популярные */
const popularCheck: HTMLInputElement | null = document.querySelector('.popularity-check');
popularCheck?.addEventListener('click', () => {
  if (popularCheck.checked) {
    sortedArray = sortedArray.filter(item => item.favorite === true)
  } else {
    sortedArray = prevArray;
  }
  createCard(sortedArray);
});

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
});


const setingsWrapper: HTMLDivElement | null = document.querySelector('.settings-wrapper');
setingsWrapper?.addEventListener('input', filterGoods)

export function filterGoods() {
  let modifyArr: Card[] = [];
  const brands: NodeListOf<HTMLInputElement> = document.querySelectorAll('.brand-checkbox:checked');
  const brandsArr = Array.from(brands).map(brand => brand.value);
  
  const colors: NodeListOf<HTMLInputElement> = document.querySelectorAll('.color-checkbox:checked');
  const colorsArr = Array.from(colors).map(color => color.value);
 
  const volMin: HTMLInputElement | null = document.querySelector('.quantity-min');
  const volMax: HTMLInputElement | null = document.querySelector('.quantity-max');
  const yearMin: HTMLInputElement | null = document.querySelector('.year-min');
  const yearMax: HTMLInputElement | null = document.querySelector('.year-max');

    modifyArr = sortedArray.filter(item => (
    (!brandsArr.length || brandsArr.includes(item.brand)) &&
    (!colorsArr.length || colorsArr.includes(item.color)) &&
    (!volMin || +volMin?.value <= +item.volume) &&
    (!volMax || +volMax?.value >= +item.volume) &&
    (!yearMin || +yearMin?.value <= +item.year) &&
    (!yearMax || +yearMax?.value >= +item.year)
  ));
  sorting(modifyArr)
  createCard(modifyArr)
}












// interface FilterTypes {
//   valueMin: string[];
//   valueMax: string[];
//   yearMin: string[];
//   yearMax: string[];
//   brand: string[];
//   colorID: string[] | null;
// }

// const filtersObj: Partial<FilterTypes> = {
//   brand: [],
//   colorID: [],
// }

// /**Чекбоксы по брендам */
// const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('.check');
// checkboxes.forEach(checkbox => {
//   checkbox.addEventListener('click', () => {
//     if (checkbox.checked) {
//       if (!filtersObj.brand?.includes(checkbox.value)) filtersObj.brand?.push(checkbox.value);
//       sortedArray = prevArray.filter(obj => filtersObj.brand?.includes(obj.brand));
//     } else {
//       filtersObj.brand?.splice(filtersObj.brand?.indexOf(checkbox.value), 1)
//         sortedArray = prevArray.filter(obj => filtersObj.brand?.includes(obj.brand));
//       if (filtersObj.brand?.length === 0) sortedArray = prevArray;
//     }
//     createCard(sortedArray);
//   })
// })

// /**Фильтр по цвету */
// const colorBtns: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.button-color');
// colorBtns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     const attr: string | null = btn.getAttribute('data-color');
//     if (attr) {
//       if (!btn.classList.contains('button-color-active')) {
//         if (!filtersObj.colorID?.includes(attr)) filtersObj.colorID?.push(attr);
//         sortedArray = prevArray.filter(obj => filtersObj.colorID?.includes(obj.colorID));
//       } else {
//         filtersObj.colorID?.splice(filtersObj.colorID?.indexOf(attr), 1)
//           sortedArray = prevArray.filter(obj => filtersObj.colorID?.includes(obj.colorID));
//         if (filtersObj.colorID?.length === 0) sortedArray = prevArray;
//       }
//       createCard(sortedArray);
//     }

//   })
// })








// function createCard1(goods: Card[]) {
//   const contentWrapper: Element | null = document.querySelector('.content-wrapper');
//   if (contentWrapper)
//   contentWrapper.innerHTML = goods.map(n => `
//   <div class="card">
//   <h3 class="card__title">${n.brand}</h3>
//   <p class="card__subtitle">${n.model}</p>
//   <div class="card__image-wrapper">
//   <img class="card__image" src="${n.image}" alt="${n.brand} ${n.model}">
//   </div>
//   <div>
//   <p class="card__description">
//   Год выпуска: <span class="card__year">${n.year}</span>
//   </p>
//   <p class="card__description">Цвет: 
//   <span class="card__color">${n.color}</span>
//   </p>
//   <p class="card__description">Количество дверей: 
//   <span class="card__door">${n.doors}</span>
//   </p>
//   <p class="card__description">Мощность двигателя: 
//   <span class="card__volume">${n.volume}</span>
//   </p>
//   <p class="card__description">Количество на складе: 
//   <span class="card__volume">${n.quantity}</span>
//   </p>
//   <p class="card__description">Популярный: 
//   <span class="card__popular">${n.favorite ? 'Да' : 'Нет'}</span>
//   </p>
//   </div>
//   </div>
// `).join('');
// }

// const colors: NodeListOf<HTMLInputElement> = document.querySelectorAll('.color-checkbox');

// const addClickColorBtn = () => {
//   colorsBtn.forEach(btn => {
//     btn.addEventListener('click', () => {
//       if(btn.classList.contains('button-white')) {
//         btn.classList.toggle('button-color-active-negative');
//       }
//       btn.classList.toggle('button-color-active');
//     })
//   });
// }

// addClickColorBtn()

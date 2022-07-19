
import * as noUiSlider from 'nouislider'
import 'nouislider/dist/nouislider.css';
import './sliders.scss';
import { data } from '../main/main';
import { Card } from '../types/types';
import { createCards } from '../main/content/content';

// let sortData: Card[] = data.slice();

/**Сортировка */
const sortField: HTMLSelectElement | null = document.querySelector('.sort-field');
  function sorting(sortData: Card[]) {
  if (sortField?.value === 'name_a-z') {
    sortData.sort((obj1, obj2) => {
      if (obj1.brand > obj2.brand) {
        return 1;
      }
      if (obj1.brand < obj2.brand) {
        return -1;
      }
      return 0;
    });
  } else if (sortField?.value === 'name_z-a') {
    sortData.sort((obj1, obj2) => {
      if (obj1.brand < obj2.brand) {
        return 1;
      }
      if (obj1.brand > obj2.brand) {
        return -1;
      }
      return 0;
    });
  } else if (sortField?.value === 'year_asc') {
    sortData.sort((obj1, obj2) => {
      if (obj1.year > obj2.year) {
        return 1;
      }
      if (+obj1.year < +obj2.year) {
        return -1;
      }
      return 0;
    });
  } else if (sortField?.value === 'year_desc') {
    sortData.sort((obj1, obj2) => {
      if (+obj1.year < +obj2.year) {
        return 1;
      }
      if (+obj1.year > +obj2.year) {
        return -1;
      }
      return 0;
    });
  } else if (sortField?.value === 'volume_asc') {
    sortData.sort((obj1, obj2) => {
      if (+obj1.volume > +obj2.volume) {
        return 1;
      }
      if (+obj1.volume < +obj2.volume) {
        return -1;
      }
      return 0;
    });
  } else if (sortField?.value === 'volume_desc') {
    sortData.sort((obj1, obj2) => {
      if (+obj1.volume < +obj2.volume) {
        return 1;
      }
      if (+obj1.volume > +obj2.volume) {
        return -1;
      }
      return 0;
    });
  }
  createCards(sortData);
}


/**Поиск */
const searchField: HTMLInputElement | null = document.querySelector('.search-form__search-field');
searchField?.addEventListener('input', () => {
  const searchValue = searchField.value.toLowerCase().trim();
  if (searchValue !== '') {
    console.log(data.filter(item => item.brand.toLowerCase().search(searchValue) !== -1))
    // sortData = sortData.filter(item => item.brand.toLowerCase().search(searchValue) !== -1)
  } else {
    // sortData = data;
  }
  // createCards(sortData);
});

// function search(arr: Card[], val: string | undefined) {
//   arr = arr.filter(item => item.brand.toLowerCase().search(val) !== -1)
// }

/**Фильтры */
const setingsWrapper: HTMLDivElement | null = document.querySelector('.settings-wrapper');
setingsWrapper?.addEventListener('input', filterGoods)

function filterGoods() {
  let modifyArr: Card[] = [];
  const popularCheck: HTMLInputElement | null = document.querySelector('.popularity-check');

  const searchField: HTMLInputElement | null = document.querySelector('.search-form__search-field');

  const brands: NodeListOf<HTMLInputElement> = document.querySelectorAll('.brand-checkbox:checked');
  const brandsArr = Array.from(brands).map(brand => brand.value);
  
  const colors: NodeListOf<HTMLInputElement> = document.querySelectorAll('.color-checkbox:checked');
  const colorsArr = Array.from(colors).map(color => color.value);

  const owners: NodeListOf<HTMLInputElement> = document.querySelectorAll('.owners-checkbox:checked');
  const ownersArr = Array.from(owners).map(owner => owner.value);

  const minVolume: HTMLInputElement | null = document.querySelector('.volume-min');
  const maxVolume: HTMLInputElement | null = document.querySelector('.volume-max');
  const minYear: HTMLInputElement | null = document.querySelector('.year-min');
  const maxYear: HTMLInputElement | null = document.querySelector('.year-max');

  
  modifyArr = data.filter(item => (
    (!brandsArr.length || brandsArr.includes(item.brand)) &&
    (!colorsArr.length || colorsArr.includes(item.color)) &&
    (!ownersArr.length || ownersArr.includes(item.owners)) &&
    (!minVolume || +minVolume?.value <= +item.volume) &&
    (!maxVolume || +maxVolume?.value >= +item.volume) &&
    (!minYear || +minYear?.value <= +item.year) &&
    (!maxYear || +maxYear?.value >= +item.year)
  ));
  /**Показать популярные */
  if (popularCheck?.checked) {
    modifyArr = modifyArr.filter(item => item.favorite === true);
  }
  /**Поиск */
  const searchValue = searchField?.value.toLowerCase().trim();
  if (searchValue) {
    modifyArr = modifyArr.filter(item => item.brand.toLowerCase().search(searchValue) !== -1)
    // console.log(searchValue)
    // search(modifyArr, searchValue)
    // modifyArr = modifyArr.filter(item => item.brand.toLowerCase().search(searchValue) !== -1)
  } 

  // if(modifyArr.length === 0) alert('Совпадений не найдено')
  sorting(modifyArr)
  createCards(modifyArr)
  // showPopular(modifyArr);
}


function createVolumeSlider () {

  const volumeSlider: noUiSlider.target | null = document.getElementById('volume-slider');
  const minVolume: HTMLInputElement | null = document.querySelector('.volume-min');
  const maxVolume: HTMLInputElement | null = document.querySelector('.volume-max');

  if (!volumeSlider || !minVolume || !maxVolume) return;

  const arrVolume: number[] = [];
  data.forEach(item => arrVolume.push(+item.volume));
  arrVolume.sort((a, b) => a - b);

  const inputs = [minVolume, maxVolume];

  if (volumeSlider) {
    noUiSlider.create(volumeSlider, {
      start: [arrVolume[0], arrVolume[arrVolume.length - 1]],
      connect: true,
      range: { 
        'min': arrVolume[0],
        'max': arrVolume[arrVolume.length - 1]
      },
      step: 1,
      format: {
        to: function (value) {
            return  Math.round(value);
        },
        from: function (value) {
            return Number((value));
        }
      }
    });
  }

  volumeSlider.noUiSlider?.on('update', function (values: (string | number)[], handle: number): void {
    if (values) {
      inputs[handle].value = String(values[handle]);
    }
    filterGoods() 
  });

  minVolume.addEventListener('change', function(){
    volumeSlider.noUiSlider?.set([minVolume.value, 'null']);
  });

  maxVolume.addEventListener('change', function(){
    volumeSlider.noUiSlider?.set(['null', maxVolume.value]);
  });

}

createVolumeSlider()

function createYearSlider () {

  const yearSlider: noUiSlider.target | null = document.getElementById('year-slider');
  const minYear: HTMLInputElement | null = document.querySelector('.year-min');
  const maxYear: HTMLInputElement | null = document.querySelector('.year-max');

  if (!yearSlider || !minYear || !maxYear) return;

  const arrYear: number[] = [];
  data.forEach(item => arrYear.push(+item.year));
  arrYear.sort((a, b) => a - b);

  const inputs = [minYear, maxYear];

  if (yearSlider) {
    noUiSlider.create(yearSlider, {
      start: [arrYear[0], arrYear[arrYear.length - 1]],
      connect: true,
      range: { 
        'min': arrYear[0],
        'max': arrYear[arrYear.length - 1]
      },
      step: 1,
      format: {
        to: function (value) {
            return  Math.round(value);
        },
        from: function (value) {
            return Number((value));
        }
      }
    });
  }

  yearSlider.noUiSlider?.on('update', function (values: (string | number)[], handle: number): void {
    if (values) {
      inputs[handle].value = String(values[handle]);
    }
    filterGoods() 
  });

  minYear.addEventListener('change', function(){
    yearSlider.noUiSlider?.set([minYear.value, 'null']);
  });

  maxYear.addEventListener('change', function(){
    yearSlider.noUiSlider?.set(['null', maxYear.value]);
  });

}

createYearSlider()




const cards: HTMLCollectionOf<Element> = document.getElementsByClassName('card');
const elemBasketCount: HTMLElement | null = document.querySelector('.header_basket-count');
let basketCount = 0;
// const basketArray:[]Element = [];
// console.log(Array.from(cards))
const changeBasketCount = () => {
  if (elemBasketCount) {
    if (basketCount > 0) {
      elemBasketCount.style.opacity = '1';
      elemBasketCount.textContent = String(basketCount);
    } else {
      elemBasketCount.style.opacity = '0';
    }
  }
}

const showWarningMessage = () => {
    alert('Извините все слоты заняты')
}

const addToCart = () => {
  Array.from(cards).forEach(card => {
    card.addEventListener('click', () => {
      if (!card.classList.contains('card-active')) {
        if (basketCount < 20) {
          card.classList.add('card-active');
          basketCount++;
          // basketArray.push(card)
        } else {
          showWarningMessage();
        }
      } else {
        card.classList.remove('card-active');
        basketCount--;
      }
      changeBasketCount();
    })
  });
}

addToCart();
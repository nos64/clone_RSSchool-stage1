import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import './sliders.scss';
import { data } from '../main/main';
import { Card } from '../types/types';
import { createCards } from '../main/content/content';

let modifyArr: Card[] = data;

/** Сортировка */
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

// const minVolume: HTMLInputElement | null = document.querySelector('.volume-min');
// const maxVolume: HTMLInputElement | null = document.querySelector('.volume-max');
// const minYear: HTMLInputElement | null = document.querySelector('.year-min');
// const maxYear: HTMLInputElement | null = document.querySelector('.year-max');


/** Фильтры */
const setingsWrapper: HTMLDivElement | null = document.querySelector('.settings-wrapper');
setingsWrapper?.addEventListener('input', filterGoods)

function filterGoods() {

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
    (!brandsArr.length || brandsArr.includes(item.brand))
    && (!colorsArr.length || colorsArr.includes(item.color))
    && (!ownersArr.length || ownersArr.includes(item.owners))
    && (!minVolume || +minVolume?.value <= +item.volume)
    && (!maxVolume || +maxVolume?.value >= +item.volume)
    && (!minYear || +minYear?.value <= +item.year)
    && (!maxYear || +maxYear?.value >= +item.year)
  ));

  /** Показать популярные */
  if (popularCheck?.checked) {
    modifyArr = modifyArr.filter(item => item.favorite === true);
  }
  /** Поиск */
  const searchValue = searchField?.value.toLowerCase().trim();
  if (searchValue) {
    modifyArr = modifyArr.filter(item => item.brand.toLowerCase().search(searchValue) !== -1)
  }
  sorting(modifyArr)
  createCards(modifyArr)
  localStorage.setItem('modifyArr', JSON.stringify(modifyArr));
}

/** Получение данных из хранилища */
function getFromStorage() {
  const startData: Card[] = JSON.parse(localStorage.getItem('modifyArr') as string);
  const basketCnt = JSON.parse(localStorage.getItem('basketCount') as string);
  const basketArr = JSON.parse(localStorage.getItem('inBasketArr') as string);
  if (startData && startData.length !== 0) createCards(startData);
  else createCards(data);
  if (basketCnt) {
    basketCount = +basketCnt;
  }
  if (basketArr) inBasketArr = basketArr
  changeBasketCount()
}


/** Сброс фильтров */
const resetFiltersBtn: HTMLButtonElement | null = document.querySelector('.reset-filters');
const allCheckboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('.check');
const searchField: HTMLInputElement | null = document.querySelector('.search-form__search-field');
resetFiltersBtn?.addEventListener('click', e => {
  e.preventDefault();
  allCheckboxes.forEach(check => {
    if (check.checked) check.checked = false;
  });
    if (searchField) searchField.value = '';

  getFromStorage()
});

/** Сброс настроек */
const resetSettingsBtn: HTMLButtonElement | null = document.querySelector('.reset-settings');
resetSettingsBtn?.addEventListener('click', e => {
  e.preventDefault();
  if (localStorage.getItem('modifyArr')) localStorage.removeItem('modifyArr');
  if (localStorage.getItem('basketCount')) localStorage.removeItem('basketCount');
  if (localStorage.getItem('inBasketArr')) localStorage.removeItem('inBasketArr');
  document.location.reload();
})

function createVolumeSlider() {
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
        min: arrVolume[0],
        max: arrVolume[arrVolume.length - 1],
      },
      step: 1,
      format: {
        to: function (value) {
          return Math.round(value);
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
  });

  volumeSlider.noUiSlider?.on('slide', filterGoods)

  minVolume.addEventListener('change', function () {
    volumeSlider.noUiSlider?.set([minVolume.value, 'null']);
  });

  maxVolume.addEventListener('change', function () {
    volumeSlider.noUiSlider?.set(['null', maxVolume.value]);
  });

  resetFiltersBtn?.addEventListener('click', () => {
    volumeSlider.noUiSlider?.set([arrVolume[0], arrVolume[arrVolume.length - 1]]);
    filterGoods()
  })

}

createVolumeSlider()

function createYearSlider() {

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
          return Math.round(value);
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
  });

  yearSlider.noUiSlider?.on('slide', filterGoods)

  minYear.addEventListener('change', function () {
    yearSlider.noUiSlider?.set([minYear.value, 'null']);
  });

  maxYear.addEventListener('change', function () {
    yearSlider.noUiSlider?.set(['null', maxYear.value]);
  });

  resetFiltersBtn?.addEventListener('click', () => {
    yearSlider.noUiSlider?.set([arrYear[0], arrYear[arrYear.length - 1]]);
    filterGoods()
  })

}

createYearSlider();









// const basketData: Card[] = data;

const elemBasketCount: HTMLElement | null = document.querySelector('.header_basket-count');
let basketCount = 0;

const changeBasketCount = () => {
  if (elemBasketCount) {
    if (basketCount > 0) {
      elemBasketCount.style.opacity = '1';
      elemBasketCount.textContent = String(basketCount);
    } else {
      elemBasketCount.style.opacity = '0';
    }
  }
};

const showWarningMessage = () => {
  // eslint-disable-next-line no-alert
  alert('Извините все слоты заняты');
};

let inBasketArr: (string | undefined)[]  = []

const contentWrapper = document.querySelector('.content-wrapper');
contentWrapper?.addEventListener('click', e => {
  if (e.target instanceof HTMLElement && e.target.classList.contains('settings-btn')
    && e.target.parentNode && e.target.parentNode instanceof HTMLElement) {
    if (!e.target.classList.contains('settings-btn-active')) {
      if (basketCount < 20) {
        e.target.parentNode.classList.add('card-active');
        e.target.classList.add('settings-btn-active')
        e.target.textContent = 'В корзине';
        basketCount++;
        inBasketArr.push(e.target.parentNode.dataset.id)
        addDatainBasket()
      } else {
        showWarningMessage();
      }
    } else {
      e.target.classList.remove('settings-btn-active');
      e.target.parentNode.classList.remove('card-active');
      e.target.textContent = 'В корзину';
      basketCount--;
      inBasketArr.splice(inBasketArr.indexOf(e.target.parentNode.dataset.id), 1);
      delDatainBasket()
    }
  }
  changeBasketCount();
  localStorage.setItem('basketCount', JSON.stringify(basketCount));
  localStorage.setItem('modifyArr', JSON.stringify(modifyArr));
  localStorage.setItem('inBasketArr', JSON.stringify(inBasketArr));
})


function addDatainBasket () {
  modifyArr.forEach(item => {
    if (inBasketArr.includes(item.id)) {
      item.inBasket = true;
    } 
  })
} 

function delDatainBasket () {
  modifyArr.forEach(item => {
    if (!inBasketArr.includes(item.id)) {
      item.inBasket = false;
    } 
  })
} 

window.addEventListener('load', getFromStorage);
window.addEventListener('load', addDatainBasket);

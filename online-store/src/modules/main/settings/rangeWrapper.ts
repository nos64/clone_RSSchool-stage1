import './settings.scss';
import * as noUiSlider from 'nouislider'
import 'nouislider/dist/nouislider.css';
import './sliders.scss';
import {dataBase} from '../../../db/db';
// import {filterGoods} from '../../filters'

export const createRangesBlock = () => {
  const rangeDiv = document.createElement('div');
  rangeDiv.className = 'range-filters';

  const rangeQuantity =() => {
    const quantityWrapper: HTMLDivElement = document.createElement('div');
    quantityWrapper.className = 'range-filters__quantity';

    const quantityTitle = document.createElement('h2');
    quantityTitle.className = 'filter-title';
    quantityTitle.textContent = 'Мощность двигателя (л.с.)';

    const quantityFieldWrapper: HTMLDivElement = document.createElement('div');
    quantityFieldWrapper.className = 'range-wrapper';

    const minSpan: HTMLInputElement = document.createElement('input');
    minSpan.classList.add('range-field', 'quantity-min');
    minSpan.type = 'number';
    minSpan.value = '';

    const volumeSlider = document.createElement('div');
    volumeSlider.id = 'quantity-slider';

    const maxSpan: HTMLInputElement = document.createElement('input');
    maxSpan.classList.add('range-field', 'quantity-max');
    maxSpan.type = 'number';
    maxSpan.value = '';

    const sliderVolume: noUiSlider.target | null = volumeSlider;

    if (!sliderVolume || !minSpan || !maxSpan) return console.log(sliderVolume);
  
    const arrQuantity: number[] = [];
    dataBase.forEach(item => arrQuantity.push(+item.volume));
    arrQuantity.sort((a, b) => a - b);

    const inputs = [minSpan, maxSpan];
    if (sliderVolume) {
      noUiSlider.create(sliderVolume, {
        start: [arrQuantity[0], arrQuantity[arrQuantity.length - 1]],
        connect: true,
        range: { 
          'min': arrQuantity[0],
          'max': arrQuantity[arrQuantity.length - 1]
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
  
    sliderVolume.noUiSlider?.on('update', function (values: (string | number)[], handle: number): void {
      if (values) {
        inputs[handle].value = String(values[handle]);
      
      } 
      // filterGoods();
    });

    minSpan.addEventListener('change', function(){
      sliderVolume.noUiSlider?.set([minSpan.value, 'null']);
    });

    maxSpan.addEventListener('change', function(){
      sliderVolume.noUiSlider?.set(['null', maxSpan.value]);
    });

    quantityFieldWrapper.append(minSpan, volumeSlider, maxSpan);
    quantityWrapper.append(quantityTitle, quantityFieldWrapper);
    rangeDiv.append(quantityWrapper);
  }

  const rangeYear =() => {
    const yearWrapper: HTMLDivElement = document.createElement('div');
    yearWrapper.className = 'range-filters__year';

    const yearTitle = document.createElement('h2');
    yearTitle.className = 'filter-title';
    yearTitle.textContent = 'Год выпуска';

    const yearFieldWrapper: HTMLDivElement = document.createElement('div');
    yearFieldWrapper.className = 'range-wrapper';

    const minSpan: HTMLInputElement = document.createElement('input');
    minSpan.classList.add('range-field', 'year-min');
    minSpan.type = 'number';
    minSpan.value = '';

    const yearSlider = document.createElement('div');
    yearSlider.id = 'year-slider';

    const maxSpan: HTMLInputElement = document.createElement('input');
    maxSpan.classList.add('range-field', 'year-max');
    minSpan.type = 'number';
    minSpan.value = '';

    const sliderYear: noUiSlider.target | null = yearSlider;

    if (!sliderYear || !minSpan || !maxSpan) return console.log(sliderYear);
  
    const arrYear: number[] = [];
    dataBase.forEach(item => arrYear.push(+item.year));
    arrYear.sort((a, b) => a - b);

    const inputs = [minSpan, maxSpan];
    if (sliderYear) {
      noUiSlider.create(sliderYear, {
        start: [ arrYear[0], arrYear[arrYear.length - 1]],
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
  
    sliderYear.noUiSlider?.on('update', (values: (number | string)[], handle: number): void => {
      inputs[handle].value = String(values[handle]);
      // if (handle) {
        // maxSpan.value = String(values[handle]);
      // } 
      // else minSpan.value = String(values[handle])
    });

    minSpan.addEventListener('change', (): void => {
      sliderYear.noUiSlider?.set([minSpan.value, 'null']);
    });

    maxSpan.addEventListener('change', (): void => {
      sliderYear.noUiSlider?.set(['null', maxSpan.value]);
    });

    yearFieldWrapper.append(minSpan, yearSlider, maxSpan);
    yearWrapper.append(yearTitle, yearFieldWrapper);
    rangeDiv.append(yearWrapper);
  }

  rangeQuantity()
  rangeYear()

  return rangeDiv;
}
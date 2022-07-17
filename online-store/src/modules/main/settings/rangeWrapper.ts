import './settings.scss';
import * as noUiSlider from 'nouislider'
// import * as wNumb from 'nouislider'
import 'nouislider/dist/nouislider.css';
import './sliders.scss';
import {dataBase} from '../../../db/db';

export const range = () => {
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
    // const minSpan: HTMLSpanElement = document.createElement('span');
    minSpan.classList.add('range-field', 'quantity-min');
    minSpan.type = 'text';
    minSpan.value = '';

    const quantitySlider = document.createElement('div');
    quantitySlider.id = 'quantity-slider';

    const maxSpan: HTMLInputElement = document.createElement('input');
    // const maxSpan: HTMLSpanElement = document.createElement('span');
    maxSpan.classList.add('range-field', 'quantity-max');
    maxSpan.type = 'text';
    maxSpan.value = '';

    const slider: noUiSlider.target | null = quantitySlider; // Ищем слайдер

    if (!slider || !minSpan || !maxSpan) return console.log(slider)// если этих элементов нет, прекращаем выполнение функции, чтобы не было ошибок
  
    const arrQuantity: number[] = [];
    dataBase.forEach(item => arrQuantity.push(+item.volume));
    arrQuantity.sort((a, b) => a - b);

    const inputs = [minSpan, maxSpan];
    if (slider) {
      noUiSlider.create(slider, {
        start: [arrQuantity[0], arrQuantity[arrQuantity.length - 1]],
        connect: true, // указываем что нужно показывать выбранный диапазон
        range: { 
          'min': arrQuantity[0],
          'max': arrQuantity[arrQuantity.length - 1]
        },
        step: 1,
        // tooltips:true
        //  format: wNumb( { decimals: 0 })
        
      });
    }
  
    slider.noUiSlider?.on('update', function (values: (string | number)[], handle: number): void {
      if (values) {
        inputs[handle].value = String(values[handle]);
        // inputs[handle].setAttribute('value', String(values[handle]));

      } 
    });

    minSpan.addEventListener('change', function(){
      slider.noUiSlider?.set([minSpan.value, 'null']);
    });

    maxSpan.addEventListener('change', function(){
      slider.noUiSlider?.set(['null', maxSpan.value]);
    });

    quantityFieldWrapper.append(minSpan, quantitySlider, maxSpan);
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

    // const minSpan: HTMLSpanElement = document.createElement('span');
    const minSpan: HTMLInputElement = document.createElement('input');
    minSpan.classList.add('range-field', 'year-min');
    minSpan.type = 'text';
    minSpan.value = '';

    const yearSlider = document.createElement('div');
    yearSlider.id = 'year-slider';

    // const maxSpan: HTMLSpanElement = document.createElement('span');
    const maxSpan: HTMLInputElement = document.createElement('input');
    maxSpan.classList.add('range-field', 'year-max');
    minSpan.type = 'text';
    minSpan.value = '';

    const slider: noUiSlider.target | null = yearSlider; // Ищем слайдер

    if (!slider || !minSpan || !maxSpan) return console.log(slider)// если этих элементов нет, прекращаем выполнение функции, чтобы не было ошибок
  
    const arrYear: number[] = [];
    dataBase.forEach(item => arrYear.push(+item.year));
    arrYear.sort((a, b) => a - b);

    const inputs = [minSpan, maxSpan];
    if (slider) {
      noUiSlider.create(slider, {
        start: [ arrYear[0], arrYear[arrYear.length - 1]], // устанавливаем начальные значения
        connect: true, // указываем что нужно показывать выбранный диапазон
        range: { // устанавливаем минимальное и максимальное значения
          'min': arrYear[0],
          'max': arrYear[arrYear.length - 1]
        },
        step: 1, // шаг изменения значений
      });
    }
  
    slider.noUiSlider?.on('update', function (values: (number | string)[], handle: number): void {
      inputs[handle].value = String(values[handle]);
    });

    minSpan.addEventListener('change', function(){
      slider.noUiSlider?.set([minSpan.value, 'null']);
    });

    maxSpan.addEventListener('change', function(){
      slider.noUiSlider?.set(['null', maxSpan.value]);
    });

    yearFieldWrapper.append(minSpan, yearSlider, maxSpan);
    yearWrapper.append(yearTitle, yearFieldWrapper);
    rangeDiv.append(yearWrapper);
  }

  rangeQuantity()
  rangeYear()

  return rangeDiv;
}
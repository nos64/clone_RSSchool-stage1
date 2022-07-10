import './settings.scss';
import * as noUiSlider from 'nouislider'
import 'nouislider/dist/nouislider.css';
import './sliders.scss';

export const range = () => {
  const rangeDiv = document.createElement('div');
  rangeDiv.className = 'range-filters';

  const rangeQuantity =() => {
    const quantityWrapper: HTMLDivElement = document.createElement('div');
    quantityWrapper.className = 'range-filters__quantity';

    const quantityTitle = document.createElement('h2');
    quantityTitle.className = 'filter-title';
    quantityTitle.textContent = 'Количество на складе';

    const quantityFieldWrapper: HTMLDivElement = document.createElement('div');
    quantityFieldWrapper.className = 'range-wrapper';

    const minSpan: HTMLSpanElement = document.createElement('span');
    minSpan.classList.add('range-field', 'quantity-min');

    const quantitySlider = document.createElement('div');
    quantitySlider.id = 'quantity-slider';

    const maxSpan: HTMLSpanElement = document.createElement('span');
    maxSpan.classList.add('range-field', 'quantity-max');

    const slider: noUiSlider.target | null = quantitySlider; // Ищем слайдер

    if (!slider || !minSpan || !maxSpan) return console.log(slider)// если этих элементов нет, прекращаем выполнение функции, чтобы не было ошибок
  
    const inputs = [minSpan, maxSpan];
    if (slider) {
      noUiSlider.create(slider, {
        start: [1, 10],
        connect: true, // указываем что нужно показывать выбранный диапазон
        range: { 
          'min': 1,
          'max': 12
        },
        step: 1,
      });
    }
  
    slider.noUiSlider?.on('update', function (values: (number | string)[], handle: number): void {
      inputs[handle].innerHTML = String(values[handle]);
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

    const minSpan: HTMLSpanElement = document.createElement('span');
    minSpan.classList.add('range-field', 'year-min');

    const yearSlider = document.createElement('div');
    yearSlider.id = 'year-slider';

    const maxSpan: HTMLSpanElement = document.createElement('span');
    maxSpan.classList.add('range-field', 'year-max');

    const slider: noUiSlider.target | null = yearSlider; // Ищем слайдер

    if (!slider || !minSpan || !maxSpan) return console.log(slider)// если этих элементов нет, прекращаем выполнение функции, чтобы не было ошибок
  
    const inputs = [minSpan, maxSpan];
    if (slider) {
      noUiSlider.create(slider, {
        start: [ 1900, 1990], // устанавливаем начальные значения
        connect: true, // указываем что нужно показывать выбранный диапазон
        range: { // устанавливаем минимальное и максимальное значения
          'min': 1850,
          'max': 2000
        },
        step: 1, // шаг изменения значений
      });
    }
  
    slider.noUiSlider?.on('update', function (values: (number | string)[], handle: number): void {
      inputs[handle].innerHTML = String(values[handle]);
    });

    yearFieldWrapper.append(minSpan, yearSlider, maxSpan);
    yearWrapper.append(yearTitle, yearFieldWrapper);
    rangeDiv.append(yearWrapper);
  }

  rangeQuantity()
  rangeYear()

  return rangeDiv;
}
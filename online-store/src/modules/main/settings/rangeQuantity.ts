// import * as noUiSlider from 'nouislider'
// import 'nouislider/dist/nouislider.css';
// import './sliders.scss';

// export const rangeQuantity =() => {
//   const quantityWrapper: HTMLDivElement = document.createElement('div');
//   quantityWrapper.className = 'range-filters__quantity';

//   const quantityTitle = document.createElement('h2');
//   quantityTitle.className = 'filter-title';
//   quantityTitle.textContent = 'Количество на складе';

//   const quantityFieldWrapper: HTMLDivElement = document.createElement('div');
//   quantityFieldWrapper.className = 'range-wrapper';

//   const minSpan: HTMLSpanElement = document.createElement('span');
//   minSpan.classList.add('range-field', 'quantity-min');

//   const quantitySlider = document.createElement('div');
//   quantitySlider.id = 'quantity-slider';

//   const maxSpan: HTMLSpanElement = document.createElement('span');
//   maxSpan.classList.add('range-field', 'quantity-max');

//   const slider: noUiSlider.target | null = quantitySlider; // Ищем слайдер

//   if (!slider || !minSpan || !maxSpan) return console.log(slider)// если этих элементов нет, прекращаем выполнение функции, чтобы не было ошибок

//   const inputs = [minSpan, maxSpan];
//   if (slider) {
//     noUiSlider.create(slider, {
//       start: [1, 10],
//       connect: true, // указываем что нужно показывать выбранный диапазон
//       range: { 
//         'min': 1,
//         'max': 12
//       },
//       step: 1,
//     });
//   }

//   slider.noUiSlider?.on('update', function (values: (number | string)[], handle: number): void {
//     inputs[handle].innerHTML = String(values[handle]);
//   });

//   quantityFieldWrapper.append(minSpan, quantitySlider, maxSpan);
//   quantityWrapper.append(quantityTitle, quantityFieldWrapper);

//   return quantityWrapper;

// }
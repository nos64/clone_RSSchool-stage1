import * as noUiSlider from 'nouislider';
// import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import './year-slider.scss';




const rangeSliderInit = () => { // создаем функцию инициализации слайдера
  
  const slider: noUiSlider.target | null = document.getElementById('year-slider'); // Ищем слайдер
  // const slider: HTMLElement | null = document.getElementById('year-slider'); // Ищем слайдер
  const inputMin = document.querySelector<HTMLElement>('.year-min'); // Ищем input с меньшим значнием
  // const inputMin = document.querySelector<HTMLInputElement>('.year-min'); // Ищем input с меньшим значнием
  const inputMax = document.querySelector<HTMLElement>('.year-max'); // Ищем input с большим значнием
  // const inputMax = document.querySelector<HTMLInputElement>('.year-max'); // Ищем input с меньшим значнием



  if (!slider || !inputMin || !inputMax) return console.log(slider)// если этих элементов нет, прекращаем выполнение функции, чтобы не было ошибок

  const inputs = [inputMin, inputMax]; // создаем массив из меньшего и большего значения
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

  // slider.noUiSlider?.on('update', function (values: (number | string)[], handle: number) { // при изменений положения элементов управления слайдера изменяем соответствующие значения
  //   inputs[handle].value = String(values[handle]);
  // });

  // inputMin.addEventListener('change', function () { // при изменении меньшего значения в input - меняем положение соответствующего элемента управления
  //   slider.noUiSlider?.set([this.value]);
  // });

  // inputMax.addEventListener('change', function () { // при изменении большего значения в input - меняем положение соответствующего элемента управления
  //   slider.noUiSlider?.set([0, this.value]);
  // });


}
rangeSliderInit()
window.addEventListener('DOMContentLoaded', rangeSliderInit);



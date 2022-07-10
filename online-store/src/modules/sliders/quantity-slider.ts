import * as noUiSlider from 'nouislider'
import 'nouislider/dist/nouislider.css';
import './sliders.scss';




const rangeSliderInit = () => { // создаем функцию инициализации слайдера
	const slider: noUiSlider.target | null = document.getElementById('quantity-slider'); // Ищем слайдер
	const inputMin = document.querySelector<HTMLElement>('.quantity-min'); // Ищем input с меньшим значнием
	const inputMax = document.querySelector<HTMLElement>('.quantity-max'); // Ищем input с большим значнием

	if (!slider || !inputMin || !inputMax) return console.log(slider)// если этих элементов нет, прекращаем выполнение функции, чтобы не было ошибок

	const inputs = [inputMin, inputMax]; // создаем массив из меньшего и большего значения
	if (slider) {
		noUiSlider.create(slider, {
			start: [1, 10], // устанавливаем начальные значения
			connect: true, // указываем что нужно показывать выбранный диапазон
			range: { // устанавливаем минимальное и максимальное значения
				'min': 1,
				'max': 12
			},
			step: 1, // шаг изменения значений
		});
	}

	slider.noUiSlider?.on('update', function (values: (number | string)[], handle: number): void {
		inputs[handle].innerHTML = String(values[handle]);
	});

}
rangeSliderInit()
window.addEventListener('DOMContentLoaded', rangeSliderInit);



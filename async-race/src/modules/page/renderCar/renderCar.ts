import { createHTMLElement } from '../../utils/createHTMLElement';
import './renderCar.scss';
import { GetCarInterface } from '../../utils/types';
import '../../../img/flag.png';
import { getCarImage } from './getCarImage';

export const renderCar = (data: GetCarInterface) => {
  const carWrapper = createHTMLElement('div', 'car-wrapper');

  const btnWrapper = createHTMLElement('div', 'car-buttuns-wrapper');

  const selectBtn = createHTMLElement('button', 'button', 'select-button');
  selectBtn.textContent = 'Select';
  selectBtn.id = `select-car-${data.id}`;

  const removeBtn = createHTMLElement('button', 'button', 'remove-button');
  removeBtn.textContent = 'Remove';
  removeBtn.id = `remove-car-${data.id}`;

  const nameSpan = createHTMLElement('span', 'car-name');
  nameSpan.textContent = data.name;

  const road = createHTMLElement('div', 'road');
  const launchPad = createHTMLElement('div', 'launch-pad');
  const controlPanel = createHTMLElement('div', 'control-panel');
  const startEngineBtn = createHTMLElement('button', 'icon', 'start-engine-button');
  startEngineBtn.id = `start-engine-car-${data.id}`;
  // if (startEngineBtn instanceof HTMLButtonElement) {
  // eslint-disable-next-line no-unused-expressions
  // isEngineStarted ? startEngineBtn.disabled = 'disabled' : startEngineBtn.disabled = '';
  // }
  startEngineBtn.textContent = 'A';
  const stopEngineBtn = createHTMLElement('button', 'icon', 'stop-engine-button');
  stopEngineBtn.id = `stop-engine-car-${data.id}`;
  // if (stopEngineBtn instanceof HTMLButtonElement) {
  // eslint-disable-next-line no-unused-expressions
  // isEngineStarted ? stopEngineBtn.disabled = 'disabled' : stopEngineBtn.disabled = '';
  // }
  stopEngineBtn.textContent = 'B';
  const car = createHTMLElement('div', 'car');
  car.id = `car-${data.id}`;
  // const carImage = getCarImage(data.color);
  car.innerHTML = `${getCarImage(data.color)}`;

  // const flag = createHTMLElement('div', 'flag');
  const flag = createHTMLElement('img', 'flag');
  if (flag instanceof HTMLImageElement) {
    flag.src = '../../img/flag.png';
  }
  flag.id = `flag-${data.id}`;

  btnWrapper.append(selectBtn, removeBtn, nameSpan);
  controlPanel.append(startEngineBtn, stopEngineBtn);
  // car.append(carImage);
  launchPad.append(controlPanel, car);
  road.append(launchPad, flag);
  carWrapper.append(btnWrapper, road);

  return carWrapper;
};

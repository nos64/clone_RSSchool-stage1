import { createHTMLElement } from '../utils/createHTMLElement';
import './renderCar.scss';
import { GetCar } from '../utils/types';
import '../../img/flag.png';
// // import {getCar, getCars, createCar,
// deleteCar, updateCar, startEngine, stopEngine,
// saveWinner, getWinners, deleteWinner, drive } from '../api/api';
// // import { animation,
// getDistanceBetweenElements, race,
// generateRandomCars } from '../utils/utils';
// // import store from './store';

const getCarImage = (color: string) => `<?xml version="1.0" encoding="iso-8859-1"?>
  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 20.07 14.07" style="enable-background:new 0 0 20.07 20.07;" xml:space="preserve">
  <g>
    <g>
      <path style="fill:${color};" d="M20.07,10.102c0,0-0.719-1.593-5.363-1.53c0,0-4.626-4.644-13.986,0.582
        c0,0,0.205,1.018-0.566,1.018c-0.159,0.765-0.322,1.769,0.203,2.294c1.146,0,1.257,0,1.266,0c-0.028-0.123-0.044-0.25-0.044-0.381
        c0-0.951,0.771-1.722,1.722-1.722s1.722,0.771,1.722,1.722c0,0.131-0.016,0.258-0.044,0.381h0.268h8.357h1.119
        c-0.027-0.123-0.043-0.25-0.043-0.381c0-0.951,0.771-1.722,1.721-1.722c1.297,0,2.037,1.318,1.906,2.092l1.762-0.182
        C19.801,10.687,20.07,10.102,20.07,10.102z M6.936,8.835H2.829c0,0,1.703-0.798,4.107-1.261V8.835z M7.827,8.835V7.427
        c3.442-0.498,6.143,1.408,6.143,1.408H7.827z"/>
      <path style="fill:${color};" d="M16.402,10.742c-0.734,0-1.33,0.595-1.33,1.33c0,0.733,0.596,1.329,1.33,1.329
        s1.514-0.596,1.514-1.329C17.916,11.336,17.137,10.742,16.402,10.742z M16.402,12.582c-0.283,0-0.512-0.229-0.512-0.511
        s0.229-0.512,0.512-0.512c0.281,0,0.512,0.229,0.512,0.512C16.914,12.353,16.683,12.582,16.402,12.582z"/>
      <path style="fill:${color};" d="M3.268,10.742c-0.734,0-1.329,0.595-1.329,1.33c0,0.733,0.595,1.329,1.329,1.329
        c0.735,0,1.33-0.596,1.33-1.329C4.597,11.336,4.003,10.742,3.268,10.742z M3.268,12.582c-0.282,0-0.512-0.229-0.512-0.511
        s0.23-0.512,0.512-0.512s0.512,0.229,0.512,0.512C3.78,12.353,3.55,12.582,3.268,12.582z"/>
    </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
  `;

export const renderCar = (data: GetCar) => {
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

import { createHTMLElement } from '../utils/createHTMLElement';
import './renderGarage.scss';
import { renderCar } from '../renderCar/renderCar';
import store from '../utils/store';

export const renderGarage = () => {
  const garageWrapper = createHTMLElement('div', 'garage-wrapper');

  const garageTitle = createHTMLElement('h1', 'garage-title');
  garageTitle.textContent = `Garage #${store.carsCount}`;

  const garageTitlePage = createHTMLElement('h2', 'garage-title-page');
  garageTitlePage.textContent = `Page #${store.carsPage}`;
  const garageList = createHTMLElement('ul', 'garage-list');

  if (store) {
    store.cars.forEach((car) => {
      const li = createHTMLElement('li', 'garage-li');

      const carLi = renderCar(car);
      li.append(carLi);
      garageList.append(li);
    });
  }

  garageWrapper.append(garageTitle, garageTitlePage, garageList);
  return garageWrapper;
};

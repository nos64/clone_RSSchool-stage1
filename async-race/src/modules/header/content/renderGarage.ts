import { createHTMLElement } from '../../types/createHTMLElement';
import './renderGarage.scss';
import { renderCar } from './renderCar';
import store from './store';

const renderGarage = () => {
  const garageWrapper = createHTMLElement('div', 'garage-wrapper');
  
  const garageTitle = createHTMLElement('h1', 'garage-title');
  garageTitle.textContent = `Garage #${store.carsCount}`;

  const garageTitlePage = createHTMLElement('h2', 'garage-title-page');
  garageTitlePage.textContent = `Page #${store.carsPage}`;
  const garageList = createHTMLElement('ul', 'garage-list');
  store.cars.map(car => {
    const li = createHTMLElement('li', 'garage-li');
    if (li instanceof HTMLLIElement) {
      li.textContent = `${renderCar(car)}`;
    }
  }).join('');

  garageWrapper.append(garageTitle, garageTitlePage, garageList);
  return garageWrapper;
};

const renderWinners = () => {
  const winnersWrapper = createHTMLElement('div', 'winners-wrapper');
  const winnersTitle = createHTMLElement('h1', 'winners-title');
  winnersTitle.textContent = `Winners ${store.winnersCount}`;

  const winnersTitlePage = createHTMLElement('h2', 'winners-title-page');
  winnersTitlePage.textContent = `Garage #${store.winnersPage}`;

  const winnersTable = createHTMLElement('table', 'winners-table');
  if (winnersTable instanceof HTMLTableElement) {
    winnersTable.border = '0';
    winnersTable.cellSpacing = '0';
    winnersTable.cellSpacing = '0';
  }
  const thead = createHTMLElement('thead');
  const thNumber = createHTMLElement('th');
  thNumber.textContent = 'Number';
  const thCar = createHTMLElement('th');
  thCar.textContent = 'Car';
  const thName = createHTMLElement('th');
  thCar.textContent = 'Name';
  const tableBtnWins = createHTMLElement('th', 'table-button', 'table-wins'); 
  store.sortBy === 'wins' ? tableBtnWins.classList.add(`${store.sortOrder}`) : '';
  tableBtnWins.id = 'sort-by-wins';
  tableBtnWins.textContent = 'Wins';
  const tableBtnTime = createHTMLElement('th', 'table-button', 'table-wins'); 
  store.sortBy === 'time' ? tableBtnTime.classList.add(`${store.sortOrder}`) : '';
  tableBtnTime.id = 'sort-by-time';
  tableBtnTime.textContent = 'Best time (seconds)';
  const tbody = createHTMLElement('tbody');
  store.winners.map(winner, index => {
    const tr = createHTMLElement('tr');
    const tdNum = createHTMLElement('td');
    tdNum.textContent = `${index + 1}`;
    const tdCarColor = createHTMLElement('td');
    tdCarColor.textContent = `${renderCarImage(winner.car.color)}`;
    const tdName = createHTMLElement('td');
    tdName.textContent = `${winner.car.name}`;
    const tdWins = createHTMLElement('td');
    tdWins.textContent = `${winner.wins}`;
    const tdTime = createHTMLElement('td');
    tdTime.textContent = `${winner.time}`;

    tr.append(tdNum, tdCarColor, tdName, tdWins, tdTime);
    tbody.append(tr);
  }).join('');

  thead.append(thNumber, thCar, thName, tableBtnWins, tableBtnTime);
  winnersTable.append(thead, tbody);
  winnersWrapper.append(winnersTitle, winnersTitlePage, winnersTable);
  return winnersWrapper;
}

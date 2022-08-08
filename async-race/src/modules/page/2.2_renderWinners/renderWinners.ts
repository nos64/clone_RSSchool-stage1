import './renderWinners.scss';
import store from '../../utils/state';
import { sorter } from '../../utils/types';
import { createHTMLElement } from '../../utils/createHTMLElement';
import { getCarImage } from '../renderCar/getCarImage';

export const renderWinners = () => {
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
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  store.sortBy === sorter.byWins ? tableBtnWins.classList.add(`${store.sortOrder}`) : '';
  tableBtnWins.id = 'sort-by-wins';
  tableBtnWins.textContent = 'Wins';
  const tableBtnTime = createHTMLElement('th', 'table-button', 'table-wins');
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  store.sortBy === sorter.byTime ? tableBtnTime.classList.add(`${store.sortOrder}`) : '';
  tableBtnTime.id = 'sort-by-time';
  tableBtnTime.textContent = 'Best time (seconds)';

  const tbody = createHTMLElement('tbody');
  store.winners.forEach((winner, index) => {
    const tr = createHTMLElement('tr');
    const tdNum = createHTMLElement('td');
    tdNum.textContent = `${index + 1}`;
    const tdCarColor = createHTMLElement('td');
    tdCarColor.innerHTML = `${getCarImage(winner.car.color)}`;
    const tdName = createHTMLElement('td');
    tdName.textContent = `${winner.car.name}`;
    const tdWins = createHTMLElement('td');
    tdWins.textContent = `${winner.wins}`;
    const tdTime = createHTMLElement('td');
    tdTime.textContent = `${winner.time / 1000}`;
    tr.append(tdNum, tdCarColor, tdName, tdWins, tdTime);
    tbody.append(tr);
  });

  thead.append(thNumber, thCar, thName, tableBtnWins, tableBtnTime);
  winnersTable.append(thead, tbody);
  winnersWrapper.append(winnersTitle, winnersTitlePage, winnersTable);

  return winnersWrapper;
};

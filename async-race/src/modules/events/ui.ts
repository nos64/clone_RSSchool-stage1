import { stopDriving } from './stopDriving';
import { setSortOrder } from './sortingWinners';
import { createCarBtn } from './createCarBtn';
import { updateCar, updateCarBtn } from './updateCarBtn';
import { generateRandomCarsBtn } from './generateRandomCarsBtn';
import { paginationBtns } from './paginationBtns';
import { garageWinnersBtns } from './garageWinnersBtns';
import { removeBtn } from './removeBtn';
import { startDriving } from './startDriving';
// import { race } from '../utils/utils';
import store from '../utils/state';
import { RaceAll } from '../utils/types';
import { saveWinner } from '../0_api/api';
// import { saveWinner } from '../0_api/api';
// import { race } from '../utils/utils';
// import { saveWinner } from '../0_api/api';

export const listen = () => {
  // const garage = document.getElementById('garage');
  // const garageView: HTMLElement | null = document.getElementById('garage-view');
  // const winnersView: HTMLElement | null = document.getElementById('winners-view');

  document.body.addEventListener('click', async (e) => {
    if (e.target && e.target instanceof HTMLElement) {
      if (e.target.classList.contains('start-engine-button')) {
        const id: number = +e.target.id.split('start-engine-car-')[1];
        startDriving(id);
      }
      if (e.target.classList.contains('stop-engine-button')) {
        const id = +e.target.id.split('stop-engine-car-')[1];
        stopDriving(id);
      }
      if (e.target.classList.contains('race-button')) {
        if (e.target instanceof HTMLButtonElement) {
          e.target.disabled = true;
          const arr: RaceAll[] = [];
          store.cars.forEach(async (car) => {
            const winner = await startDriving(car.id);
            arr.push(winner);
            arr.sort((a, b) => a.time - b.time);
            await saveWinner(arr[0].id, arr[0].time);
          });

          const message = document.getElementById('message');
          if (message) {
            // message.innerHTML = `${winner.name} went first ${winner.time}s!`;
            // message.classList.toggle('visible', true);
          }
          const resetBtn = document.getElementById('reset');
          if (resetBtn && resetBtn instanceof HTMLButtonElement) {
            resetBtn.disabled = false;
          }
        }
      }
      if (e.target.classList.contains('reset-button')) {
        if (e.target instanceof HTMLButtonElement) {
          e.target.disabled = true;
          store.cars.map(({ id }) => stopDriving(id));
        }
        const message = document.getElementById('message');
        if (message) {
          message.classList.toggle('visible', false);
          message.classList.toggle('visible', true);
        }
        const raceBtn = document.getElementById('race');
        if (raceBtn && raceBtn instanceof HTMLButtonElement) {
          raceBtn.disabled = false;
        }
      }
      if (e.target.classList.contains('table-wins')) {
        setSortOrder('wins');
      }
      if (e.target.classList.contains('table-time')) {
        setSortOrder('time');
      }
    }
  });
  createCarBtn();
  updateCarBtn();
  updateCar();
  generateRandomCarsBtn();
  paginationBtns();
  garageWinnersBtns();
  removeBtn();
};

import { saveWinner } from '../utils/api';
import store from '../utils/state';
import { RaceAll } from '../utils/types';
import { startDriving } from './startDriving';

export const raceAll = () => {
  document.body.addEventListener('click', async (e) => {
    if (e.target && e.target instanceof HTMLElement) {
      if (e.target.classList.contains('race-button')) {
        if (e.target instanceof HTMLButtonElement) {
          e.target.disabled = true;
          const arr: RaceAll[] = [];
          store.cars.forEach(async (car) => {
            const winner = await startDriving(car.id);
            if (winner.success) arr.push(winner);
            arr.sort((a, b) => +a.time - +b.time);
            await saveWinner(arr[0].id, arr[0].time);
            const message = document.querySelector('.message-wrapper');
            if (message) {
              message.classList.toggle('message-visible');
              message.innerHTML = `${arr[0].id} went first ${arr[0].time / 1000} s!`;
            }
          });
          const resetBtn = document.getElementById('reset');
          if (resetBtn && resetBtn instanceof HTMLButtonElement) {
            resetBtn.disabled = false;
          }
        }
      }
    }
  });
};

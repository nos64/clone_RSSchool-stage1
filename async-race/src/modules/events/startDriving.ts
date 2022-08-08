import { driveCar, startEngine } from '../0_api/api';
import store from '../utils/state';
import { RaceAll } from '../utils/types';
import { animationCar, getDistanceBetweenElements } from '../utils/utils';

export const startDriving = async (id: number) => {
  const startButton: HTMLElement | null = document.getElementById(`start-engine-car-${id}`);
  if (startButton && startButton instanceof HTMLButtonElement) {
    startButton.disabled = true;
    startButton?.classList.toggle('enabling', true);
  }

  const { velocity, distance } = await startEngine(id);
  const time = Math.round(distance / velocity);

  startButton?.classList.toggle('enabling', true);
  const stopEngBtn = document.getElementById(`stop-engine-car-${id}`);
  if (stopEngBtn && stopEngBtn instanceof HTMLButtonElement) {
    stopEngBtn.disabled = false;
  }

  const car: HTMLElement | null = document.getElementById(`car-${id}`);
  const flag: HTMLElement | null = document.getElementById(`flag-${id}`);
  if (car !== null && flag !== null) {
    const distanceBetweenElements = Math.floor(getDistanceBetweenElements(car, flag)) + 50;
    animationCar(car, distanceBetweenElements, time);
  }
  const { success } = await driveCar(id);
  if (!success) {
    window.cancelAnimationFrame(store.animation.id);
  }
  const drivingObj: RaceAll = { success, id, time };

  return drivingObj;
};

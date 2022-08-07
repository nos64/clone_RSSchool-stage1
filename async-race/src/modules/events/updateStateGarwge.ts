import { getCars } from '../0_api/api';
import store from '../utils/state';

export const updateStateGarage = async () => {
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const { items, count } = await getCars(store.carsPage);
  store.cars = items;
  store.carsCount = count;

  if (store.carsCount && prevBtn instanceof HTMLButtonElement
      && nextBtn instanceof HTMLButtonElement) {
    if (store.carsPage * 7 < +store.carsCount) {
      nextBtn.disabled = false;
    } else {
      nextBtn.disabled = true;
    }
    if (store.carsPage > 1) {
      prevBtn.disabled = false;
    } else {
      prevBtn.disabled = true;
    }
  }
};

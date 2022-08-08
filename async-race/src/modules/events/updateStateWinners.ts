import { getWinners } from '../utils/api';
import store from '../utils/state';

export const updateStateWinners = async () => {
  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');
  const { items, count } = await getWinners(store.winnersPage, store.sortBy, store.sortOrder);

  store.winners = items;
  store.winnersCount = count;
  if (store.winnersCount && nextBtn instanceof HTMLButtonElement
    && prevBtn instanceof HTMLButtonElement) {
    if (store.winnersPage * 10 < +store.winnersCount) {
      nextBtn.disabled = false;
    } else {
      nextBtn.disabled = true;
    }
    if (store.winnersPage > 1) {
      prevBtn.disabled = false;
    } else {
      prevBtn.disabled = true;
    }
  }
};

import { renderWinners } from '../page/2.2_renderWinners/renderWinners';
import { updateStateGarage } from './updateStateGarwge';
import { updateStateWinners } from './updateStateWinners';

export const garageWinnersBtns = () => {
  const garageView: HTMLElement | null = document.getElementById('garage-view');
  const winnersView: HTMLElement | null = document.getElementById('winners-view');
  document.body.addEventListener('click', async (e) => {
    if (e.target && e.target instanceof HTMLElement) {
      if (e.target.classList.contains('garage-menu-button')) {
        if (garageView) garageView.style.display = 'block';
        if (winnersView) winnersView.style.display = 'none';
        await updateStateGarage();
      }
      if (e.target.classList.contains('winners-menu-button')) {
        if (winnersView) {
          winnersView.style.display = 'block';
        }
        if (garageView) {
          garageView.style.display = 'none';
        }
        await updateStateWinners();
        if (winnersView) {
          winnersView.textContent = '';
          winnersView.append(renderWinners());
        }
      }
    }
  });
};

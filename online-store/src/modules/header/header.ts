import './header.scss';
import '../../img/basket.svg';

export const header = (): void => {
  const header: HTMLElement = document.createElement('header');
  header.className = 'header';
  document.body.append(header);

  const container: HTMLDivElement = document.createElement('div');
  container.classList.add('container', 'header__container');
  header.append(container);

  const h1: HTMLHeadElement = document.createElement('h1');
  h1.className = 'header__title';
  h1.textContent = 'Retro cars online store';

  const basket: HTMLImageElement = document.createElement('img');
  basket.className = 'header__basket';
  basket.src = 'img/basket.svg';
  basket.alt = 'Basket icon';

  container.append(h1, basket)
}

header()
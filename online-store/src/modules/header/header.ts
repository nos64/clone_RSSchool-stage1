import './header.scss';
import '../../img/basket.svg';

const header: HTMLElement = document.createElement('header');
header.className = 'header';
document.body.append(header);

const container: HTMLDivElement = document.createElement('div');
container.classList.add('container', 'header__container');
header.append(container);

const h1: HTMLHeadElement = document.createElement('h1');
h1.className = 'header__title';
h1.textContent = 'Retro cars online store';

const basketWrapper: HTMLDivElement = document.createElement('div');
basketWrapper.className = 'header__basket-wrapper';

const basket: HTMLImageElement = document.createElement('img');
basket.className = 'header__basket';
basket.src = 'img/basket.svg';
basket.alt = 'Basket icon';

const basketCount: HTMLSpanElement = document.createElement('span');
basketCount.className = 'header_basket-count';
basketCount.textContent = '0';

basketWrapper.append(basket, basketCount);
container.append(h1, basketWrapper);

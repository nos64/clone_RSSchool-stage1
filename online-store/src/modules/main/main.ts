import { dataBase } from '../../db/db';
import { Card } from '../types/types';
import { createSettingsWrapper } from '../main/settings/settings';
import { createCards } from './content/content';

export const data: Card[] = Object.assign(dataBase);

const main: HTMLElement = document.createElement('main');
const container = document.createElement('div');
container.classList.add('container', 'main-container');
const settings = createSettingsWrapper();
const cards = createCards(data);

const contentWrapper: HTMLDivElement = document.createElement('div');
contentWrapper.className = 'content-wrapper';



container.append(settings, cards);
main.append(container);
document.body.append(main);
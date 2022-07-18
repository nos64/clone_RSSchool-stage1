import './content.scss';
// import { data } from '../main';
import { Card } from '../../types/types';




export const createCards = (dataArr: Card[]) => {
  const contentWrapper: HTMLDivElement = document.createElement('div');
  contentWrapper.className = 'content-wrapper';
  contentWrapper.textContent = '';

  dataArr.forEach(item => {
    
    const card: HTMLDivElement = document.createElement('div');
    card.className = 'card';
    item.inBasket ? card.classList.add('card-active') : card.classList.remove('card-active');
  
    const cardTitle: HTMLHeadingElement = document.createElement('h3');
    cardTitle.className = 'card__title';
    cardTitle.textContent = item.brand;
  
    const cardSubtitle: HTMLParagraphElement = document.createElement('p');
    cardSubtitle.className = 'card__subtitle';
    cardSubtitle.textContent = item.model;
  
    const cardImageWrapper: HTMLDivElement = document.createElement('div');
    cardImageWrapper.className = 'card__image-wrapper';
  
    const cardImage: HTMLImageElement = document.createElement('img');
    cardImage.className = 'card__image';
    cardImage.src = item.image;
    cardImage.alt = `${item.brand} ${item.model}`;
    cardImageWrapper.append(cardImage);
  
    const descriptionWrapper = document.createElement('div');
  
    const cardYear: HTMLParagraphElement = document.createElement('p');
    cardYear.className = 'card__description';
    cardYear.textContent = 'Год выпуска: ';
  
    const dataYear: HTMLSpanElement = document.createElement('span');
    dataYear.className = 'card__year';
    dataYear.textContent = item.year;
    cardYear.append(dataYear);
  
    const cardColor: HTMLParagraphElement = document.createElement('p');
    cardColor.className = 'card__description';
    cardColor.textContent = 'Цвет: ';
  
    const dataColor: HTMLSpanElement = document.createElement('span');
    dataColor.className = 'card__color';
    dataColor.textContent = item.color;
    cardColor.append(dataColor);
  
    const cardDoor: HTMLParagraphElement = document.createElement('p');
    cardDoor.className = 'card__description';
    cardDoor.textContent = 'Количество дверей: ';
  
    const dataDoor: HTMLSpanElement = document.createElement('span');
    dataDoor.className = 'card__door';
    dataDoor.textContent = item.doors;
    cardDoor.append(dataDoor);
  
    const cardVolume: HTMLParagraphElement = document.createElement('p');
    cardVolume.className = 'card__description';
    cardVolume.textContent = 'Мощность двигателя: ';
  
    const dataVolume: HTMLSpanElement = document.createElement('span');
    dataVolume.className = 'card__volume';
    dataVolume.textContent = item.volume;
    cardVolume.append(dataVolume);
  
    const cardOwners: HTMLParagraphElement = document.createElement('p');
    cardOwners.className = 'card__description';
    cardOwners.textContent = 'Количество собственников: ';
  
    const dataOwners: HTMLSpanElement = document.createElement('span');
    dataOwners.className = 'card__volume';
    dataOwners.textContent = item.owners;
    cardOwners.append(dataOwners);
  
    const cardPopular: HTMLParagraphElement = document.createElement('p');
    cardPopular.className = 'card__description';
    cardPopular.textContent = 'Популярный: ';
  
    const dataPopular: HTMLSpanElement = document.createElement('span');
    dataPopular.className = 'card__popular';
    dataPopular.textContent = item.favorite ? 'Да' : 'Нет';
    cardPopular.append(dataPopular);
  
  
    descriptionWrapper.append(cardYear, cardColor, cardDoor, cardVolume, cardOwners, cardPopular);
    card.append(cardTitle, cardSubtitle, cardImageWrapper, descriptionWrapper)
  
    contentWrapper.append(card);

  });
  return contentWrapper;
}
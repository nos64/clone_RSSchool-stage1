import './settings.scss';
import {dataBase} from '../../../db/db';
// import { HTMLInput } from '../../types/types';

export const checkboxFilters = () => {
  const filterWrapper: HTMLDivElement = document.createElement('div');
  filterWrapper.className = 'filters-value';

  const filterByBrand = () => {
    const byBrandWrapper: HTMLDivElement = document.createElement('div');
    byBrandWrapper.className = 'filters-value__brand';

    const byBrandTitle = document.createElement('h2');
    byBrandTitle.className = 'filter-title';
    byBrandTitle.textContent = 'Марка';

    const checkboxWrapper: HTMLDivElement = document.createElement('div');
    checkboxWrapper.className = 'checkbox-wrapper';

    const markSet: Set<string> = new Set(); 
    dataBase.forEach(item => markSet.add(item.brand));

    const markArray = Array.from(markSet)
    markArray.forEach(item => {
      const label: HTMLLabelElement = document.createElement('label');
      label.classList.add('checkbox-lbl', 'brand-checkbox');
      label.textContent = item;

      const input: HTMLInputElement = document.createElement('input');
      input.className = 'check';
      input.type = 'checkbox';
      input.value = item; 

      label.append(input);
      checkboxWrapper.appendChild(label);
    })

    byBrandWrapper.append(byBrandTitle, checkboxWrapper);
    filterWrapper.append(byBrandWrapper);
  }

  const filterByColor = () => {
    const byColorWrapper: HTMLDivElement = document.createElement('div');
    byColorWrapper.className = 'filters-value__color';

    const byBrandTitle = document.createElement('h2');
    byBrandTitle.className = 'filter-title';
    byBrandTitle.textContent = 'Цвет';

    const checkboxWrapper: HTMLDivElement = document.createElement('div');
    checkboxWrapper.className = 'checkbox-wrapper';

    const colorSet: Set<string> = new Set(); 
    // dataBase.forEach(item => colorSet.add(item.color));
    dataBase.forEach(item => colorSet.add(item.colorID));
    const colorArray = Array.from(colorSet);

    colorArray.forEach(item => {
      // const label: HTMLLabelElement = document.createElement('label');
      // label.classList.add('checkbox-lbl', 'brand-checkbox');
      // label.textContent = item;

      // const input: HTMLInputElement = document.createElement('input');
      // input.className = 'check';
      // input.type = 'checkbox';
      // input.value = item; 

      // label.append(input);
      // checkboxWrapper.append(label);

      const colorBtn: HTMLButtonElement = document.createElement('button');
      colorBtn.className = 'button-color';
      colorBtn.classList.add(`button-${item}`);
      colorBtn.title = item;
      colorBtn.textContent = '✔';
      colorBtn.dataset.color = item;

      checkboxWrapper.append(colorBtn);
    })

    byColorWrapper.append(byBrandTitle, checkboxWrapper);
    filterWrapper.append(byColorWrapper);
  }
  
  filterByBrand();
  filterByColor();

  return filterWrapper;
}


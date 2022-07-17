import './settings.scss';
import {dataBase} from '../../../db/db';

export const createCheckboxFilters = () => {
  const filterWrapper: HTMLDivElement = document.createElement('div');
  filterWrapper.className = 'filters-value';

  const createFilterByBrand = () => {
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
      label.classList.add('checkbox-lbl');
      label.textContent = item;

      const input: HTMLInputElement = document.createElement('input');
      input.classList.add('check', 'brand-checkbox');
      input.type = 'checkbox';
      input.value = item; 

      label.append(input);
      checkboxWrapper.appendChild(label);
    })

    byBrandWrapper.append(byBrandTitle, checkboxWrapper);
    filterWrapper.append(byBrandWrapper);
  }

  const createFilterByColor = () => {
    const byColorWrapper: HTMLDivElement = document.createElement('div');
    byColorWrapper.className = 'filters-value__color';

    const byBrandTitle = document.createElement('h2');
    byBrandTitle.className = 'filter-title';
    byBrandTitle.textContent = 'Цвет';

    const checkboxWrapper: HTMLDivElement = document.createElement('div');
    checkboxWrapper.className = 'checkbox-wrapper';

    const colorSet: Set<string> = new Set(); 
    dataBase.forEach(item => colorSet.add(item.color));
    
    const colorArray = Array.from(colorSet);

    colorArray.forEach(item => {
      const label: HTMLLabelElement = document.createElement('label');
      label.classList.add('checkbox-lbl');
      label.textContent = item;

      const input: HTMLInputElement = document.createElement('input');
      input.classList.add('check', 'color-checkbox');
      input.type = 'checkbox';
      input.value = item; 

      label.append(input);
      checkboxWrapper.append(label);
    })

    byColorWrapper.append(byBrandTitle, checkboxWrapper);
    filterWrapper.append(byColorWrapper);
  }
  
  createFilterByBrand();
  createFilterByColor();

  return filterWrapper;
}


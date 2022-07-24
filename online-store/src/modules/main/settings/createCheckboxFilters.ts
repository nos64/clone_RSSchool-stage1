import './settings.scss';
import { data } from '../main';
import { createHTMLElement } from '../../types/createHTMLElement';

export const createByFilter = (
  nameFilter: 'brand' | 'color' | 'owners',
  title: string
) => {
  const filterWrapper = createHTMLElement('div', `filters-value__${nameFilter}`);

  const filterTitle = createHTMLElement('h2', 'filter-title');
  filterTitle.textContent = `${title}`;

  const checkboxWrapper = createHTMLElement('div', 'checkbox-wrapper');

  const filterSet: Set<string> = new Set();
  data.forEach((item) => filterSet.add(item[nameFilter]));

  const filterArray = Array.from(filterSet);
  if (nameFilter === 'owners') {
    filterArray.sort((a: string, b: string) => +a - +b);
  } else {
    filterArray.sort();
  }

  filterArray.forEach(item => {
    const label = createHTMLElement('label', 'checkbox-lbl');
    label.textContent = item;

    const input = createHTMLElement('input', 'check', `${nameFilter}-checkbox`);
    if (input instanceof HTMLInputElement) {
      input.type = 'checkbox';
      input.value = item;
    }

    label.append(input);
    checkboxWrapper.append(label);
  });

  filterWrapper.append(filterTitle, checkboxWrapper);
  return filterWrapper;
};

// export const createByBrandFilter = () => {
//   const byBrandWrapper = createHTMLElement('div', 'filters-value__brand');

//   const byBrandTitle = createHTMLElement('h2', 'filter-title');
//   byBrandTitle.textContent = 'Марка';

//   const checkboxBrandWrapper = createHTMLElement('div', 'checkbox-wrapper');

//   const markSet: Set<string> = new Set();
//   data.forEach(({ brand }) => markSet.add(brand));

//   const markArray = Array.from(markSet);
//   markArray.sort((a: string, b: string) => +a - +b).forEach(item => {
//     const label = createHTMLElement('label', 'checkbox-lbl');
//     label.textContent = item;

//     const input = createHTMLElement('input', 'check', 'brand-checkbox');
//     if (input instanceof HTMLInputElement) {
//       input.type = 'checkbox';
//       input.value = item;
//     }

//     label.append(input);
//     checkboxBrandWrapper.append(label);
//   });

//   byBrandWrapper.append(byBrandTitle, checkboxBrandWrapper);
//   return byBrandWrapper;
// };

// export const createByColorFilter = () => {
//   const byColorWrapper = createHTMLElement('div', 'filters-value__color');

//   const byColorTitle = createHTMLElement('h2', 'filter-title');
//   byColorTitle.textContent = 'Цвет';

//   const checkboxColorWrapper = createHTMLElement('div', 'checkbox-wrapper');

//   const colorSet: Set<string> = new Set();
//   data.forEach(({ color }) => colorSet.add(color));

//   const colorArray = Array.from(colorSet);
//   colorArray.sort((a: string, b: string) => +a - +b).forEach(item => {
//     const label = createHTMLElement('label', 'checkbox-lbl');
//     label.textContent = item;

//     const input = createHTMLElement('input', 'check', 'color-checkbox');
//     if (input instanceof HTMLInputElement) {
//       input.type = 'checkbox';
//       input.value = item;
//     }

//     label.append(input);
//     checkboxColorWrapper.append(label);
//   });

//   byColorWrapper.append(byColorTitle, checkboxColorWrapper);
//   return byColorWrapper;
// };

// export const createbyOwnersFilter = () => {
//   const byOwnersWrapper = createHTMLElement('div', 'filters-value__owners');

//   const byOwnersTitle = createHTMLElement('h2', 'filter-title');
//   byOwnersTitle.textContent = 'Количество собственников';

//   const checkboxOwnersWrapper = createHTMLElement('div', 'checkbox-wrapper');

//   const ownersSet: Set<string> = new Set();
//   data.forEach(({ owners }) => ownersSet.add(owners));

//   const ownersArray = Array.from(ownersSet);

//   ownersArray.sort((a: string, b: string) => +a - +b).forEach(item => {
//     const label = createHTMLElement('label', 'checkbox-lbl');
//     label.textContent = item;

//     const input = createHTMLElement('input', 'check', 'owners-checkbox');
//     if (input instanceof HTMLInputElement) {
//       input.type = 'checkbox';
//       input.value = item;
//     }
//     label.append(input);
//     checkboxOwnersWrapper.append(label);
//   });

//   byOwnersWrapper.append(byOwnersTitle, checkboxOwnersWrapper);

//   return byOwnersWrapper;
// };

import './settings.scss';
import { createHTMLElement } from '../../types/createHTMLElement';

export const createSort = () => {
  const options: {value: string; label: string;}[] = [
    {
      value: 'all',
      label: 'Выберете значение'
    },
    {
      value: 'name_a-z',
      label: 'По марке, от А до Я'
    },
    {
      value: 'name_z-a',
      label: 'По марке, от Я до А'
    },
    {
      value: 'year_asc',
      label: 'По году выпуска, по возрастанию'
    },
    {
      value: 'year_desc',
      label: 'По году выпуска, по убыванию'
    },
    {
      value: 'volume_asc',
      label: 'По мощности, по возрастанию'
    },
    {
      value: 'volume_desc',
      label: 'По мощности, по убыванию'
    }
  ];

  const sortDiv = createHTMLElement('div', 'search-form');

  const sortTitle = createHTMLElement('h2', 'filter-title');
  sortTitle.textContent = 'Сортировка';

  const sortSelect = createHTMLElement('select', 'sort-field');

  options.forEach(({ value, label }) => {
    const option = createHTMLElement('option');
    if (option instanceof HTMLOptionElement) {
      option.value = value;
      option.textContent = label;
      sortSelect.append(option);
    }
  });

  sortDiv.append(sortTitle, sortSelect);

  return sortDiv;
};

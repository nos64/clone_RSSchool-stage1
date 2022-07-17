import './settings.scss';

export const sort = () => {
  const options: {value: string; label: string;}[] = [
    {
      value: 'all',
      label: 'Выберете значение',
    },
    {
      value: 'name_a-z',
      label: 'По марке, от А до Я',
    },
    {
      value: 'name_z-a',
      label: 'По марке, от Я до А',
    },
    {
      value: 'year_asc',
      label: 'По году выпуска, по возрастанию',
    },
    {
      value: 'year_desc',
      label: 'По году выпуска, по убыванию',
    },
    {
      value: 'volume_asc',
      label: 'По мощности, по возрастанию',
    },
    {
      value: 'volume_desc',
      label: 'По мощности, по убыванию',
    },
  ]

  const sortDiv: HTMLDivElement = document.createElement('div');
  sortDiv.className = 'search-form';

  const sortTitle: HTMLHeadingElement = document.createElement('h2');
  sortTitle.className = 'filter-title';
  sortTitle.textContent = 'Сортировка';

  const sortSelect: HTMLSelectElement = document.createElement('select');
  sortSelect.className = 'sort-field';

  options.forEach(item => {
    const option: HTMLOptionElement = document.createElement('option');
    option.value = item.value;
    option.textContent = item.label;
    sortSelect.append(option);
  })

  sortDiv.append(sortTitle, sortSelect);
  
  return sortDiv;
}
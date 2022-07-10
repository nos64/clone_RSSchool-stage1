import './settings.scss';

export const sort = () => {
  const options: {value: string; label: string;}[] = [
    {
      value: 'name_a-z',
      label: 'По названию, от А до Я',
    },
    {
      value: 'name_z-a',
      label: 'По названию, от Я до А',
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
      value: 'quantity_asc',
      label: 'По количеству, по возрастанию',
    },
    {
      value: 'quantity_desc',
      label: 'По количеству, по убыванию',
    },
  ]

  const sortDiv: HTMLDivElement = document.createElement('div');
  sortDiv.className = 'search-form';

  const sortTitle: HTMLHeadingElement = document.createElement('h2');
  sortTitle.className = 'filter-title';
  sortTitle.textContent = 'Сортировка';

  const sortSelect = document.createElement('select');
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
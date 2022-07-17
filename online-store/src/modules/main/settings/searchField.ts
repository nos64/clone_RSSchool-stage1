import './settings.scss';


export const createSearchField = () => {
  const searchForm: HTMLDivElement = document.createElement('div');
  searchForm.className = 'search-form';
  
  const searchTitle: HTMLHeadingElement = document.createElement('h2');
  searchTitle.className = 'filter-title';
  searchTitle.textContent = 'Поиск';

  const searchField: HTMLInputElement = document.createElement('input');
  searchField.className = 'search-form__search-field';
  searchField.type = 'search';
  searchField.placeholder = 'Введите марку авто';
  searchField.autofocus = true;
  searchField.autocomplete = 'off';

  searchForm.append(searchTitle, searchField);

  return searchForm
}

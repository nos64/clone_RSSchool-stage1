import './settings.scss';
import '../../../img/search.svg';

export const search = () => {
  const searchForm: HTMLDivElement = document.createElement('div');
  searchForm.className = 'search-form';
  
  const searchTitle: HTMLHeadingElement = document.createElement('h2');
  searchTitle.className = 'filter-title';
  searchTitle.textContent = 'Поиск';

  const searchField: HTMLInputElement = document.createElement('input');
  searchField.className = 'search-form__search-field';
  searchField.type = 'search';
  searchField.placeholder = 'Введите текст';
  searchField.autofocus = true;
  searchField.autocomplete = 'off';

  const searchBtn: HTMLImageElement = document.createElement('img');
  searchBtn.className = 'search-form__search-btn';
  searchBtn.src = 'img/search.svg';
  searchBtn.alt = 'Search button';

  searchForm.append(searchTitle, searchField, searchBtn);

  return searchForm
}

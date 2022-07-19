import './settings.scss';
import { data } from '../main';

export const createSettingsWrapper = () => {
  const settingsWrapper: HTMLDivElement = document.createElement('div');
  settingsWrapper.className = 'settings-wrapper';


  /**Строка поиска */
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

  /**Показать популярные */
  const popularityDiv: HTMLDivElement = document.createElement('div');
  popularityDiv.className = 'search-form';

  const popularityLbl: HTMLLabelElement = document.createElement('label');
  popularityLbl.className = 'popularity-lbl';
  popularityLbl.textContent = 'Показать только популярные';

  const popularityCheckbox: HTMLInputElement = document.createElement('input');
  popularityCheckbox.classList.add('check', 'popularity-check');
  popularityCheckbox.type = 'checkbox';

  popularityLbl.append(popularityCheckbox);
  popularityDiv.append(popularityLbl);

    /**Сортировка */
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

    /**Обертки слайдеров */
    const rangeDiv = document.createElement('div');
    rangeDiv.className = 'range-filters';

    // /**Слайдер по мощности двигателя */
    const volumeWrapper: HTMLDivElement = document.createElement('div');
    volumeWrapper.className = 'range-filters__volume';

    const volumeTitle = document.createElement('h2');
    volumeTitle.className = 'filter-title';
    volumeTitle.textContent = 'Мощность двигателя (л.с.)';

    const volumeFieldWrapper: HTMLDivElement = document.createElement('div');
    volumeFieldWrapper.className = 'range-wrapper';

    const minVolume: HTMLInputElement = document.createElement('input');
    minVolume.classList.add('range-field', 'volume-min');
    minVolume.type = 'number';
    minVolume.value = '';

    /**VOLUME_SLIDER */
    const volumeSlider = document.createElement('div');
    volumeSlider.id = 'volume-slider';

    const maxVolume: HTMLInputElement = document.createElement('input');
    maxVolume.classList.add('range-field', 'volume-max');
    maxVolume.type = 'number';
    maxVolume.value = '';

    volumeFieldWrapper.append(minVolume, volumeSlider, maxVolume);
    volumeWrapper.append(volumeTitle, volumeFieldWrapper);
    rangeDiv.append(volumeWrapper);

    /**Слайдер по году выпуска */
    const yearWrapper: HTMLDivElement = document.createElement('div');
    yearWrapper.className = 'range-filters__year';

    const yearTitle = document.createElement('h2');
    yearTitle.className = 'filter-title';
    yearTitle.textContent = 'Год выпуска';

    const yearFieldWrapper: HTMLDivElement = document.createElement('div');
    yearFieldWrapper.className = 'range-wrapper';

    const minYear: HTMLInputElement = document.createElement('input');
    minYear.classList.add('range-field', 'year-min');
    minYear.type = 'number';
    minYear.value = '';

    /**YEAR-SLIDER */
    const yearSlider = document.createElement('div');
    yearSlider.id = 'year-slider';

    const maxYear: HTMLInputElement = document.createElement('input');
    maxYear.classList.add('range-field', 'year-max');
    maxYear.type = 'number';
    maxYear.value = '';

    yearFieldWrapper.append(minYear, yearSlider, maxYear);
    yearWrapper.append(yearTitle, yearFieldWrapper);
    rangeDiv.append(yearWrapper);

    /**Чекбокс фильтры */
    const filterWrapper: HTMLDivElement = document.createElement('div');
    filterWrapper.className = 'filters-value';

    /**Фильтр по Бренду */
    const byBrandWrapper: HTMLDivElement = document.createElement('div');
    byBrandWrapper.className = 'filters-value__brand';

    const byBrandTitle = document.createElement('h2');
    byBrandTitle.className = 'filter-title';
    byBrandTitle.textContent = 'Марка';

    const checkboxBrandWrapper: HTMLDivElement = document.createElement('div');
    checkboxBrandWrapper.className = 'checkbox-wrapper';

    const markSet: Set<string> = new Set(); 
    data.forEach(item => markSet.add(item.brand));

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
      checkboxBrandWrapper.append(label);
    })

    byBrandWrapper.append(byBrandTitle, checkboxBrandWrapper);
    filterWrapper.append(byBrandWrapper);

    /**Фильтр по цвету */
    const byColorWrapper: HTMLDivElement = document.createElement('div');
    byColorWrapper.className = 'filters-value__color';

    const byColorTitle = document.createElement('h2');
    byColorTitle.className = 'filter-title';
    byColorTitle.textContent = 'Цвет';

    const checkboxColorWrapper: HTMLDivElement = document.createElement('div');
    checkboxColorWrapper.className = 'checkbox-wrapper';

    const colorSet: Set<string> = new Set(); 
    data.forEach(item => colorSet.add(item.color));
    
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
      checkboxColorWrapper.append(label);
    })

    byColorWrapper.append(byColorTitle, checkboxColorWrapper);
    filterWrapper.append(byColorWrapper);

    /**Фильтр по собственникам */
    const byOwnersWrapper: HTMLDivElement = document.createElement('div');
    byOwnersWrapper.className = 'filters-value__owners';

    const byOwnersTitle = document.createElement('h2');
    byOwnersTitle.className = 'filter-title';
    byOwnersTitle.textContent = 'Количество собственников';

    const checkboxOwnersWrapper: HTMLDivElement = document.createElement('div');
    checkboxOwnersWrapper.className = 'checkbox-wrapper';

    const ownersSet: Set<string> = new Set(); 
    data.forEach(item => ownersSet.add(item.owners));
    
    const ownersArray = Array.from(ownersSet);

    ownersArray.sort((a: string, b: string) => +a - +b).forEach(item => {
      const label: HTMLLabelElement = document.createElement('label');
      label.classList.add('checkbox-lbl');
      label.textContent = item;

      const input: HTMLInputElement = document.createElement('input');
      input.classList.add('check', 'owners-checkbox');
      input.type = 'checkbox';
      input.value = item; 

      label.append(input);
      checkboxOwnersWrapper.append(label);
    })

    byOwnersWrapper.append(byOwnersTitle, checkboxOwnersWrapper);
    filterWrapper.append(byOwnersWrapper);

    const resetFiltersBtn = document.createElement('button');
    resetFiltersBtn.classList.add('settings-btn', 'reset-filters');
    resetFiltersBtn.textContent = 'Сброс фильтров';
  
    const resetSettingsBtn = document.createElement('button');
    resetSettingsBtn.classList.add('settings-btn', 'reset-settings');
    resetSettingsBtn.textContent = 'Сброс настроек';
    
  settingsWrapper.append(searchForm, popularityDiv, sortDiv, rangeDiv, 
        filterWrapper, resetFiltersBtn, resetSettingsBtn);

  return settingsWrapper;
}
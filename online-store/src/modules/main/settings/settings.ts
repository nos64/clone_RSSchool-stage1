import './settings.scss';
import { container } from '../main';
import { createSearchField } from './searchField';
import { createShowPopularField } from './showPopular';
import { createSortField } from './sortSelect';
import { createRangesBlock } from './rangeWrapper';
import { createCheckboxFilters } from './checkboxFilters';


// export const createSettingsArea = () => {
  const settingsWrapper: HTMLDivElement = document.createElement('div');
  settingsWrapper.className = 'settings-wrapper';
  container.append(settingsWrapper);

  const searchForm = createSearchField()
  const showPopular = createShowPopularField();
  const sortSelect = createSortField();
 
  const checkboxWrapper = createCheckboxFilters();
  const rangeWrapper = createRangesBlock();
  
  const resetFiltersBtn = document.createElement('button');
  resetFiltersBtn.classList.add('settings-btn', 'reset-filters');
  resetFiltersBtn.textContent = 'Сброс фильтров';

  const resetSettingsBtn = document.createElement('button');
  resetSettingsBtn.classList.add('settings-btn', 'reset-settings');
  resetSettingsBtn.textContent = 'Сброс настроек';

  settingsWrapper.append(searchForm, showPopular, sortSelect, rangeWrapper,
    checkboxWrapper, resetFiltersBtn, resetSettingsBtn);
// }

// createSettingsArea()






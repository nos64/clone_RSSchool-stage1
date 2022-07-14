import './settings.scss';
import { container } from '../main';
import {search} from './searchField';
import {popular} from './showPopular';
import {sort} from './sortSelect';
import {range} from './rangeWrapper';
import {checkboxFilters} from './checkbox&colors';


const settingsWrapper: HTMLDivElement = document.createElement('div');
settingsWrapper.className = 'settings-wrapper';
container.append(settingsWrapper);

const searchForm = search()
const showPopular = popular();
const sortSelect = sort();
const rangeWrapper = range();
const checkboxWrapper = checkboxFilters();

const resetFiltersBtn = document.createElement('button');
resetFiltersBtn. classList.add('settings-btn', 'reset-filters');
resetFiltersBtn.textContent = 'Сброс фильтров';

const resetSettingsBtn = document.createElement('button');
resetSettingsBtn. classList.add('settings-btn', 'reset-settings');
resetSettingsBtn.textContent = 'Сброс настроек';


settingsWrapper.append(searchForm, showPopular, sortSelect, rangeWrapper, 
      checkboxWrapper, resetFiltersBtn, resetSettingsBtn);  






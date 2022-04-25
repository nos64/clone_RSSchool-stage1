
import './burger.js';
import './modal.js';
import './cards.js';
import getData  from './getData.js';
import {getModal} from './modal.js';
import { loadPage } from './cards.js';

const initPage = async () => {
  const data = await getData();

  loadPage(data);
  getModal(data);

}

initPage();









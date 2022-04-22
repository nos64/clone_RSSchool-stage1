
import './burger.js';
import './modal.js';
import './cards.js';
import getData  from './getData.js';
import {getModal} from './modal.js';
import {renderCard, showCard} from './cards.js';


  const initPage = async () => {
    const data = await getData();
    const cards = renderCard(data);

    getModal(data);
    showCard(cards);

  }

  initPage();







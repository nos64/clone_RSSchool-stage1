
import './burger.js';
import './modal.js';
import './cards.js';
import getData  from './getData.js';
import {getModal} from './modal.js';
// import {renderCard, showCard} from './cards.js';
// import './cards.js';
export const dataJSON=[];

const initPage = async () => {
  const data = await getData();
  // const cards = renderCard(data);
  getModal(data);

  // data.forEach(item => dataJSON.push(item))
  // console.log('dataJSON: ', dataJSON);

  // renderCard(data)
  
  // showCard(cards);
}

initPage();









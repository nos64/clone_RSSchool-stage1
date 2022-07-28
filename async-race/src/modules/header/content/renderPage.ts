import { createHTMLElement } from '../../types/createHTMLElement';
import './renderPage.scss';

export const renderPage = async () => {
  const wrapper = createHTMLElement('div', 'wrapper');
  const menuDiv = createHTMLElement('div', 'menu');
  const toGarageBtn = createHTMLElement('button', 'button', 'garage-menu-button');
  toGarageBtn.textContent = 'To garage';
  toGarageBtn.id = 'garage-menu';
  const toWinnersBtn = createHTMLElement('button', 'button', 'winners-menu-button');
  toWinnersBtn.textContent = 'To winners';
  toWinnersBtn.id = 'winners-menu';
  const garageView = createHTMLElement('div', 'garage-view');
  garageView.id = 'garage-view';

  const divWrapForm = createHTMLElement('div');
  const createForm = createHTMLElement('form', 'form');
  createForm.id = 'create';
  const inputName = createHTMLElement('input', 'input');
  inputName.id = 'create-name';
  if (inputName instanceof HTMLInputElement) {
    inputName.name = 'name';
    inputName.type = 'text';
  }
  const inputColor = createHTMLElement('input', 'input');
  inputColor.id = 'create-color';
  if (inputColor instanceof HTMLInputElement) {
    inputColor.name = 'color';
    inputColor.type = 'color';
    inputColor.value = '#fff'
  }
  const createBtn = createHTMLElement('button', 'button');
  createBtn.textContent = 'Create';
  if (createBtn instanceof HTMLButtonElement) {
    createBtn.type = 'submit';
  }

  const updateForm = createHTMLElement('form', 'form');
  updateForm.id = 'update';
  const inputNameUpdate = createHTMLElement('input', 'input');
  inputNameUpdate.id = 'update-name';
  if (inputNameUpdate instanceof HTMLInputElement) {
    inputNameUpdate.name = 'name';
    inputNameUpdate.type = 'text';
    inputNameUpdate.disabled = true;
  }
  const inputColorUpdate = createHTMLElement('input', 'input');
  inputColorUpdate.id = 'update-color';
  if (inputColorUpdate instanceof HTMLInputElement) {
    inputColorUpdate.name = 'color';
    inputColorUpdate.type = 'color';
    inputColorUpdate.value = '#fff';
    inputColorUpdate.disabled = true;
  }
  const updateBtn = createHTMLElement('button', 'button');
  updateBtn.textContent = 'Update';
  if (updateBtn instanceof HTMLButtonElement) {
    updateBtn.type = 'submit';
  }
  

  const raceControls = createHTMLElement('div', 'race-controls');
  const raseStartBtn = createHTMLElement('button', 'race-button');
  raseStartBtn.id = 'race';
  raseStartBtn.textContent = 'Race';
  const raseResetBtn = createHTMLElement('button', 'reset-button');
  raseResetBtn.id = 'reset';
  raseResetBtn.textContent = 'Reset';
  const generateCarsBtn = createHTMLElement('button', 'generate-button');
  generateCarsBtn.id = 'generate';
  generateCarsBtn.textContent = 'Generate cars';


  const garageDiv = createHTMLElement('div');
  garageDiv.id = 'garage';
  // garageDiv.textContent = `${renderGarage()}`
  const messageDiv = createHTMLElement('div');
  const messageParag = createHTMLElement('p', 'message');
  messageParag.id = 'message';

  const winnersViewDiv = createHTMLElement('div');
  winnersViewDiv.style.display = 'none';
  winnersViewDiv.id = 'winners=view';
    // garageDiv.textContent = `${generateWinners()}`

  const paginationDiv = createHTMLElement('div', 'pagination');
  const prevBtn = createHTMLElement('button', 'prev-button');
  prevBtn.textContent = 'Prev';
  prevBtn.id = 'prev'
  if (prevBtn instanceof HTMLButtonElement) {
    prevBtn.disabled = true;
  }
  const nextBtn = createHTMLElement('button', 'next-button');
  nextBtn.textContent = 'Next';
  nextBtn.id = 'next'
  if (nextBtn instanceof HTMLButtonElement) {
    nextBtn.disabled = true;
  }

  paginationDiv.append(prevBtn, nextBtn);
  messageDiv.append(messageParag);
  raceControls.append(raseStartBtn, raseResetBtn, generateCarsBtn);
  updateForm.append(inputNameUpdate, inputColorUpdate, updateBtn)
  createForm.append(inputName, inputColor, createBtn);
  divWrapForm.append(createForm, updateForm);
  garageView.append(divWrapForm, raceControls, garageDiv, messageDiv, winnersViewDiv, paginationDiv);
  menuDiv.append(toGarageBtn, toWinnersBtn);
  wrapper.append(menuDiv, garageView);

  return wrapper;
}
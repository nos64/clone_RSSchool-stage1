/**Создание карточки */
export const createCard = (item) => {
  const li = document.createElement('li');
  li.className = 'pets-list__item';
  li.dataset.name = item.name;

  const img = document.createElement('img');
  img.className = 'pets-list__image';
  img.src = item.img;
  img.dataset.name = item.name;

  const h4 = document.createElement('h4');
  h4.className = 'pets-list__name';
  h4.textContent = item.name;
  h4.dataset.name = item.name;

  const button = document.createElement('button');
  button.className = 'pets-list__button';
  button.textContent = 'Learn more';
  button.dataset.name = item.name;

  li.append(img, h4, button);
  
  return li;
};
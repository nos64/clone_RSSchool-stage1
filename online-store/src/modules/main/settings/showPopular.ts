import './settings.scss';

export const popular = () => {
  const popularityDiv: HTMLDivElement = document.createElement('div');
  popularityDiv.className = 'search-form';

  const popularityLbl: HTMLLabelElement = document.createElement('label');
  popularityLbl.className = 'popularity-lbl';
  popularityLbl.textContent = 'Показать только популярные';

  const popularityCheckbox: HTMLInputElement = document.createElement('input');
  popularityCheckbox.className = 'popularity-check';
  popularityCheckbox.type = 'checkbox';

  popularityLbl.append(popularityCheckbox);
  popularityDiv.append(popularityLbl);
  
  return popularityDiv;
}
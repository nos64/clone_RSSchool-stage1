import { Card } from '../types/types';
import { createCards } from '../main/content/content';

/** Сортировка */
const sortField: HTMLSelectElement | null = document.querySelector('.sort-field');
export function sorting(sortData: Card[]) {
  const sortByAlpabetAZ = () => {
    sortData.sort((obj1, obj2) => {
      if (obj1.brand > obj2.brand) {
        return 1;
      }
      if (obj1.brand < obj2.brand) {
        return -1;
      }
      return 0;
    });
  };
  const sortByAlpabetZA = () => {
    sortData.sort((obj1, obj2) => {
      if (obj1.brand < obj2.brand) {
        return 1;
      }
      if (obj1.brand > obj2.brand) {
        return -1;
      }
      return 0;
    });
  };
  const sortByAsc = (field: 'year' | 'volume') => {
    sortData.sort((obj1, obj2) => {
      if (obj1[field] > obj2[field]) {
        return 1;
      }
      if (+obj1[field] < +obj2[field]) {
        return -1;
      }
      return 0;
    });
  };
  const sortByDesc = (field: 'year' | 'volume') => {
    sortData.sort((obj1, obj2) => {
      if (+obj1[field] < +obj2[field]) {
        return 1;
      }
      if (+obj1[field] > +obj2[field]) {
        return -1;
      }
      return 0;
    });
  };
  if (sortField?.value === 'name_a-z') {
    sortByAlpabetAZ();
  } else if (sortField?.value === 'name_z-a') {
    sortByAlpabetZA();
  } else if (sortField?.value === 'year_asc') {
    sortByAsc('year');
  } else if (sortField?.value === 'year_desc') {
    sortByDesc('year');
  } else if (sortField?.value === 'volume_asc') {
    sortByAsc('volume');
  } else if (sortField?.value === 'volume_desc') {
    sortByDesc('volume');
  }
  createCards(sortData);
}

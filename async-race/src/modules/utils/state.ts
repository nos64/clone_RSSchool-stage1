// import {getCars, getWinners} from '../0_api/api';
import { getCars, getWinners } from '../0_api/api';
import { Store } from './types';
// import { GetWinnersCall } from './types';
// import { Sort } from './types';

const { items: cars, count: carsCount } = await getCars(1);
const { items: winners, count: winnersCount } = await getWinners(1, 'wins', 'ASC');

const store: Store = {
  carsPage: 1,
  cars,
  carsCount,
  winnersPage: 1,
  winners,
  winnersCount,
  animation: { id: 0 },
  view: 'garage',
  sortBy: 'wins',
  sortOrder: 'ASC',
};
export default store;

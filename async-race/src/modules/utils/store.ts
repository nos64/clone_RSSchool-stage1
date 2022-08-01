// import {getCars, getWinners} from '../0_api/api';
import { getCars, getWinners } from '../0_api/api';
// import { GetWinnersCall } from './types';
// import { Sort } from './types';

const { items: cars, count: carsCount } = await getCars(1);
const { items: winners, count: winnersCount } = await getWinners(1, 'wins', 'ASC');

export default {
  carsPage: 1,
  cars,
  carsCount,
  winnersPage: 1,
  winners,
  winnersCount,
  animation: {},
  view: 'garage',
  sortBy: 'wins',
  sortOrder: 'ASC',
};

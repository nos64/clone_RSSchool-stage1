// HEADER - X-Total-Count - общее количество машин используется
// в скобках гаража - общее количество авто
// 1. При запуске - Get Cars
// РеквестАнимейшн запускаем на время - расстояние / время distance /velocity

// export interface GetCars {
//   name: string,
//   color: string,
//   id: number
//   _page?: number,
//   _limit?: number
// }

// export interface Store {
//   carsPage: number,
//   cars: GetCarsType[],
//   carsCount: number,
//   // winnersPage: 1,
//   // winners,
//   // winnersCount,
//   // animation: {},
//   view: 'string',
//   sortBy: string | null,
//   sortOrder: string | null,
// }

export type GetCarsType = [
  {
    name: string,
    color: string,
    id: number,
  },
];

export type GetWinnersType = [
  {
    name: string,
    color: string,
    id: number,
  },
];

export type Sort = 'id' | 'wins' | 'time';

export type Order = 'ASC' | 'DESC';

// export interface GetWinnersCall {
//   _page?: number,
//   _limit?: number,
//   _sort?: Sort,
//   _order?: Order
// }
export interface GetCarInterface {
  name: string,
  color: string,
  id: number
}

export interface CreateCarInterface {
  name: string,
  color: string
}

export interface StartStopCar {
  velocity: number,
  distance: number
}

export interface CreateWinner {
  id: number,
  wins: number,
  time: number
}

export interface UpdateWinner {
  wins: number,
  time: number
}
export const sorter = {
  byWins: 'wins',
  byTime: 'time',
};
// export interface SaveWinner {
//   id: number,
//   wins: number,
//   time: number
// }

export interface Headers {
  'X-Total-Count': number
}

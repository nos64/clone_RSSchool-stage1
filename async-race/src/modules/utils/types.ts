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

export interface Store {
  carsPage: number,
  cars: GetCarsType;
  carsCount: string | null;
  winnersPage: number;
  winners: {
    car: GetCarsType;
    name: string;
    color: string;
    id: number;
  }[];
  winnersCount: string | null;
  animation: AnimationReturn;
  view: string;
  sortBy: string;
  sortOrder: string;
}

export interface AnimationReturn {
  id: number;
}

export type GetCarsType = [
  {
    name: string,
    color: string,
    id: number,
  },
];

export interface GetCarsReturn {
  items: GetCarsType,
  count: string | null,
}

export type GetWinnersType = [
  {
    name: string,
    color: string,
    id: number,
  },
];

export type Sort = 'id' | 'wins' | 'time';

export type Order = 'ASC' | 'DESC';

export interface GetCarInterface {
  name: string,
  color: string,
  id: number
}

export interface UpdateCarInterface {
  name: string,
  color: string,
}

export interface CreateCarInterface {
  name: string,
  color: string
}

export interface StartStopCar {
  velocity: number,
  distance: number
}

export interface RaceStatus {
  success: boolean,
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

export interface RaceAll {
  success: boolean,
  time: number,
  name?: string | undefined,
  color?: string | undefined,
  id?: number | undefined,
}

export type RaceAllReturn = [
  {
    time: number;
    name?: string | undefined;
    color?: string | undefined;
    id?: number | undefined;
  },
];

export interface CarEngine {
  id: number,
  status: string
}

export interface Headers {
  'X-Total-Count': number
}

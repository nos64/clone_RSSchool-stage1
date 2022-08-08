export interface Store {
  carsPage: number;
  cars: CarInterface[];
  carsCount: string | null;
  winnersPage: number;
  winners: {
    car: CarInterface;
    id: number;
    wins: number;
    time: number;
  }[];
  winnersCount: string | null;
  animation: { id: number; };
  view: string;
  sortBy: Sort;
  sortOrder: Order;
}

export interface CarInterface {
  name: string,
  color: string,
  id: number,
}

export interface GetCarsReturn {
  items: CarInterface[],
  count: string | null,
}

// export type GetWinnersType = [
//   {
//     name: string,
//     color: string,
//     id: number,
//   },
// ];

export interface GetWinners {
  id: number,
  wins: number,
  time: number
}

export type Sort = 'id' | 'wins' | 'time';

export type Order = 'ASC' | 'DESC';

export interface UpdateCarInterface {
  name: string,
  color: string,
}

export interface CreateCarInterface {
  name: string,
  color: string
}

// export interface StartStopCar {
//   velocity: number,
//   distance: number
// }

export interface CreateWinner {
  id: number,
  wins: number,
  time: number
}

// export interface UpdateWinner {
//   wins: number,
//   time: number
// }

export const sorter = {
  byWins: 'wins',
  byTime: 'time',
};

export interface RaceAll {
  success: boolean,
  id: number,
  time: number,
}

// export interface RaceAllReturn {
//   time: number;
//   name?: string | undefined;
//   color?: string | undefined;
//   id?: number | undefined;
// }

// export interface CarEngine {
//   id: number,
//   status: string
// }

// export interface Status {
//   success: boolean
// }

// export interface Headers {
//   'X-Total-Count': number
// }

// export interface RaceAction {
//   success: boolean;
//   id: number;
//   time: number;
// }

// import { GetCars } from "../utils/types";

import {
  // GetCarsType,
  GetWinnersType,
  // GetWinnersCall,
  // GetCarInterface,
  CreateCarInterface,
  UpdateCarInterface,
  Sort,
  Order,
  CreateWinner,
  GetCarsReturn,
  GetCarInterface,
  RaceStatus,
  // UpdateWinner,
  // SaveWinner,
} from '../utils/types';

const url = 'http://127.0.0.1:3000';
const winners = `${url}/winners`;
const garage = `${url}/garage`;
const engine = `${url}/engine`;

export const getCars = async (page: number, limit = 7) => {
  const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
  console.log('page: ', page);
  const carsArr: GetCarsReturn = {
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
  return carsArr;
};

export const getCar = async (id: number) => (await fetch(`${garage}/${id}`)).json();

const getSortOrder = (sort: Sort, order: Order) => {
  if (sort && order) {
    return `&_sort=${sort}&_order=${order}`;
  }
  return '';
};

export const getWinners = async (
  page: number,
  sort: Sort,
  order: Order,
  limit = 10,
) => {
  const response = await fetch(`${winners}?_page=${page}&_limit=${limit}${getSortOrder(sort, order)}`);
  const items = <GetWinnersType> await response.json();

  return {
    items: await Promise.all(items.map(async (winner) => (
      { ...winner, car: await getCar(winner.id) }))),
    count: response.headers.get('X-Total-Count'),
  };
};

// eslint-disable-next-line max-len
export const createCar = async (body: CreateCarInterface): Promise<GetCarInterface> => (await fetch(garage, {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
})).json();

export const deleteCar = async (id: number) => (
  await fetch(`${garage}/${id}`, { method: 'DELETE' })).json();

export const upadateCar = async (id: number, body: UpdateCarInterface) => (await fetch(`${garage}/${id}`, {
  method: 'PUT',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
})).json();

export const startEngine = async (id: number) => (
  await fetch(`${engine}?id=${id}&status=started`)
).json();

export const stopEngine = async (id: number) => (
  await fetch(`${engine}?id=${id}&status=stopped`)
).json();

export const drive = async (id: number): Promise<RaceStatus> => {
  const res = await fetch(`${engine}?id=${id}&status=drive`).catch();
  return res.status !== 200 ? { success: false } : { ...(await res.json()) };
};

export const getWinner = async (id: number): Promise<CreateWinner> => (await fetch(`${winners}/${id}`)).json();

export const getWinnerStatus = async (id: number) => (await fetch(`${winners}/${id}`)).status;

export const deleteWinner = async (id: number): Promise<void> => (
  await fetch(`${winners}/${id}`, { method: 'DELETE' })
).json();

// eslint-disable-next-line max-len
export const createWinner = async (body: CreateWinner): Promise<CreateWinner> => (await fetch(winners, {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
})).json();

export const updateWinner = async (id: number, body: CreateWinner) => (await fetch(`${winners}/${id}`, {
  method: 'PUT',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
})).json();

export const saveWinner = async (id: number, time: number) => {
  const winnerStatus = await getWinnerStatus(id);

  if (winnerStatus === 404) {
    await createWinner({
      id,
      wins: 1,
      time,
    });
  } else {
    const winner: CreateWinner = await getWinner(id);
    await updateWinner(id, {
      id,
      wins: winner.wins + 1,
      time: time < winner.time ? time : winner.time,
    });
  }
};

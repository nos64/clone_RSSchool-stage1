// import { GetCars } from "../utils/types";

import {
  GetCarsType,
  GetWinnersType,
  // GetWinnersCall,
  GetCarInterface,
  CreateCarInterface,
  Sort,
  Order,
  CreateWinner,
  // UpdateWinner,
  // SaveWinner,
} from '../utils/types';

const url = 'http://127.0.0.1:3000';
const engine = `${url}/engine`;
const winners = `${url}/winners`;
const garage = `${url}/garage`;

export const getCars = async (page: number, limit = 7) => {
  const response = await fetch(`${garage}?page=${page}&_limit=${limit}`);
  return {
    items: <GetCarsType> await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
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

export const createCar = async (body: CreateCarInterface) => (await fetch(garage, {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
})).json();

export const deleteCar = async (id: number) => (
  await fetch(`${garage}/${id}`, { method: 'DELETE' })).json();

export const upadateCar = async (id: number, body: GetCarInterface) => (await fetch(`${garage}/${id}`, {
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

export const drive = async (id: number) => {
  const res = await fetch(`${engine}?id=${id}&status=drive`).catch();
  return res.status !== 200 ? { sourccess: false } : { ...(await res.json()) };
};

export const getWinner = async (id: number) => (await fetch(`${winners}/${id}`)).json();

export const getWinnerStatus = async (id: number) => (await fetch(`${winners}/${id}`)).status;

export const deleteWinner = async (id: number) => (
  await fetch(`${winners}/${id}`, { method: 'DELETE' })
).json();

export const createWinner = async (body: CreateWinner) => (await fetch(winners, {
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
    const winner = await getWinner(id);
    await updateWinner(id, {
      id,
      wins: winner.wins + 1,
      time: time < winner.time ? time : winner.time,
    });
  }
};

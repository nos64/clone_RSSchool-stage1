// import { GetCars } from "../utils/types";

import {
  // GetCarsType,
  // GetWinnersType,
  // GetWinnersCall,
  // GetCarInterface,
  CreateCarInterface,
  UpdateCarInterface,
  Sort,
  Order,
  CreateWinner,
  GetCarsReturn,
  GetWinners,
  CarInterface,
  // Status,
  // UpdateWinner,
  // SaveWinner,
} from '../utils/types';

const url = 'http://127.0.0.1:3000';
const winners = `${url}/winners`;
const garage = `${url}/garage`;
const engine = `${url}/engine`;

/** CARS */
export const getCars = async (page: number, limit = 7) => {
  const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
  const carsArr: GetCarsReturn = {
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
  return carsArr;
};

export const getCar = async (id: number): Promise<CarInterface> => (await fetch(`${garage}/${id}`)).json();

export const createCar = async (body: CreateCarInterface) => (await fetch(garage, {
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

/** MOOVES */
// eslint-disable-next-line max-len
// export const startEngine = async (id: number) => (await fetch(`${engine}?id=${id}&status=started`)).json();
export const startEngine = async (id: number) => (
  await fetch(
    `${engine}?id=${id}&status=started`,
    {
      method: 'PATCH',
    },
  )
).json();

export const stopEngine = async (id: number) => (
  await fetch(
    `${engine}?id=${id}&status=stopped`,
    {
      method: 'PATCH',
    },
  )
).json();

export const driveCar = async (id: number) => (
  await fetch(
    `${engine}?id=${id}&status=drive`,
    {
      method: 'PATCH',
    },
  )
).json()
  .then(async (response) => (
    response.status !== 200 ? { success: false } : { ...(await response.json()) }
  ));

/** SORTING */
const getSortOrder = (sort: Sort, order: Order) => {
  if (sort && order) {
    return `&_sort=${sort}&_order=${order}`;
  }
  return '';
};

/** WINNER */
export const getWinners = async (
  page: number,
  sort: Sort,
  order: Order,
  limit = 10,
) => {
  const response = await fetch(`${winners}?_page=${page}&_limit=${limit}${getSortOrder(sort, order)}`);
  const items: GetWinners[] = await response.json();

  return {
    items: await Promise.all(items.map(async (winner) => ({
      ...winner,
      car: await getCar(winner.id),
    }))),
    count: response.headers.get('X-Total-Count'),
  };
};

export const getWinner = async (id: number): Promise<GetWinners> => (await fetch(`${winners}/${id}`)).json();

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

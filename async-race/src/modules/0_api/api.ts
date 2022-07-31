// import { GetCars } from "../utils/types";

// // let data = [];

// // const getData = ({search, id, country, city} = {}) => {
// //   let url = `http://localhost:3000/api/vacancy/${id ? id : ''}`;
// //   if (search) {
// //     url = `http://localhost:3000/api/vacancy?search=${search}`;
// //   }

// //   if (city) {
// //     url = `http://localhost:3000/api/vacancy?city=${city}`;
// //   }

// //   if (country) {
// //     url = `http://localhost:3000/api/vacancy?country=${country}`;
// //   }

// //   return fetch(url).then(response => response.json());
// // };

// // const sortData = () => {
// //   switch (orderBy.value) {
// //     case 'down':
// //       data.sort((a, b) => a.minCompensation > b.minCompensation ? 1 : -1);
// //       break;
// //     case 'up':
// //       data.sort((a, b) => b.minCompensation > a.minCompensation ? 1 : -1);
// //       break;
// //     default:
// //       data.sort((a, b) => new Date(a.date).getTime() > new Date(b.date).getTime() ? 1: -1);
// //   }
// // };

import { GetCarsType } from '../utils/types';

const url = 'http://127.0.0.1:3000';
// // // const engine = `${url}/engine`;
// // // const winners = `${url}/winners`;
const garage = `${url}/garage`;

export const getCars = async (page: number, limit = 7) => {
  const response = await fetch(`${garage}?page=${page}&_limit=${limit}`);
  return {
    items: <GetCarsType> await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
};

// export const getCars = async (page: number, limit = 7) => {
//   const response = await fetch(`${garage}?page=${page}&_limit=${limit}`);
//   const cars = await response.json();
//   return cars;
// };

// export const getCar = async (id: number) => (await fetch(`${garage}/${id}`)).json();

// export const createCar = async (body: {}) => (await fetch(garage, {
//   method: 'POST',
//   body: JSON.stringify(body),
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })).json();

// // export const deleteCar = async (id: number) => (
// // await (await fetch(`${garage}/${id}`, {method: 'DELETE'})
// // ).json();

// // export const upateCar = async (id: number, body: {}) => (await fetch(`${garage}/${id}`, {
// //   method: 'PUT',
// //   body: JSON.stringify(body),
// //   headers: {
// //     'Content-Type': 'application/json'
// //   },
// // })).json();

// // export const startEngine = async (id: number) => (
// // await fetch(`${engine}?id=${id}&status=started`)
// // ).json();

// // export const stopEngine = async (id: number) => (
// // await fetch(`${engine}?id=${id}&status=stopped`)
// // ).json();

// // const drive = async (id: number) => {
// //   const res = await fetch(`${engine}?id=${id}&statos=drive`).catch();
// //   return res.status !== 200 ? { sourccess: false } : { ... (await res.json()) };
// // };

// // const getSortOrder = (sort: ['id'|'wins'|'time'], order: ['ASC'|'DESC']) => {
// //   if (sort && order) {
// //     return `&_sort=${sort}&_order=${order}`;
// //   }
// //   return '';
// // };

// // export const getWinners = async ({ page, limit = 10, sort, order }) => {
// //   const response = await fetch(
// // `${winners}?_page=${page}&_limit=${limit}${getSortOrder(sort, order)}`
// // );
// //   const items = await response.json();

// //   return {
// // items: await Promise.all(items.map(async winner => (
// // {...winner, car: await getCar(winner.id)})
// // )),
// // count: response.headers.get('X-Total-Count'),
// //   };
// // }

// // export const getWinner = async (id: number) => (await fetch(`${winners}/${id}`)).json();

// // export const getWinnerStatus = async (id) => (await fetch(`${winners}/${id}`)).status;

// // export const deleteWinner = async (id) => (
// //   await fetch(`${winners}/${id}`, { method: 'DELETE' })
// // ).json();

// // export const createWinner = async (body) => (await fetch(`${winners}/${id}`, {
// //   method: 'PUT',
// //   body: JSON.stringify(body),
// //   headers: {
// //     'Content-Type': 'application/json'
// //   },
// // })).json();

// // export const updateWinner = async (id, body) => (await fetch(`${winners}/${id}`, {
// //   method: 'PUT',
// //   body: JSON.stringify(body),
// //   headers: {
// //     'Content-Type': 'application/json'
// //   },
// // })).json();

// // export const saveWinner = async ({ id, time }) => {
// //   const winnerStatus = await getWinnerStatus(id);

// //   if (winnerStatus === 404) {
// //     await createWinner({
// //       id,
// //       wins: 1,
// //       time,
// //     });
// //   } else {
// //     const winner = await getWinner(id);
// //     await updateWinner(id, {
// //       id,
// //       wins: winner.wins + 1,
// //       time: time < winner.time ? time : winner.time,
// //     });
// //   }
// // };

import {
  createCar,
  deleteCar,
  deleteWinner,
  getCar, getCars,
  getWinners,
  // upadateCar,
  // saveWinner,
  // startEngine
} from './0_api/api';
import { renderWinners } from './renderWinners/renderWinners';
import {
  // getDistanceBetweenElements,
  // animation,
  generateRandomCars,
  // race
} from './utils/utils';
import store from './utils/store';
import {
  // CreateCarInterface,
  // CreateCarInterface,
  // GetCarInterface,
  Sort,
} from './utils/types';
import { renderGarage } from './2_renderGarage/renderGarage';
// import { upadateCar,drive } from './0_api/api';

let selectedCar: { name: string; color: string; id: number; } | null = null;

export const updateStateGarage = async () => {
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const { items, count } = await getCars(store.carsPage);
  store.cars = items;
  store.carsCount = count;

  if (store.carsCount && prevBtn instanceof HTMLButtonElement
      && nextBtn instanceof HTMLButtonElement) {
    if (store.carsPage * 7 < +store.carsCount) {
      nextBtn.disabled = false;
    } else {
      nextBtn.disabled = true;
    }
    if (store.carsPage > 1) {
      prevBtn.disabled = false;
    } else {
      prevBtn.disabled = true;
    }
  }
};

export const updateStateWinners = async () => {
  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');
  const { items, count } = await getWinners(1, 'wins', 'ASC');
  // {
  //   page: store.winnersPage,
  //   sort: store.sortBy,
  //   order: store.sortOrder,
  // },
  // );
  store.winners = items;
  store.winnersCount = count;
  if (store.winnersCount && nextBtn instanceof HTMLButtonElement
    && prevBtn instanceof HTMLButtonElement) {
    if (store.winnersPage * 10 < +store.winnersCount) {
      nextBtn.disabled = false;
    } else {
      nextBtn.disabled = true;
    }
    if (store.winnersPage > 1) {
      prevBtn.disabled = false;
    } else {
      prevBtn.disabled = true;
    }
  }
};

// const startDriving = async (id: number) => {
//   const startButton: HTMLElement | null = document.getElementById(`start-engine-car-${id}`);
//   if (startButton && startButton instanceof HTMLButtonElement) {
//     startButton.disabled = true;
//     startButton?.classList.toggle('enabling', true);
//   }

//   const { velocity, distance } = await startEngine(id);
//   const time = Math.round(distance / velocity);

//   startButton?.classList.toggle('enabling', true);
//   const stopEngBtn = document.getElementById(`stop-engine-car-${id}`);
//   if (stopEngBtn && stopEngBtn instanceof HTMLButtonElement) {
//     stopEngBtn.disabled = false;
//   }

//   const car = document.getElementById(`car-${id}`);
//   const flag = document.getElementById(`flag-${id}`);
//   const htmlDistance = Math.floor(getDistanceBetweenElements(car, flag)) + 100;

//   store.animation[id] = animation(car, htmlDistance, time);

//   const { success } = await drive(id);
//   if (!success) {
//     window.cancelAnimationFrame(store.animation[id].id);
//   }
//   return { success, id, time };
// };

const stopDriving = async (id: number) => {
  const stopButton = document.getElementById(`stop-engine-car-${id}`);
  if (stopButton && stopButton instanceof HTMLButtonElement) {
    stopButton.disabled = true;
    stopButton?.classList.toggle('enabling', true);
  }
};

const setSortOrder = async (sortBy: Sort) => {
  const winnersView: HTMLElement | null = document.getElementById('winners-view');
  store.sortOrder = store.sortOrder === 'asc' ? 'desc' : 'asc';
  store.sortBy = sortBy;

  await updateStateWinners();
  if (winnersView) {
    winnersView.innerHTML = '';
    winnersView.append(renderWinners());
  }
};

export const listen = () => {
  const garage = document.getElementById('garage');
  const garageView: HTMLElement | null = document.getElementById('garage-view');
  const winnersView: HTMLElement | null = document.getElementById('winners-view');
  const updateName = document.getElementById('update-name');
  const updateColor = document.getElementById('update-color');
  const updateSubmit = document.getElementById('update-submit');
  document.body.addEventListener('click', async (e) => {
    if (e.target && e.target instanceof HTMLElement) {
      if (e.target.classList.contains('garage-menu-button')) {
        if (garageView) garageView.style.display = 'block';
        if (winnersView) winnersView.style.display = 'none';
        await updateStateGarage();
      }
      if (e.target.classList.contains('winners-menu-button')) {
        if (winnersView) {
          winnersView.style.display = 'block';
        }
        if (garageView) {
          garageView.style.display = 'none';
        }
        await updateStateWinners();
        if (winnersView) {
          winnersView.textContent = '';
          winnersView.append(renderWinners());
        }
      }
      if (e.target.classList.contains('start-engine-button')) {
        // const id: number = +e.target.id.split('start-engine-car-')[1];
        // startDriving(id);
      }
      if (e.target.classList.contains('stop-engine-button')) {
        const id = +e.target.id.split('stot-engine-car-')[1];
        stopDriving(id);
      }
      if (e.target.classList.contains('select-button')) {
        selectedCar = await getCar(+e.target.id.split('select-car-')[1]);

        if (selectedCar && updateName instanceof HTMLInputElement) {
          updateName.value = selectedCar.name;
          updateName.disabled = false;
        }

        if (selectedCar && updateColor instanceof HTMLInputElement) {
          updateColor.value = selectedCar.color;
          updateColor.disabled = false;
        }

        if (updateSubmit instanceof HTMLButtonElement) {
          updateSubmit.disabled = false;
        }
      }
      if (e.target.classList.contains('remove-button')) {
        const id = +e.target.id.split('remove-car-')[1];
        await deleteCar(id);
        await deleteWinner(id);
        await updateStateGarage();
        if (garage) {
          garage.innerHTML = '';
          garage.append(renderGarage());
        }
      }
      if (e.target.classList.contains('generate-button')) {
        if (e.target instanceof HTMLButtonElement) {
          e.target.disabled = true;

          const cars = generateRandomCars();
          await Promise.all(cars.map(async (car) => createCar(car)));
          await updateStateGarage();
          if (garage) {
            garage.textContent = '';
            garage.append(renderGarage());
          }
          e.target.disabled = false;
        }
      }
      if (e.target.classList.contains('race-button')) {
        if (e.target instanceof HTMLButtonElement) {
          e.target.disabled = true;
          // const winner = await race(startDriving);
          // await saveWinner(winner);///////////////////////////////
          const message = document.getElementById('message');
          if (message) {
            // message.innerHTML = `${winner.name} went first ${winner.time}s!`;
            message.classList.toggle('visible', true);
          }
          const resetBtn = document.getElementById('reset');
          if (resetBtn && resetBtn instanceof HTMLButtonElement) {
            resetBtn.disabled = false;
          }
        }
      }
      if (e.target.classList.contains('prev-button')) {
        // eslint-disable-next-line default-case
        switch (store.view) {
          case 'garage': {
            store.carsPage--;
            await updateStateGarage();
            if (garage) {
              garage.textContent = '';
              garage.append(renderGarage());
            }
            break;
          }
          case 'winners': {
            store.winnersPage--;
            await updateStateWinners();
            if (winnersView) {
              winnersView.textContent = '';
              winnersView.append(renderWinners());
            }
            break;
          }
        }
      }
      if (e.target.classList.contains('next-button')) {
        // eslint-disable-next-line default-case
        switch (store.view) {
          case 'garage': {
            store.carsPage++;
            await updateStateGarage();
            if (garage) {
              garage.innerHTML = '';
              garage.append(renderGarage());
            }
            break;
          }
          case 'winners': {
            store.winnersPage++;
            await updateStateWinners();
            if (winnersView) {
              winnersView.textContent = '';
              winnersView.append(renderWinners());
            }
            break;
          }
        }
      }
      if (e.target.classList.contains('table-wins')) {
        setSortOrder('wins');
      }
      if (e.target.classList.contains('table-time')) {
        setSortOrder('time');
      }
    }
  });
  document.getElementById('create')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    const carName = (target.children[0] as HTMLInputElement).value;
    const carColor = (target.children[1] as HTMLInputElement).value;
    const car = { name: carName, color: carColor };
    await createCar(car);
    await updateStateGarage();
    if (garage) {
      garage.textContent = '';
      garage.append(renderGarage());
    }
    const createName = document.getElementById('create-name');
    if (createName && createName instanceof HTMLInputElement) {
      createName.value = '';
    }
    if (e.target instanceof HTMLButtonElement) {
      e.target.disabled = true;
    }
  });

  // const createForm = document.getElementById('create') as HTMLFormElement;
  // createForm.addEventListener('submit', createCarFromForm);

  // document.getElementById('create')?.addEventListener('submit', async (e) => {
  //   e.preventDefault();
  //   if (e.target instanceof NodeList) {
  //     const car: CreateCarInterface = Object.fromEntries(
  //       new Map([...e.target].filter(
  //         (item) => !!item.name).map(({ value, name }) => [name, value])));
  //     await createCar(car);
  //     await updateStateGarage();
  //     if (garage) {
  //       garage.textContent = '';
  //       garage.append(renderGarage());
  //     }
  //     const createName = document.getElementById('create-name');
  //     if (createName && createName instanceof HTMLInputElement) {
  //       createName.value = '';
  //     }
  //     if (e.target instanceof HTMLButtonElement) {
  //       e.target.disabled = true;
  //     }
  //   }
  // });

  // document.getElementById('update')?.addEventListener('submit', async (e) => {
  // e.preventDefault();
  // if (e.target instanceof HTMLCollection) {
  // const car: GetCarInterface  = Object.fromEntries(
  // new Map([...e.target].filter(
  // ({ name }) => !!name).map(({value, name}) => [name, value)));
  // if (selectedCar) {
  //   await upadateCar(selectedCar.id, car);
  //   await updateStateGarage();
  //   if (garage) {
  //     garage.textContent = '';
  //     garage.append(renderGarage());
  //   }
  //   if (updateName instanceof HTMLInputElement) {
  //     updateName.value = '';
  //     updateName.disabled = true;
  //   }
  //   if (updateColor instanceof HTMLInputElement) {
  //     updateColor.disabled = true;
  //   }
  //   if (updateSubmit instanceof HTMLButtonElement) {
  //     updateSubmit.disabled = true;
  //   }
  //   if (updateColor instanceof HTMLInputElement) {
  //     updateColor.value = '#ffffff';
  //   }
  //   selectedCar = null;
  // }
  // }
// });
};

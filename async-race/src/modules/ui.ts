
// // let selectedCar = null;

// export const updateStateGarage = async () => {
//   const { items, count } = await getCars(store.carsPage);
//   store.cars = items;
//   store.carsCount = count;

//   if (store.carsPage * 7 < store.cars.Count) {
//     document.getElementById('next').disabled = false;
//   } else {
//     document.getElementById('next').disabled = true;
//   }
//   if (sotre.carsPage > 1) {
//     document.getElementById('prev').disabled = false;
//   } else {
//     document.getElementById('prev').disabled = true;
//   }
// }

// export const updateStateWinners = async () => {
//   const { items, count } = await getWinners({page: store.winnersPage, sort: store.sortBy, order: store.sortOrder});
//   store.winners = items;
//   store.winnersCount = count;

//   if (store.winnersPage * 10 < store.winnersCount) {
//     document.getElementById('next').disabled = false;
//   } else {
//     document.getElementById('next').disabled = true;
//   }
//   if (store.winnersPage > 1) {
//     document.getElementById('prev').disabled = false;
//   } else {
//     document.getElementById('prev').disabled = true;
//   }
// }

// const startDriving = async (id) => {
//   const startButton = document.getElementById(`start-engine-car-${id}`);
//   startButton.disabled = true;
//   startButton?.classList.toggle('enabling', true);

//   const { velocity, distance } = await startEngine(id);
//   const time = Math.round(distance / velocity);

//   startButton?.classList.toggle('enabling', true);
//   document.getElementById(`stop-engine-car-${id}`).disabled = false;

//   const car = document.getElementById(`car-${id}`);
//   const flag = document.getElementById(`flag-${id}`);
//   const htmlDistance = Math.floor(getDistanceBetweenElements(car, flag)) * 100;

//   store.animation(id) = animation(car, htmlDistance, time);

//   const { success, id, time };
// }

// const stopDriving = async (id) => {
//   const stopButton = document.getElementById(`stop-engine-car-${id}`);
//   stopButton.disabled = true;
//   stopButton?.classList.toggle('enabling', true);
// }

// const setSortOrder = async = (sortBy) => {
//   store.sortOrder = store.sortOrder === 'asc' ? 'desc' : 'asc';
//   store.sortBy = sortBy;

//   await updateStateWinners();
//   document.getElementById('winners-view').innerHTML = renderWinners();
// };

// export const listen = () => {
//   document.body.addEventListener('click', async (e) => {
//     if (e.target.classList.contains('start-engine-button')) {
//       const id = +e.target.split('start-engine-car-')[1];
//       startDriving(id);
//     }
//     if (e.target.classList.contains('stop-engine-button')) {
//       const id = +e.target.split('stot-engine-car-')[1];
//       stotDriving(id);
//     }
//     if (e.target.classList.contains('select-button')) {
//       selectedCar = await getCar(e.target?.dispatchEvent.split('select-car-')[1]);
//       document.getElementById('update-name').value = selectedCar.name;
//       document.getElementById('update-color').value = selectedCar.color;
//       document.getElementById('update-name').disabled = false;
//       document.getElementById('update-color').disabled = false;
//       document.getElementById('update-submit').disabled = false;
//     }
//     if (e.target.classList.contains('remove-button')) {
//       const id = +e.target?.dispatchEvent.split('remove-car-')[1];
//       await deleteCar(id);
//       await deleteWinner(id);
//       await updateStateGarage();
//       document.getElementById('garage').innerHTML = renderGarage(); /// Переделать на аппенд
//     }
//     if (e.target.classList.contains('generator-button')) {
//       e.target.disabled - true;
//       const cars = generateRandomCars();
//       await Promise.all(cars.map(async c => await createCar(c)));
//       await updateStateGarage();
//       document.getElementById('garage').innerHTML = renderGarage(); /// Переделать на аппенд
//       e.target.disabled = false;
//     }
//     if (e.target.classList.contains('race-button')) {
//       e.target.disabled = true;
//       const winner = await race(startDriving);
//       await saveWinner(winner);
//       message.innerHTML = `${winner.name} went first ${winner.time}s!`;
//       message.classList.toggle('visible', true);
//       document.getElementById('reset').disabled = false;
//     }
//     if (e.target.classList.contains('prev-button')) {
//       switch(store.view) {
//         case 'garage': {
//           store.carsPage--;
//           await updateStateGarage();
//           document.getElementById('garage').innerHTML = renderGarage();
//           break;
//         }
//         case 'winners': {
//           store.winnersPage--;
//           await updateStateWinners();
//           document.getElementById('winners-view').innerHTML = renderWinners();
//           break;
//         }
//       }
//     }
//     if (e.target.classList.contains('next-button')) {
//       switch(store.view) {
//         case 'garage': {
//           store.carsPage++;
//           await updateStateGarage();
//           document.getElementById('garage').innerHTML = renderGarage();
//           break;
//         }
//         case 'winners': {
//           store.winnersPage++;
//           await updateStateWinners();
//           document.getElementById('winners-view').innerHTML = renderWinners();
//           break;
//         }
//       } 
//     }
//     if (e.target.classList.contains('garage-menu-button')) {
//       document.getElementById('garage-view').style.display = 'block';
//       document.getElementById('winner-view')?.style.display = 'none';
//     }
//     if (e.target.classList.contains('winners-menu-button')) {
//       document.getElementById('winner-view')?.style.display = 'block';
//       document.getElementById('garage-view').style.display = 'none';
//       await updateStateWinners();
//       document.getElementById('winners-view')?.innerHTML = renderWinners();
//     }
//     if (e.target.classList.contains('table-wins')) {
//       setSortOrder('wins');
//     }
//     if (e.target.classList.contains('table-time')) {
//       setSortOrder('time');
//     }
//   });

//   document.getElementById('create')?.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const car = Object.fromEntries(new Map([...e.target].filter(({name}) => !!name).map(({value, name}) => [name, value)));
//       await createCar(car);
//       await updateStateGarage();
//       document.getElementById('garage')?.innerHTML = renderGarage();
//       document.getElementById('create-name').value = '';
//       e.target.disabled = true;
//   });

//   document.getElementById('update')?.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const car = Object.fromEntries(new Map([...e.target].filter(({name}) => !!name).map(({value, name}) => [name, value)));
//       await updateCar(selectedCar.id, car);
//       await updateStateGarage();
//       document.getElementById('garage')?.innerHTML = renderGarage();
//       document.getElementById('create-name').value = '';
//       document.getElementById('update-name').disabled = true;
//       document.getElementById('update-color').disabled = true;
//       document.getElementById('update-submit').disabled = true;
//       document.getElementById('update-submit').disabled = '#fff';
//       selectedCar = null;
//   });

// }


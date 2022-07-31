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
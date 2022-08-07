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

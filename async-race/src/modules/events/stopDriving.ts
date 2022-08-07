export const stopDriving = async (id: number) => {
  const stopButton = document.getElementById(`stop-engine-car-${id}`);
  if (stopButton && stopButton instanceof HTMLButtonElement) {
    stopButton.disabled = true;
    stopButton?.classList.toggle('enabling', true);
  }
};

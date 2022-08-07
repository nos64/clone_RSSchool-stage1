// import store from "./store";
// import { RaceAll } from './types';

import store from './store';
import { AnimationReturn, RaceAll, RaceAllReturn } from './types';

function getPositionAtCenter(element: {
  getBoundingClientRect: () => {
    top: number;
    left: number;
    width: number;
    height: number;
  };
}) {
  const {
    top,
    left,
    width,
    height,
  } = element.getBoundingClientRect();
  return {
    x: left + width / 2,
    y: top + height / 2,
  };
}

// eslint-disable-next-line consistent-return
export function getDistanceBetweenElements(a: HTMLElement, b: HTMLElement) {
  const aPosition = getPositionAtCenter(a);
  const bPosition = getPositionAtCenter(b);
  const distance = Math.hypot(aPosition.x, aPosition.y - bPosition.y);
  return distance;
}

// eslint-disable-next-line max-len
export function animation(car: HTMLElement | null, distance: number, animationTime: number): AnimationReturn {
  let start: number | null = null;
  const state = {
    id: 0,
  };

  function step(timestamp: number) {
    if (!start) {
      start = timestamp;
    }
    if (timestamp && start && car) {
      const time = timestamp - start;
      const passed = Math.round(time * (distance / animationTime));
      car.style.transform = `translateX(${Math.min(passed, distance)}px)`;

      if (passed < distance) {
        state.id = window.requestAnimationFrame(step);
      }
    }
  }
  state.id = window.requestAnimationFrame(step);

  return state;
}

// eslint-disable-next-line max-len
export const raceAll = async (promises: RaceAll[], ids: number[]): Promise<RaceAllReturn> => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { success, id, time }: RaceAll = await Promise.race(promises);

  if (!success) {
    const failedIndex = ids.findIndex((i) => i === id);
    const restPromises = [...promises.slice(0, failedIndex),
      ...promises.slice(failedIndex + 1, promises.length)];
    const restIds = [...ids.slice(0, failedIndex),
      ...ids.slice(failedIndex + 1, ids.length)];

    return raceAll(restPromises, restIds);
  }
  const raceObj = {
    ...store.cars.find((car) => car.id === id),
    time: +(time / 1000).toFixed(2),
  };
  return raceObj;
};

export const race = async (action: (arg0: number) => any) => {
  const promises = store.cars.map(({ id }) => action(id));

  const winner = await raceAll(promises, store.cars.map((car) => car.id));

  return winner;
};

const models = [
  'Roadster',
  'S',
  'X',
  '3',
  'Y',
  'Cybertruck',
  'X5',
  'X7',
  'X3',
  'X6',
  'GT4',
  'FXX',
  '599 GTO',
  'Enzo',
  '458 Italia',
  '250 GTO',
  'Priora',
  '4x4',
  'Rio',
  'Focus',
  'Kalina',
  'Vesta',
  'Spark',
  'Lacetti',
  'Nexia',
  'Matiz',
  'Cobalt',
  'Captiva',
  'A7',
  'A5',
  'A3',
  'A8',
  'TT',
  'Corolla',
  'Camry',
  'RAV4',
  'Impreza',
  'WRX',
  'ES',
  'LS',
  'RX',
  'GX',
  'LX',
  'GS',
  'LC500',
  'Gallardo',
  'Aventador',
  '911',
  'Cayenne',
  'FX37',
];
const names = [
  'Audi',
  'Alfa Romeo',
  'Alpina',
  'Aston Martin',
  'Axon',
  'Ford',
  'Ferrari',
  'Fiat',
  'GAZ',
  'GMC',
  'Honda',
  'Hummer',
  'Hyundai',
  'Infiniti',
  'Isuzu',
  'JAC',
  'Jaguar',
  'Jeep',
  'Kamaz',
  'Lada',
  'Lexus',
  'Lotus',
  'MAN',
  'Maybach',
  'MAZ',
  'Mazda',
  'McLaren',
  'Nissan',
  'Opel',
  'Paccar',
  'Pagani',
  'Pontiac',
  'Porsche',
  'Renault',
  'Å koda',
  'Smart',
  'Subaru',
  'Suzuki',
  'Tesla',
  'Toyota',
  'UAZ',
  'Volvo',
  'ZAZ',
  'XPeng',
  'TVR',
  'Saab',
  'RAM',
  'Chevrolet',
  'Mazzanti',
  'Daewoo',
];

export const getRandomeName = () => {
  const model = models[Math.floor(Math.random() * models.length)];
  const name = names[Math.floor(Math.random() * names.length)];

  return `${model} ${name}`;
};

const getRandomColor = () => {
  const letters = '0123456789abcdef';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const generateRandomCars = (count = 100) => new Array(count).fill(1).map((_) => (
  {
    name: getRandomeName(),
    color: getRandomColor(),
  }
));

import * as noUiSlider from 'noUiSlider';
import 'nouislider/dist/nouislider.css';
import './sliders.scss';
import { data } from '../main/main';
import { filterGoods, resetFiltersBtn } from './controller';

export const minVolume: HTMLInputElement | null = document.querySelector('.volume-min');
export const maxVolume: HTMLInputElement | null = document.querySelector('.volume-max');

export function createVolumeSlider() {
  const volumeSlider: noUiSlider.target | null = document.getElementById('volume-slider');

  if (!volumeSlider || !minVolume || !maxVolume) return;

  const arrVolume: number[] = [];
  data.forEach(item => arrVolume.push(+item.volume));
  arrVolume.sort((a, b) => a - b);

  const inputs = [minVolume, maxVolume];

  if (volumeSlider) {
    noUiSlider.create(volumeSlider, {
      start: [arrVolume[0], arrVolume[arrVolume.length - 1]],
      tooltips: [true, true],
      connect: true,
      range: {
        min: arrVolume[0],
        max: arrVolume[arrVolume.length - 1]
      },
      step: 1,
      format: {
        to: (value: number) => Math.round(value),
        from: (value: string) => Number((value))
      }
    });
  }

  volumeSlider.noUiSlider?.on('update', (values: (string | number)[], handle: number): void => {
    if (values) {
      inputs[handle].value = String(values[handle]);
    }
  });

  volumeSlider.noUiSlider?.on('slide', filterGoods);

  minVolume.addEventListener('change', () => {
    volumeSlider.noUiSlider?.set([minVolume.value, 'null']);
  });

  maxVolume.addEventListener('change', () => {
    volumeSlider.noUiSlider?.set(['null', maxVolume.value]);
  });

  resetFiltersBtn?.addEventListener('click', () => {
    volumeSlider.noUiSlider?.set([arrVolume[0], arrVolume[arrVolume.length - 1]]);
    filterGoods();
  });
}

// export interface Slider {
//   (sliderName: noUiSlider.target | null,
//   sliderClass: string,
//   minRange: HTMLInputElement | null,
//   maxRange: HTMLInputElement | null): void;
// }

// // eslint-disable-next-line max-len, max-len, max-len
// export function createSlider<T> (sliderName: T, sliderClass: string,
// minRange: HTMLInputElement | null, maxRange: HTMLInputElement | null) {
//   const sliderName: noUiSlider.target | null = document.getElementById(sliderClass);

//   if (!sliderName || !minRange || !maxRange) return;

//   const arrVolume: number[] = [];
//   data.forEach(item => arrVolume.push(+item.volume));
//   arrVolume.sort((a, b) => a - b);

//   const inputs = [minRange, maxRange];

//   if (sliderName) {
//     noUiSlider.create(sliderName, {
//       start: [arrVolume[0], arrVolume[arrVolume.length - 1]],
//       tooltips: [true, true],
//       connect: true,
//       range: {
//         min: arrVolume[0],
//         max: arrVolume[arrVolume.length - 1]
//       },
//       step: 1,
//       format: {
//         to: (value: number) => Math.round(value),
//         from: (value: string) => Number((value))
//       }
//     });
//   }

//   sliderName.noUiSlider?.on('update', (values: (string | number)[], handle: number): void => {
//     if (values) {
//       inputs[handle].value = String(values[handle]);
//     }
//   });

//   sliderName.noUiSlider?.on('slide', filterGoods);

//   minRange.addEventListener('change', () => {
//     sliderName.noUiSlider?.set([minRange.value, 'null']);
//   });

//   maxRange.addEventListener('change', () => {
//     sliderName.noUiSlider?.set(['null', maxRange.value]);
//   });

//   resetFiltersBtn?.addEventListener('click', () => {
//     sliderName.noUiSlider?.set([arrVolume[0], arrVolume[arrVolume.length - 1]]);
//     filterGoods();
//   });
// };

// const volumeSlider = createSlider(
//   volumeSlider,
//   'volume-slider',
//   minVolume,
//   maxVolume
// );

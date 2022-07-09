import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

const quantitySlider = (document.getElementById('quantity-slider') as HTMLElement);

noUiSlider.create(quantitySlider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});
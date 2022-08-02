import './index.html';
import './index.scss';
import './modules/header/header';
import { renderPage } from './modules/1_renderPage/renderPage';
import { updateStateGarage, listen } from './modules/ui';

const page = renderPage();
document.body.append(page);
listen();
await updateStateGarage();

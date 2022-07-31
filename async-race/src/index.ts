import './index.html';
import './index.scss';
import './modules/header/header';
import { renderPage } from './modules/1_renderPage/renderPage';

const page = renderPage();
document.body.append(page);

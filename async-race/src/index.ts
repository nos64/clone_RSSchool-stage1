import './index.html';
import './index.scss';
import './modules/header/header';
import { renderPage } from './modules/renderPage/renderPage';

const page = renderPage();
document.body.append(page);

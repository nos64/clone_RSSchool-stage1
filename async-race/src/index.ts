import './index.html';
import './index.scss';
import { updateStateGarage } from './modules/events/updateStateGarwge';
import './modules/page/page';
import { listen } from './modules/events/ui';

listen();
await updateStateGarage();

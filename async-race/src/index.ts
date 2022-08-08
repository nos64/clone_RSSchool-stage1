import './index.html';
import './index.scss';
import { updateStateGarage } from './modules/events/updateStateGarwge';
import './modules/page/page';
import { eventsListener } from './modules/events/eventsListener';

eventsListener();
await updateStateGarage();

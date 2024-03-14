import Router from './Router';
import Chat from './controllers/Chat';

import './index.scss';

const routes = [{
  url: '/',
  controller: Chat
}];

new Router(routes);

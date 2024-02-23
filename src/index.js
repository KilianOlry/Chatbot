import Router from './Router';
import Chat from './controllers/Chat';

import './index.scss';
import './controllers/Home';

const routes = [{
  url: '/chat',
  controller: Chat
}];

new Router(routes);

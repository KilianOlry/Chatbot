import Router from './Router';
import Chat from './controllers/Chat';
import Bots from './controllers/Bots';

import './index.scss';

const routes = [{
  url: '/',
  controller: Chat
},
{
  url: '/bots',
  controller: Bots
}];

new Router(routes);

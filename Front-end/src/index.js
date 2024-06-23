import Router from './Router';
import Chat from './controllers/Chat';
import Bots from './controllers/Bots';
import Contributors from './controllers/Contributors';

import './index.scss';

const routes = [{
  url: '/',
  controller: Chat
},
{
  url: '/bots',
  controller: Bots
},
{
  url: '/contributors',
  controller: Contributors
}];

new Router(routes);

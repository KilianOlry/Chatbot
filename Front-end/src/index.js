import Router from './Router';
import Chat from './controllers/Chat';
import Bots from './controllers/Bots';
import Contributors from './controllers/Contributors';
import Login from './controllers/Login';

import './index.scss';

const routes = [{
  url: '/',
  controller: Login
},
{
  url: '/chat',
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

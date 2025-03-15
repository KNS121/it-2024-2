import { mount, el } from '../node_modules/redom/dist/redom.es';
import LoginPage from './page/LoginPage';

const root = document.getElementById('app');
mount(root, new LoginPage());

//aimport { el, mount } from 'redom';

// const test = el('h1', 'Hello World!');
// mount(document.getElementById('app'), test);
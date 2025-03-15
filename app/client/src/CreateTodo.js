import { mount, el } from '../node_modules/redom/dist/redom.es';
import CreateTodoPage from './page/CreateTodoPage';

const root = document.getElementById('app');
mount(root, new CreateTodoPage());
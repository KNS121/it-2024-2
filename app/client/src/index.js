import { mount, el } from '../node_modules/redom/dist/redom.es';
import HomePage from './page/HomePage';

// const root = document.getElementById('app');
// mount(root, new HomePage());
console.log('RE:DOM version:', redom.version);
console.log('Старт приложения');

try {
  const root = document.getElementById('app');
  console.log('Root элемент:', root);
  
  const page = new HomePage();
  console.log('Экземпляр HomePage:', page);
  console.log('Сгенерированный HTML:', page.el);
  
  mount(root, page);
  console.log('Монтирование завершено');
} catch (error) {
  console.error('Фатальная ошибка:', error);
}
import { mount, el } from '../../node_modules/redom/dist/redom.es';

export default class ButtonLink {
    constructor(text, href, variant = 'primary', size = '') {
      // Генерация классов с валидацией
      const baseClass = 'btn';
      const variantClass = variant ? `btn-${variant}` : '';
      const sizeClass = size ? `${size}` : '';
      
      const classes = [baseClass, variantClass, sizeClass]
        .filter(c => c && !/\s/.test(c)) // Фильтруем пустые и с пробелами
        .join(' ')
        .replace(/\s+/g, ' ') // Удаляем двойные пробелы
        .trim();
  
      console.log('ButtonLink classes:', classes); // Для отладки
  
      this.el = el('a', { 
        class: classes,
        href: href,
        role: 'button'
      }, text);
    }
  }
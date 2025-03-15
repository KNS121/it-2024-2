import { mount, el } from '../../node_modules/redom/dist/redom.es';

export default class Button {
  constructor({ 
    text, 
    type = 'button', 
    variant = 'primary', 
    onClick 
  }) {
    this.el = el('button.btn', {
      class: `btn-${variant}`,
      type
    }, text);
    
    if (onClick) {
      this.el.addEventListener('click', onClick);
    }
  }
}
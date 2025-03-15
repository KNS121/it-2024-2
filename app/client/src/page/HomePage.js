import { mount, el } from '../../node_modules/redom/dist/redom.es';
import ButtonLink from '../atom/ButtonLink';

export default class HomePage {
  constructor() {
    
    this.loginBtn = new ButtonLink('Вход', 'login.html', 'primary', 'btn-lg');
    this.registerBtn = new ButtonLink('Регистрация', 'register.html', 'secondary', 'btn-lg');
    
    console.log('Элементы кнопок:', 
        this.loginBtn?.el, 
        this.registerBtn?.el
      ); 

    this.el = el('.d-flex.justify-content-center.align-items-center.vh-100',
      el('.text-center',
        el('h1.text-primary', 'Добро пожаловать'),
        el('.d-grid.gap-2.d-md-block',
          this.loginBtn.el,
          this.registerBtn.el
        )
      )
    );

    
  }

  createLayout() {
    // Проверка элементов перед использованием
    if (!this.loginBtn?.el || !this.registerBtn?.el) {
      throw new Error('Не удалось создать кнопки');
    }
  
    return el('.d-flex.justify-content-center.align-items-center.vh-100',
      el('.text-center',
        el('h1.text-primary.mb-4', 'Добро пожаловать'),
        el('.d-grid.gap-2.d-md-block',
          this.loginBtn.el,
          this.registerBtn.el
        )
      )
    );
  }
}
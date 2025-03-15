import { mount, el } from '../../node_modules/redom/dist/redom.es';
import AuthForm from '../widget/AuthForm';

export default class LoginPage {
  constructor() {
    this.form = new AuthForm({ isLogin: true });
    
    this.el = el('.container.d-flex.justify-content-center.align-items-center.vh-100',
      el('.card.p-4', { style: 'max-width: 400px' },
        el('h2.card-title.text-center.mb-4', 'Вход'),
        this.form.el
      )
    );
    
    this._initEvents();

    console.log('LoginPage element:', this.el);
  }
  
  _initEvents() {
    this.form.el.addEventListener('submit', e => {
      e.preventDefault();
      if (this.form.validate()) {
        window.location.href = 'doing_list.html';
      }
    });
  }
}
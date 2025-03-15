import { el } from 'redom';
import AuthForm from '../widget/AuthForm';

export default class RegisterPage {
  constructor() {
    this.form = new AuthForm({ isLogin: false });
    
    this.el = el('.container.d-flex.justify-content-center.align-items-center.vh-100',
      el('.card.bg-light.p-4', { style: 'max-width: 400px' },
        el('h2.card-title.text-center.mb-4', 'Регистрация'),
        this.form.el
      )
    );
    
    this._initEvents();
  }
  
  _initEvents() {
    this.form.el.addEventListener('submit', e => {
      e.preventDefault();
      if (this.form.validate()) {
        window.location.href = 'index.html';
      }
    });
  }
}
import { mount, el } from '../../node_modules/redom/dist/redom.es';
import Input from '../atom/Input';

export default class AuthForm {
  constructor({ isLogin = true }) {
    this.isLogin = isLogin;
    
    this.email = new Input({
      type: 'email',
      label: 'Email',
      required: true,
      invalidFeedback: 'Введите корректный email'
    });
    
    this.password = new Input({
      type: 'password',
      label: 'Пароль',
      required: true,
      invalidFeedback: 'Введите пароль'
    });
    
    if (!isLogin) {
      this.confirmPassword = new Input({
        type: 'password',
        label: 'Подтвердите пароль',
        required: true,
        invalidFeedback: 'Пароли не совпадают'
      });
    }
    
    this.submitButton = el('button.btn.btn-primary.w-100', 
      { type: 'submit' },
      isLogin ? 'Войти' : 'Зарегистрироваться'
    );
    
    this.el = this._render();
  }
  
  _render() {
    const elements = [
      this.email.el,
      this.password.el,
      !this.isLogin ? this.confirmPassword?.el : null,
      el('.d-grid.mt-4', this.submitButton)
    ].filter(Boolean);
    
    return el('form', elements);
  }
  
  validate() {
    const baseValid = this.email.validate() && this.password.validate();
    
    if (!this.isLogin) {
      const passMatch = this.password.value === this.confirmPassword.value;
      this.confirmPassword.input.classList.toggle('is-invalid', !passMatch);
      return baseValid && passMatch;
    }
    
    return baseValid;
  }
}
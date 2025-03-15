import { el } from 'redom';
import ButtonLink from '../atom/ButtonLink';

export default class HomePage {
  constructor() {
    this.el = el('.bg-light.d-flex.justify-content-center.align-items-center.vh-100',
      el('.text-center',
        el('h1.text-primary.mb-4', 'Добро пожаловать'),
        el('.d-grid.gap-2.d-md-block',
          new ButtonLink('Вход', 'login.html', 'primary', 'btn-lg').el,
          new ButtonLink('Регистрация', 'register.html', 'secondary', 'btn-lg').el
        )
      )
    );
  }
}
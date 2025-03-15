import { mount, el } from '../../node_modules/redom/dist/redom.es';
import Button from '../atom/Button';
import CreateTodoForm from '../widget/CreateTodoForm';

export default class CreateTodoPage {
  constructor() {
    this.form = new CreateTodoForm();
    this.logoutButton = new Button({
      text: 'Выход',
      variant: 'outline-danger',
      onClick: () => window.location.href = 'login.html'
    });

    this.el = el('.container.mt-5',
      el('.d-flex.justify-content-end.mb-3', this.logoutButton.el),
      el('h2.text-center.mb-4.text-primary', 'Создать дело'),
      this.form.el
    );
  }
}
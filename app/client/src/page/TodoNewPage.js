import { el } from 'redom';
import TodoForm from '../widget/TodoForm';

export default class TodoNewPage {
  constructor() {
    this.form = new TodoForm();
    
    this.el = el('.container.mt-5',
      el('.d-flex.justify-content-end.mb-3',
        el('button.btn.btn-outline-danger', 'Выход')
      ),
      el('h2.text-center.mb-4.text-primary', 'Создать дело'),
      this.form.el
    );
    
    this._initEvents();
  }
  
  _initEvents() {
    this.form.el.addEventListener('submit', e => {
      e.preventDefault();
      if (this.form.validate()) {
        window.location.href = 'doing_list.html';
      }
    });
    
    this.el.querySelector('.btn-secondary').addEventListener('click', () => {
      window.location.href = 'doing_list.html';
    });
  }
}
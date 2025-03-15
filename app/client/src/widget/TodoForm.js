import { el } from 'redom';
import Input from '../atom/Input';
import RadioGroup from 'src/atom/RadioGroup';

export default class TodoForm {
  constructor() {
    this.title = new Input({
      label: 'Название',
      required: true,
      invalidFeedback: 'Введите название дела'
    });
    
    this.dueDate = new Input({
      type: 'date',
      label: 'Дата окончания',
      required: true,
      invalidFeedback: 'Выберите дату'
    });
    
    this.importance = new RadioGroup({
      label: 'Важность',
      name: 'importance',
      options: [
        { value: 'high', label: 'Высокой Важности' },
        { value: 'medium', label: 'Средней Важности' },
        { value: 'low', label: 'Низкой Важности' }
      ]
    });
    
    this.el = this._render();
  }
  
  _render() {
    return el('form#createTodoForm.bg-light.p-4.rounded.shadow',
      this.title.el,
      this.dueDate.el,
      this.importance.el,
      el('.d-flex.gap-2',
        el('button.btn.btn-primary', { type: 'submit' }, 'Сохранить'),
        el('button.btn.btn-secondary', { type: 'button' }, 'Отмена')
      )
    );
  }
  
  validate() {
    return this.title.validate() && this.dueDate.validate();
  }
}
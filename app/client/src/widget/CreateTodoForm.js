import { mount, el } from '../../node_modules/redom/dist/redom.es';
import Input from '../atom/Input';
import RadioGroup from '../atom/RadioGroup';
import Button from '../atom/Button';

export default class CreateTodoForm {
  constructor() {
    this.titleInput = new Input({
      type: 'text',
      label: 'Название',
      required: true,
      invalidFeedback: 'Пожалуйста, введите название дела.'
    });

    this.dateInput = new Input({
      type: 'date',
      label: 'Дата окончания',
      required: true,
      invalidFeedback: 'Пожалуйста, выберите дату окончания.'
    });

    this.importanceRadio = new RadioGroup({
      name: 'importance',
      options: [
        { value: 'high', label: 'Высокой Важности' },
        { value: 'medium', label: 'Средней Важности' },
        { value: 'low', label: 'Низкой Важности' }
      ]
    });

    this.submitButton = new Button({
      text: 'Сохранить',
      type: 'submit',
      variant: 'primary'
    });

    this.cancelButton = new Button({
      text: 'Отмена',
      variant: 'secondary',
      onClick: () => window.location.href = 'doing_list.html'
    });

    this.el = el('form#createTodoForm', { novalidate: true },
      this.titleInput.el,
      this.dateInput.el,
      this.importanceRadio.el,
      el('.d-flex.gap-2',
        this.submitButton.el,
        this.cancelButton.el
      )
    );

    this.el.addEventListener('submit', e => this._handleSubmit(e));
  }

  _handleSubmit(e) {
    e.preventDefault();
    if (this.validate()) {
      window.location.href = 'doing_list.html';
    }
  }

  validate() {
    return [
      this.titleInput.validate(),
      this.dateInput.validate(),
      this.importanceRadio.validate()
    ].every(valid => valid);
  }
}
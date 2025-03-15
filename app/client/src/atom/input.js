import { mount, el } from '../../node_modules/redom/dist/redom.es';


export default class Input {
  constructor({ 
    type = 'text',
    label = '',
    required = false,
    invalidFeedback = ''
  }) {
    this.input = el('input.form-control', {
      type,
      required
    });
    
    this.el = el('.mb-3',
      el('label.form-label', label),
      this.input,
      el('.invalid-feedback', invalidFeedback)
    );
  }

  validate() {
    const isValid = this.input.value.trim() !== '';
    this.input.classList.toggle('is-invalid', !isValid);
    return isValid;
  }

  get value() {
    return this.input.value;
  }
}
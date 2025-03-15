import { mount, el } from '../../node_modules/redom/dist/redom.es';

export default class RadioGroup {
  constructor({ name, options }) {
    this.name = name;
    this.options = options;
    
    this.radios = options.map(option => 
      el('.form-check',
        el('input.form-check-input', {
          type: 'radio',
          name,
          id: `${name}-${option.value}`,
          value: option.value
        }),
        el('label.form-check-label', {
          for: `${name}-${option.value}`
        }, option.label)
      )
    );
    
    this.el = el('.mb-3', 
      el('label.form-label', 'Важность'),
      ...this.radios,
      el('.invalid-feedback', 'Пожалуйста, выберите важность.')
    );
  }

  validate() {
    const isValid = this.radios.some(radio => 
      radio.querySelector('input').checked
    );
    this.el.querySelectorAll('input').forEach(input => 
      input.classList.toggle('is-invalid', !isValid)
    );
    return isValid;
  }

  get value() {
    const checked = this.el.querySelector('input:checked');
    return checked ? checked.value : null;
  }
}
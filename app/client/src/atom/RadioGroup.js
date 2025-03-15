import { el } from 'redom';

export default class RadioGroup {
  constructor({ label = '', name = 'radio', options = [] }) {
    this.el = el('.mb-3',
      el('label.form-label', label),
      options.map(opt => 
        el('.form-check',
          el('input.form-check-input', {
            type: 'radio',
            name: name,
            id: opt.value,
            value: opt.value
          }),
          el('label.form-check-label', { for: opt.value }, opt.label)
        )
      )
    );
  }
}
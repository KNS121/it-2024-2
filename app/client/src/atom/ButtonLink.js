import { mount, el } from 'redom';

export default class ButtonLink {
  constructor(text, href, variant = 'primary', size = '') {
    this.el = el('a.btn', {
      class: `btn-${variant} ${size}`,
      href: href
    }, text);
  }
}
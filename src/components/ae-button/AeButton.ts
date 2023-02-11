import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('ae-button')
export class AeButton extends LitElement {
  @property()
  version = 'STARTING';

  render() {
    return html`<button></button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ae-button': AeButton;
  }
}

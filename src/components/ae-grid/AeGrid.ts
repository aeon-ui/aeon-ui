import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Ae } from '../../lib/Ae';

@customElement('ae-grid')
export class AeGrid extends Ae {
  static styles = [
    Ae.styles,
    css`
      :host {
        display: grid;
      }
    `,
  ];

  protected render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ae-grid': AeGrid;
  }
}

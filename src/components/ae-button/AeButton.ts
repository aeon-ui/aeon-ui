import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Ae } from '../../lib/Ae';

@customElement('ae-button')
export class AeButton extends Ae {
  static styles = [
    Ae.styles,
    css`
      button {
        border-radius: 5px;
        padding: 0.5rem 1rem;
        border: none;
        cursor: pointer;
      }
    `,
  ];

  protected render() {
    return html`
      <style>
        ${this.defaultStyles()}
      </style>
      <button>
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ae-button': AeButton;
  }
}

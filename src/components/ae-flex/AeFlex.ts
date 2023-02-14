import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Ae } from '../../lib/Ae';

@customElement('ae-flex')
export class AeFlex extends Ae {
  static styles = [
    Ae.styles,
    css`
      :host {
        display: flex;
      }
    `,
  ];

  protected render() {
    return html`
      <style>
        ${this.inheritStyles()}
      </style>
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ae-flex': AeFlex;
  }
}

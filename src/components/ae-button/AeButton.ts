import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Ae } from '../../lib/Ae';

@customElement('ae-button')
export class AeButton extends Ae {
  static styles = [
    Ae.styles,
    css`
      :host {
        /* may add background to Ae class */
        background: none;
      }

      button {
        border-radius: 5px;
        padding: 0.5rem 1rem;
        border: none;
        cursor: pointer;
      }
    `,
  ];

  // dynamic property styles
  @property() background: string;
  @property() bg: string;
  @property() hover: string;

  // parse given properties
  dynamicStyles(): string {
    // TODO: refactor for cleaner code quality
    let hoverStyle = `button:hover{background: ${this.hover || '#d0d0d7'}}`;
    const stylesArr: string[] = [];
    if (this.background || this.bg) {
      stylesArr.push(`background: ${this.background || this.bg};`);
      if (!this.hover) hoverStyle = '';
    }

    return `button{${stylesArr.join('')}} ${hoverStyle}`;
  }

  protected render() {
    return html`
      <style>
        ${this.inheritStyles()}
        ${this.dynamicStyles()}
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

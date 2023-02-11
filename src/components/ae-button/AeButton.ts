import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('ae-button')
export class AeButton extends LitElement {
  static styles = css`
    * {
      box-sizing: border-box;
    }

    :host {
      display: block;
    }

    button {
      border-radius: 5px;
      padding: 0.5rem 1rem;
      border: none;
      cursor: pointer;
    }
  `;

  render() {
    return html`
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

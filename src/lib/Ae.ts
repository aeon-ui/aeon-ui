import { CSSResultGroup, LitElement, css } from 'lit';
import { property } from 'lit/decorators.js';

export class Ae extends LitElement {
  // static styles
  static styles = css`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    :host {
      display: block;
    }

    :host > * {
      width: 100%;
      height: 100%;
    }
  ` as CSSResultGroup;

  // dynamic property styles
  @property() width: string;
  @property() w: string;
  @property() height: string;
  @property() h: string;

  defaultStyles() {
    return `
      :host {
        width: ${this.w || this.width};
        height: ${this.h || this.height};
      }
    `;
  }

  constructor() {
    super();
  }
}

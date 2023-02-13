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
  @property() margin: string;
  @property() m: string;
  @property() padding: string;
  @property() p: string;

  // parse given properties
  inheritStyles(): string {
    // TODO: find cleaner way to parse props
    const stylesArr: string[] = [];
    if (this.width || this.w) stylesArr.push(`width: ${this.width || this.w};`);
    if (this.height || this.h) stylesArr.push(`height: ${this.height || this.h};`);
    if (this.margin || this.m) stylesArr.push(`margin: ${this.margin || this.m};`);
    if (this.padding || this.p) stylesArr.push(`padding: ${this.padding || this.p};`);

    return `:host{${stylesArr.join('')}}`;
  }

  constructor() {
    super();
  }
}

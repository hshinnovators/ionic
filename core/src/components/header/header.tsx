import { Component, ComponentInterface, Prop } from '@stencil/core';

import { Mode } from '../../interface';

@Component({
  tag: 'ion-header',
  styleUrls: {
    ios: 'header.ios.scss',
    md: 'header.md.scss'
  }
})
export class Header implements ComponentInterface {

  /**
   * The mode determines which platform styles to use.
   */
  @Prop() mode!: Mode;

  /**
   * If `true`, the header will be translucent. Only applies to `ios` mode.
   * Note: In order to scroll content behind the header, the `fullscreen`
   * attribute needs to be set on the content.
   */
  @Prop() translucent = false;

  hostData() {
    return {
      class: {
        [`${this.mode}`]: true,

        // Used internally for styling
        [`header-${this.mode}`]: true,

        [`header-translucent`]: this.translucent,
        [`header-translucent-${this.mode}`]: this.translucent,
      }
    };
  }
}

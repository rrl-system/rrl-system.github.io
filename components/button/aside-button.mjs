import { BaseElement, html, css } from '../../js/base-element.mjs';

import '../icon/icon.mjs'

customElements.define('aside-button', class AsideButton extends BaseElement {
    static get properties() {
        return {
            _useInfo: { type: Boolean, default: true },
            iconName: { type: String, default: '', attribute: 'icon-name'},
            size: { type: Number, default: 24 },
        }
    }

    static get styles() {
        return css`
            :host {
                display: inline-block;
                vertical-align: middle;
                margin: 1px;
                user-select: none;
            }
            :host([active]) {
                color: red;
            }
            .btn {
                display: flex;
                align-items: center;
                cursor: pointer;
            }
            :host([active]) .btn:hover {
                filter: brightness(120%);
            }
            :host([active]) .btn:active {
                filter: brightness(80%);
            }
            .btn:hover {
                color: red;
            }
            .btn:active {
                filter: brightness(80%);
            }
        `;
    }
    get #icon() {
        return html`<simple-icon icon-name=${this.iconName} size="${this.size}"></simple-icon>`;
    }
    render() {
        return html`
            <div class="btn"  tabindex="0" >
                <simple-icon icon-name=${this.iconName} size=${this.size}></simple-icon>
            </div>
        `;
    }
});

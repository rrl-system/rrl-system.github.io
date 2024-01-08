import { BaseElement, html, css } from '../../js/base-element.mjs';

import '../icon/icon.mjs'

customElements.define('aside-button', class AsideButton extends BaseElement {
    static get properties() {
        return {
            _useInfo: { type: Boolean, default: true },
            name: { type: String, default: '', isIcon: true },
            back: { type: String, default: '#fdfdfd' },
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
            .btn {
                display: flex;
                align-items: center;
                cursor: pointer;
            }
            .btn:hover {
               fill: red;
            }
            .btn:active {
                transition: .1s;
                filter: brightness(85%);
            }
        `;
    }
    get #icon() {
        return html`<simple-icon icon-name="${this.name}" size="${this.size}"></simple-icon>`;
    }
    render() {
        return html`
            <div class="btn"  tabindex="0">
                ${this.#icon}
            </div>
        `;
    }
});

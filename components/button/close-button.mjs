import { BaseElement, html, css } from '../../js/base-element.mjs';

import '../icon/icon.mjs'

customElements.define('close-button', class CloseButton extends BaseElement {
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
            .rrl-btn {
                display: flex;
                align-items: center;
                cursor: pointer;
            }
            .rrl-btn:hover {
               fill: red;
            }
            .rrl-btn:active {
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
            <div id="rrl-btn" class="rrl-btn"  tabindex="0">
                ${this.#icon}
            </div>
        `;
    }
});

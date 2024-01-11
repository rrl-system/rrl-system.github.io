import { BaseElement, html, css, nothing } from '../../js/base-element.mjs';

import '../icon/icon.mjs'

customElements.define('link-button', class LinkButton extends BaseElement {
    static get properties() {
        return {
            name: { type: String, default: ''},
            href: { type: String, default: '' },
            target: { type: String, default: '' },
            title: { type: String, default: '' },
        }
    }

    static get styles() {
        return [
            BaseElement.styles,
            css`
                :host {
                    display: inline-block;
                    vertical-align: middle;
                    background-color: var(--background-green);
                    padding: 10px 30px;
                    cursor: pointer;
                }
                host(:hover) {
                    background-color: red;
                    filter: brightness(2);
                }

                a {
                    display: inline-block;
                    text-decoration: none;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    white-space: nowrap;
                    font-weight: 600;
                    color: var(--native-color);
                }
            `
        ];
    }

    firstUpdated() {
        super.firstUpdated();
    }

    render() {
        return html`
            <a href=${this.href || nothing} target=${this.target || nothing} title=${this.title || nothing}>
                <slot></slot>
            </a>
        `;
    }
});

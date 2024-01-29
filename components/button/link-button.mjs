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
                    position: relative;
                    padding: 10px 30px;
                    cursor: pointer;
                }
                :host(:hover) {
                    background: orange;
                }
                :host(:hover) a::after,
                :host(:hover) a::before,
                {
                    filter: brightness(2);
                }
                :host(::before) {
                    content: '';
                    position: absolute; /* Фиксируем на одном месте */
                    left: 0; right: 0; /* Вся ширин */
                    top: 0; bottom: 0; /* Вся высота */
                    z-index: -1; /* Фон ниже текста */
                    /* Параметры фона */
                    background-color: var(--background-green);
                })
                // host(:hover) {
                //     background-color: blue;
                //     background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),
                //     filter: brightness(2);
                // }
                // a::before {
                //     content: '';
                //     position: absolute; /* Фиксируем на одном месте */
                //     left: 0; right: 0; /* Вся ширин */
                //     top: 0; bottom: 0; /* Вся высота */
                //     z-index: -1; /* Фон ниже текста */
                //     /* Параметры фона */
                //     background-color: var(--background-green);
                // }
                a {
                    color: white;
                    &::after {
                        display: inline-block;
                        content: '';
                        background-color: red;
                        position: absolute;
                        z-index: -1;
                        left: 0; right: 0; /* Вся ширин */
                        top: 0; bottom: 0; /* Вся высота */
                    }
                    &:hover {
                        &::after {
                            filter: brightness(200%);
                        }
                    }
                  
                }
                // a::after {
                //     display: inline-block;
                //     content: '';
                //     background-color: red;
                //     position: absolute;
                //     z-index: -1;
                //     left: 0; right: 0; /* Вся ширин */
                //     top: 0; bottom: 0; /* Вся высота */
                // }
                // a:hover::after {
                //     filter: brightness(200%);
                // }
                // a:hover {
                //     &::after {
                //         filter: brightness(200%);
                //     }
                // }


            `
        ];
    }

    firstUpdated() {
        super.firstUpdated();
    }

    render() {
        return html`
            <style>
                :host {
                    background: yellow;
                }
                // :host(:hover) {
                //     background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5));
                // }
                // :host(:before) {
                //     content: '';
                //     position: absolute; /* Фиксируем на одном месте */
                //     left: 0; right: 0; /* Вся ширин */
                //     top: 0; bottom: 0; /* Вся высота */
                //     z-index: -1; /* Фон ниже текста */
                //     /* Параметры фона */
                //     background-color: var(--background-green);
                // }
            </style>
            <a href="#">Привет</a>
            // <a href=${this.href || nothing} target=${this.target || nothing} title=${this.title || nothing}>
            //     <slot></slot>
            // </a>
        `;
    }
});

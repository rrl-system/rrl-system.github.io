import { BaseElement, html, css } from '../base-element.mjs'

import '../../components/buttons/social-button.mjs';

class RrlSystemFooter extends BaseElement {
    static get properties() {
        return {
            version: { type: String, default: '1.0.0', save: true },
        }
    }

    get title() {
        return 'Anastasia Mudrova';
    }

    static get styles() {
        return [
            BaseElement.styles,
            css`
                :host {
                    padding: 20px 0;
                    height: 100px;
                    background-color: var(--footer-background-color);
                }

                .copyright {
                    display: flex;
                }

                p {
                    text-align: center;
                    margin: 0;
                }

                a {
                    text-decoration: none;
                    text-wrap: nowrap;
                }

                footer {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                }

                div {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 10px;
                }

                div a {
                    display: flex;
                    align-items: center;
                }

                .logo {
                    border-radius: 50%;
                    color: var(--nav-item-active-color);
                    background-color: var(--native-background-color) !important;
                    line-height: 0;
                    cursor: pointer;
                }

                .logo > img {
                    object-fit: contain;
                    margin: 20px;
                    width: 80px;
                    height: 80px;
                }

                h3 {
                    margin: 0;
                    font-family: var(--ubuntu-font-family);
                    font-size: 18px;
                    line-height: 24px;
                }

                @media (max-width: 300px) {
                    .logo {
                        display: none;
                    }
                }
            `
        ]
    }

    constructor() {
        super();
        this.version = "1.0.0";
    }

    logo() {
        return html`
            <div class="logo" @click="${() => scroll(0,0)}">
                <img src="images/favicon.svg" alt="" />
            </div>
        `
    }

    social() {
        return html`
            <div>
                <a href="https://t.me/moodrila"><img src="/images/telegram.svg" alt=""/></a>
                <a href="https://vk.com/moodrila"><img src="/images/vk.svg" alt=""/></a>
                <a href="mailto:a.mudrova0205@stud.rsu.edu.ru"><img src="/images/mail.svg" alt=""/></a>
            </div>
        `;
    }

    render() {
        return html`
            <footer>
                <p>©Mudrova Anastasia Aleksandrovna</p>
                ${this.social()}
            </footer>
        `;
    }

    firstUpdated() {
        super.firstUpdated();
    }

}

customElements.define("rrl-system-footer", RrlSystemFooter);
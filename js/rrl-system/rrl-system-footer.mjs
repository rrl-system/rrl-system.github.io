import { RrlElement, html, css } from '../rrl-element.mjs'

import '../../components/button/social-button.mjs';

class RrlSystemFooter extends RrlElement {
    static get properties() {
        return {
            version: { type: String, default: '1.0.0', save: true },
        }
    }

    get title() {
        return 'Vladislav Antoshkin';
    }

    static get styles() {
        return [
            css`
                :host {
                    padding: 0 10px;
                    background-color: var(--footer-background-color);
                }

                * {
                    box-sizing: border-box;
                    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }

                .copyright {
                    display: flex;
                }

                p {
                    text-align: center;
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
                }

                .social-icons {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 10px;
                }

                .social-icons a {
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
            <div class="social-icons">
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
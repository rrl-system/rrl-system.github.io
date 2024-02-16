import { BaseElement, html, css } from '../../../base-element.mjs'

import '../../../../components/buttons/link-button.mjs'

class HomeSection1 extends BaseElement {
    static get properties() {
        return {
            version: { type: String, default: '1.0.0', save: true },
        }
    }

    static get styles() {
        return [
            BaseElement.styles,
            css`
                :host {
                    display: flex;
                    height: 100%;
                    overflow: hidden;
                    gap: 20px;
                }

                .left-layout {
                    display: flex;
                    flex-basis: 50%;
                    align-items: center;
                }

                img {
                    width: 100%;
                }

                .right-layout {
                    display: flex;
                    flex-basis: 50%;
                    align-items: center;
                }

                h1 {
                    font-size: 3.4375rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    margin: 20px 0 0;
                }

                h2 {
                    font-weight: 300;
                    line-height: 1.2;
                    font-size: 1.25rem;
                }

                p {
                    font-size: 1.25rem;
                    margin: 20px 207px 20px 0;
                    overflow-wrap: break-word;
                }

                a {
                    display: inline-block;
                    text-transform: uppercase;
                    color: var(--native-color);
                    margin: 20px auto 0 0;
                    background-color: var(--background-green);
                    letter-spacing: 1px;
                    text-decoration: none;
                    white-space: nowrap;
                    padding: 10px 30px;
                    border-radius: 0;
                    font-weight: 600;
                }

                a:hover {
                    background-color: var(--button-hover-color);
                }
                // link-button {
                //     background: red;
                // }
            `
        ]
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <div class="left-layout">
                <img src="/images/home/robot.png" alt="robot">
            </div>
            <div class="right-layout">
                <div>
                    <h2>Innovative programming</h2>
                    <h1>Reinforcement<br>learning<br>systems</h1>
                    <p>The future is already here. Artificial intelligence never sleeps and never gets bored</p>
                    <link-button href="#my-pride">Learn more</link-button>
                </div>
            </div>
        `;
    }

    firstUpdated() {
        super.firstUpdated();
    }
}

customElements.define("home-section-1", HomeSection1);
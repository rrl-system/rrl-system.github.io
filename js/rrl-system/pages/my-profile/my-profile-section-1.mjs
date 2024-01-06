import { BaseElement, html, css } from '../../../base-element.mjs'

class MyProfileSection1 extends BaseElement {
        static get properties() {
            return {
                version: { type: String, default: '1.0.0', save: true },
            }
        }

        static get styles() {
            return [
                css`
                    :host {
                        display: flex;
                        padding-top: 50px;
                        padding-bottom: 50px;
                        gap: 20px;
                        background: linear-gradient(180deg, var(--header-background-color) 0%, var(--gradient-background-color) 100%);
                    }

                    * {
                        box-sizing: border-box;
                        -webkit-touch-callout: none;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        user-select: none;
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
                        <p>The future is already here. Аrtificial intelligence never sleeps and never gets bored</p>
                        <a href="#my-pride">Learn more</a>
                    </div>
                </div>
            `;
        }

        firstUpdated() {
            super.firstUpdated();
        }
}

customElements.define("my-profile-section-1", MyProfileSection1);
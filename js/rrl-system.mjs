import { RrlElement, html, css } from './rrl-element.mjs'

import './rrl-system-header.mjs';
import './rrl-system-footer.mjs';

import './pages/home/home.mjs'
// import './pages/about-me/about-me.mjs'

class RrlSystem extends RrlElement {
    static get properties() {
        return {
            version: { type: String, default: '1.0.0', save: true, category: 'settings' },

        }
    }

    static get styles() {
        return [
            css`
                :host {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    position: relative;
                    height: 100%;
                    box-sizing: border-box;
                    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
            `
        ]
    }

    constructor() {
        super();
        this.version = "1.0.0";
        addEventListener("hashchange", () => {this.requestUpdate()});
    }

    get pageName() {
        return location.hash.startsWith('#') ? location.hash.slice(1) : location.hash || 'home-page';
    }

    render() {
        const page = document.createElement(this.pageName);
        return html`
            <rrl-system-header active-page="${this.pageName}"></rrl-system-header>
            <main>
                ${page}
            </main>
            <rrl-system-footer></rrl-system-footer>
        `;
    }

    firstUpdated() {
        super.firstUpdated();
    }
}

customElements.define("rrl-system", RrlSystem);
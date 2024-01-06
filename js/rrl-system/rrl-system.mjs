import { BaseElement, html, css } from '../base-element.mjs'

import './rrl-system-header.mjs';
import './rrl-system-footer.mjs';
import './rrl-system-left-aside.mjs';

import './pages/home-page/home-page.mjs'

class RrlSystem extends BaseElement {
    static get properties() {
        return {
            version: { type: String, default: '1.0.0', save: true, category: 'settings' },
            successUserIn: { type: Boolean, default: true, save: false, attribute: 'is-auth', reflect: true},
        }
    }

    static get styles() {
        return [
            BaseElement.styles,
            css`
                :host {
                    height: 1vh;
                    display: grid;
                    grid-template-columns: 0px 1fr;
                    grid-template-areas:
                      "header header"
                      "aside content"
                      "footer footer";

                    // flex-direction: column;
                    // justify-content: center;
                    position: relative;
                }
                :host([is-auth]) {
                    grid-template-columns: 50px 3fr;
                }
                main {
                    grid-area: content;
                    height: calc(100vh - 200px);
                    background: linear-gradient(180deg, var(--header-background-color) 0%, var(--gradient-background-color) 100%);
                    box-sizing: border-box;
                }
                rrl-system-header {
                    grid-area: header;
                }
                rrl-system-aside {
                    grid-area: aside;
                }
                rrl-system-footer {
                    grid-area: footer;
                }
            `
        ]
    }

    constructor() {
        super();
        this.version = "1.0.0";
        addEventListener("hashchange", () => {this.requestUpdate()});
        // this.lazyLoad = {};
        // this.lazyLoad[Symbol.iterator] = function* () {
        //     var index = 0;
        //     while (true) {
        //         console.log(index);
        //         yield index++;
        //     }
        // }
    }

    get pageName() {
        return location.hash.startsWith('#') ? location.hash.slice(1) : location.hash || 'home-page';
    }

    * lazyLoad() {
        // const lazyPages=['about-me', 'my-pride', 'my-stack', 'catch-me'];
        const lazyPages=[];
        for (const pageName of lazyPages) {
            import(`./pages/${pageName}/${pageName}.mjs`);
            yield pageName;
        }
    }

    isAuth() {
        if (localStorage.getItem('rememberMe')) {
            return localStorage.getItem('accessUserToken')
        }
        else {
            return sessionStorage.getItem('accessUserToken')
        }
    }

    leftAside() {
        return html`<rrl-system-left-aside></rrl-system-left-aside>`
    }

    render() {
        // const pagesPath = isAuth ? './pages/profile' : './pages'
        const pagesRootPath = './pages'
        if (!window.customElements.get(this.pageName)) {
            import(`./pages/${this.pageName}/${this.pageName}.mjs`);
        }
        const page = document.createElement(this.pageName);
        return html`
            <rrl-system-header active-page="${this.pageName}"></rrl-system-header>
            ${this.successUserIn ? this.leftAside() : ""}
            <main>
                ${page}
            </main>
            <rrl-system-footer></rrl-system-footer>
        `;
    }

    firstUpdated() {
        super.firstUpdated();
        const lazyIterator = this.lazyLoad();
        setInterval(() => lazyIterator.next(), 2000);
    }
}

customElements.define("rrl-system", RrlSystem);
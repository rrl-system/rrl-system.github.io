import { RrlElement, html, css } from '../rrl-element.mjs'

import './rrl-system-header.mjs';
import './rrl-system-footer.mjs';

import './pages/home-page/home-page.mjs'

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

    render() {
        // const pagesPath = isAuth ? './pages/profile' : './pages'
        const pagesRootPath = './pages'
        if (!window.customElements.get(this.pageName)) {
            import(`./pages/${this.pageName}/${this.pageName}.mjs`);
        }
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
        const lazyIterator = this.lazyLoad();
        setInterval(() => lazyIterator.next(), 2000);
    }
}

customElements.define("rrl-system", RrlSystem);
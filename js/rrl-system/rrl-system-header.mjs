import { RrlElement, html, css } from '../rrl-element.mjs'

import '../../components/button/toggle-button.mjs';
import '../../components/forms/sign-in-form.mjs';
import '../../components/forms/sign-up-form.mjs';

class RrlSystemHeader extends RrlElement {
    static get properties() {
        return {
            isShow: { type: Boolean, default: false },
            isHorizontal: { type: Boolean, default: true },
            version: { type: String, default: '1.0.0', save: true },
            activePage: { type: String, default: '#my-pride', attribute: 'active-page'},
            successUserIn: { type: Boolean, default: false}
        }
    }

    get title() {
        return 'RRL System';
    }

    static get styles() {
        return [
            css`
                :host {
                    padding: 0 10px;
                    background-color: var(--header-background-color);
                }

                * {
                    box-sizing: border-box;
                    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    -webkit-user-drag: none;
                    -khtml-user-drag: none;
                    -moz-user-drag: none;
                    -o-user-drag: none;
                    -ms-user-drag: none;
                    user-drag: none;
                }

                header {
                    display: flex;
                    height: 100px;
                    padding: 10px 0px;
                    justify-content: space-between;
                    align-items: center;
                }
                a {
                    text-decoration: none;
                    text-wrap: nowrap;
                    line-height: 0;
                }
                .logo {
                    display: flex;
                    align-items: center;
                    line-height: 1;
                }
                .logo a {
                    text-weight: 700;
                    color: var(--native-color);
                }
                .logo img {
                    margin-right: 1rem;
                    width: 80px;
                    height: 80px;
                }
                h3 {
                    margin: 0;
                }
                nav {
                    display: flex;
                }
                nav.vertical{
                    align-items: flex-start;
                    content-justify: space-between;
                    margin: 0;
                    padding: 0;
                    height: 200px;
                    overflow: hidden;
                    transition: height 0.35s ease;
                }
                nav.vertical:not(.show) {
                    height: 0;
                }
                nav.horizontal{
                    align-items: center;
                    margin: 0;
                    padding: 0;
                }
                nav ul {
                    list-style: none;
                    display: flex;
                    margin: 0;
                    padding: 0;
                    line-height: 1;
                }
                nav.vertical ul {
                    flex-direction: column;
                    width: 100%;
                }
                nav li {
                    display: inline-block;
                    position: relative;
                    horizontal-align: middle;
                    height: 100%;
                    padding: 0;
                    margin: 0;
                }
                nav.vertical li {
                    border-bottom: 1px solid var(--nav-item-hover-background-color);
                }
                nav.horizontal li:not(:last-child) {
                    margin-right: 2px;
                }
                nav.vertical a{
                    display: block;
                }
                nav a {
                    text-decoration: none;
                    text-transform: uppercase;
                    font-size: 1rem;
                    font-weight: 500;
                    line-height: 1rem;
                    letter-spacing: normal;
                    padding: 10px 20px;
                    color: var(--nav-item-color);
                }
                nav a:hover {
                    color: var(--nav-item-hover-color);
                    background-color: var(--nav-item-hover-background-color) !important;
                }
                nav a[active] {
                    color: var(--nav-item-active-color);
                    background-color: var(--nav-item-active-background-color) !important;
                }
            `
        ]
    }

    constructor() {
        super();
        this.version = "1.0.0";
    }

    logo() {
        // <svg>
        //     <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/favicon.svg"></use>
        // </svg>
        return html`
            <div class="logo" title="Home">
                <a href="#">
                    <img src="images/favicon.svg" alt="">
                </a>
                <a href="#">
                    <h3 class="text">
                        ${this.title}
                    </h3>
                </a>
            </div>
            <sign-in-form></sign-in-form>
            <sign-up-form></sign-up-form>
        `
    }

    userAccount() {
        return this.successUserIn ?  html`<li><a href="#personal-account" ?active=${this.activePage=="personal-account"}>Personal Account</a></li>` :
            html`<li><a @click=${this.login}>Log In</a></li>`
    }
    horizontalHeader() {
        return html`
            <header class="">
                ${this.logo()}
                <nav class="horizontal">
                    <ul>
                        <li><a href="#my-pride" ?active=${this.activePage==="my-pride" || this.activePage==="home-page"}>My pride</a></li>
                        <li><a href="#about-me" ?active=${this.activePage==="about-me"}>About me</a></li>
                        <li><a href="#my-courses" ?active=${this.activePage==="my-courses"}>My courses</a></li>
                        <li><a href="#my-stack" ?active=${this.activePage=="my-stack"}>My stack</a></li>
                        ${this.userAccount()}
                    </ul>
                </nav>
            </header>
        `;
    }

    verticalHeader() {
        return html`
            <header>
                ${this.logo()}
                <toggle-button name="bars" .toggled=${this.isShow} toggledname="xmark" border="0" color="var(--header-background-color)" @click=${this.showMenu} size="36"></toggle-button>
            </header>
            <nav class="vertical${this.isShow ? ' show' : ''}">
                <ul>
                    <li><a href="#my-pride" ?active=${this.activePage==="my-pride" || this.activePage==="home-page"}>My pride</a></li>
                    <li><a href="#about-me" ?active=${this.activePage==="about-me"}>About me</a></li>
                    <li><a href="#my-courses" ?active=${this.activePage=="my-courses"}>My courses</a></li>
                    <li><a href="#my-stack" ?active=${this.activePage=="my-stack"}>My stack</a></li>
                    ${this.userAccount()}
                </ul>
            </nav>
        `;
    }

    render() {
        return this.isHorizontal ? this.horizontalHeader() : this.verticalHeader();
    }

    firstUpdated() {
        super.firstUpdated();
        const md = window.matchMedia( "(min-width: 920px)" );
        this.isHorizontal = md.matches;
        md.addEventListener('change', this.matchMediaChange.bind(this), false);
    }

    login() {
        if (!this.isHorizontal)
            this.showMenu();
        this.renderRoot.querySelector("sign-in-form").open().then(() => this.showUserAccount());
    }

    showUserAccount() {
        this.successUserIn = true;
        window.location.hash = '#profile';
    }
    matchMediaChange(e) {
        this.isHorizontal = e.matches;
    }

    showMenu() {
        this.isShow = !this.isShow;
    }
}

customElements.define("rrl-system-header", RrlSystemHeader);
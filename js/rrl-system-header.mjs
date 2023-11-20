import { RrlElement, html, css } from './rrl-element.mjs'

import '../../components/button/toggle-button.mjs';

class RrlSystemHeader extends RrlElement {
    static get properties() {
        return {
            isShow: { type: Boolean, default: false },
            isVertical: { type: Boolean, default: true },
            version: { type: String, default: '1.0.0', save: true },
            activePage: { type: String, default: '#my-pride', attribute: 'active-page'}
        }
    }

    get title() {
        return 'Vladislav Antoshkin';
    }

    static get styles() {
        return [
            css`
                :host {
                    position: relative;
                    box-sizing: border-box;
                    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }

                * {
                    box-sizing: border-box;
                }

                .vertical-container {
                    display: flex;
                    position: relative;
                    justify-content: space-between;
                    height: 90px;
                    width: 100%;
                    padding: 20px 10px;
                }

                .container {
                    display: flex;
                    position: relative;
                    justify-content: space-between;
                    flex-direction: column;
                    padding: 0 10px;
                    -moz-transition: height .5s;
  -ms-transition: height .5s;
  -o-transition: height .5s;
  -webkit-transition: height .5s;
  transition: height .5s;
                }

                .m-header {
                    display: flex;
                    position: relative;
                    justify-content: space-between;
                    align-items: center;
                    height: 90px;
                    width: 100%;
                    padding: 20px 0;
                }


                a {
                    text-decoration: none;
                    text-wrap: nowrap;
                }

                .logo {
                    display: flex;
                    align-items: center;
                }

                .logo a {
                    text-weight: 700;
                    color: black;
                }

                .logo > img {
                    padding-right: 1rem;
                    width: 4rem;
                    height: 4rem;
                    box-sizing: content-box;
                }

                h3 {
                    margin: 0;
                    font-family: var(--ubuntu-font-family);
                    font-size: 18px;
                    line-height: 24px;
                }

                nav {
                    display: flex;
                    font-family: serif;
                }

                nav.horizontal{
                    align-items: center;
                    content-justify: space-between;
                    margin: 0;
                    padding: 0;
                    transition: height 0.35s ease;
                }

                nav.horizontal:not(.show) {
                    display: none;
                }

                nav.horizontal{
                    align-items: center;
                    content-justify: space-between;
                    margin: 0;
                    padding: 0;
                }

                nav.vertical{
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

                nav.horizontal ul {
                    flex-direction: column;
                    width: 100%;
                }

                nav li {
                    display: inline-block;
                    position: relative;
                    vertical-align: middle;
                    height: 100%;
                    padding: 0;
                    margin: 0;
                }

                nav.horizontal li {
                    border-bottom: 1px solid var(--nav-item-hover-background-color);
                }

                nav.vertical li:not(:last-child) {
                    margin-right: 2px;
                }

                nav.horizontal a{
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

                // @media (max-width: 991.98px) {
                //     portfolio-btn {
                //         display: block;
                //     }
                //     .menu-item {
                //         display: none;
                //     }
                // }
                // portfolio-button:not(.show) {
                //     display: none;
                // }
            `
        ]
    }

    constructor() {
        super();
        this.version = "1.0.0";
    }

    logo() {
        return html`
            <div class="logo">
                <img src="images/logo.png" alt="" />
                <h3 class="text">
                    <a href="">RRL System</a>
                </h3>
            </div>
        `
    }

    verticalHeader() {
        return html`
            <header>
                <div class="vertical-container">
                    ${this.logo()}
                    <nav class="vertical">
                        <ul>
                            <li><a href="#my-pride" ?active=${this.activePage==="my-pride" || this.activePage==="home-page"}>My pride</a></li>
                            <li><a href="#about-me" ?active=${this.activePage==="about-me"}>About me</a></li>
                            <li><a href="#my-courses" ?active=${this.activePage==="my-courses"}>My courses</a></li>
                            <li><a href="#my-stack" ?active=${this.activePage=="my-stack"}>My stack</a></li>
                            <li><a href="#catch-me" ?active=${this.activePage=="catch-me"}>Catch me</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        `;
    }

    horizontalHeader() {
        return html`
            <header>
                <div class="container">
                    <div class="m-header">
                        ${this.logo()}
                        <toggle-button name="bars" toggledname="xmark" border="0" color="#f7cf00" @click=${this.showMenu} size="36"></toggle-button>
                    </div>
                    <nav class="horizontal${this.isShow ? ' show' : ''}">
                        <ul>
                            <li><a href="#my-pride" ?active=${this.activePage==="my-pride" || this.activePage==="home-page"}>My pride</a></li>
                            <li><a href="#about-me" ?active=${this.activePage==="about-me"}>About me</a></li>
                            <li><a href="#my-courses" ?active=${this.activePage=="my-courses"}>My courses</a></li>
                            <li><a href="#my-stack" ?active=${this.activePage=="my-stack"}>My stack</a></li>
                            <li><a href="#catch-me" ?active=${this.activePage=="catch-me"}>Catch me</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        `;
    }

    render() {
        return this.isVertical ? this.verticalHeader() : this.horizontalHeader();
    }

    firstUpdated() {
        super.firstUpdated();
        const md = window.matchMedia( "(min-width: 920px)" );
        this.isVertical = md.matches;
        md.addEventListener('change', this.matchMediaChange.bind(this), false);
    }

    matchMediaChange(e) {
        this.isVertical = e.matches;
    }

    showMenu() {
        this.isShow = !this.isShow;
    }
}

customElements.define("rrl-system-header", RrlSystemHeader);
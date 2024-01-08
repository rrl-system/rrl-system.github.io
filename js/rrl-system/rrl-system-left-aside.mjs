import { RrlElement, html, css } from '../rrl-element.mjs'


import '../../components/button/aside-button.mjs';

class RrlSystemLeftAside extends RrlElement {
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
            RrlElement.styles,
            css`
                :host {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    padding: 20px 0;
                    height: 100%;
                    background: linear-gradient(180deg, var(--header-background-color) 0%, var(--gradient-background-color) 100%);
                }
                nav {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
            `
        ]
    }

    constructor() {
        super();
        this.version = "1.0.0";
        this.buttons = [
            {name: "user", title: "Profile", click: () => this.showPage("my-profile")},
            {name: "download-file", title: "Download File", click: () => this.showPage("my-projects")},
        ]
    }

    showPage(page) {
        location.hash = page;
    }

    render() {
        return html`
            <nav>${this.buttons.map((button, index) =>
                html`<aside-button name=${button.name} title=${button.title} @click=${button.click}></aside-button>`)}
            </nav>
            <aside-button name="right-from-bracket-solid" title="Sign Out" @click=${this.signOut}></aside-button>
        `;
    }

    signOut() {
        this.offsetParent.successUserIn = false;
    }

    firstUpdated() {
        super.firstUpdated();
    }

}

customElements.define("rrl-system-left-aside", RrlSystemLeftAside);
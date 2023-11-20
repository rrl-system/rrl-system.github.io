import { RrlElement, html} from '../../rrl-element.mjs'

import './home-section-1.mjs';
// import './home-section-2.mjs';
// import './home-section-3.mjs';
// import './home-section-4.mjs';
// import './home-section-5.mjs';
// import './home-section-6.mjs';
// import './home-section-7.mjs';
// import './home-section-8.mjs';

class HomePage extends RrlElement {
    static get properties() {
        return {
            version: { type: String, default: '1.0.0', save: true },
        }
    }

    constructor() {
        super();
        this.version = "1.0.0";
    }

    render() {
        return html`
            <home-section-1></home-section-1>
            <home-section-2></home-section-2>
            <home-section-3></home-section-3>
            <home-section-4></home-section-4>
            <home-section-5></home-section-5>
            <home-section-6></home-section-6>
            <home-section-7></home-section-7>
            <home-section-8></home-section-8>
        `;
    }

    firstUpdated() {
        super.firstUpdated();
    }
}

customElements.define("home-page", HomePage);
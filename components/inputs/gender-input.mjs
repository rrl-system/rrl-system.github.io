import { BaseElement, html, css, nothing } from '../../js/base-element.mjs';

import '../icon/icon.mjs'
import '../button/simple-button.mjs'

import styles from './input-css.mjs'

customElements.define("gender-input", class GenderInput extends BaseElement {
    static get properties() {
        return {
            type: { type: String, default: 'text'},
            required: { type: Boolean, default: false},
            label: { type: String, default: '' },
            _useInfo: { type: Boolean, default: false },
            iconName: { type: String, default: '', attribute: 'icon-name'},
            buttonName: { type: String, default: '', attribute: 'button-name' },
            placeholder: { type: String, default: '' },
            value: { type: String, default: ''},
            oldValue: { type: String, default: ''},
        }
    }

    static get styles() {
        return [
            styles,
            BaseElement.styles,
            css`
                :host {
                    display: inline-block;
                    width: 100%;
                    color: var(--form-label-input-color, white);
                    margin-top: 8px;
                }
                fieldset {
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                }

                label {
                    display: inline-flex;
                    line-height: 1rem;
                    align-items: center;
                    gap: 10px;
                    cursor: pointer;
                }
                input {
                    appearance: none;
                    width: 1rem;
                    aspect-ratio: 1;
                    border: 2px solid white;
                    border-radius: 50%;
                    cursor: pointer;
                    margin: 0;
                    transition: .3s easy-in;
                }
                input:checked {
                    border-width: 4px;
                }
            `
        ]
    }

    firstUpdated(setPath = false) {
        super.firstUpdated();
        this.oldValue ??= this.value;
    }

    get #label() {
        return html`
            <span class="label">${this.label}</span>
        `
    }

    get #icon() {
        return html`
            <simple-icon class="icon" icon-name=${this.iconName}></simple-icon>
        `
    }

    // get value() {
    //     return this._value;
    // }

    // set value(value) {
    //     const oldValue = this.value;
    //     this._value = value;
    //     this.requestUpdate('value', oldValue);
    // }

    get value() {
        return this.renderRoot?.querySelector('input')?.value ?? null;
    }

    set value(value) {
        const input = this.renderRoot?.querySelector('input');
        if (input) {
            input.value= value;
        }
    }

    get #button() {
        return html`
            <simple-icon class="button" icon-name=${this.buttonName || nothing} @click=${this.updateLoginValue}></simple-icon>
        `
    }

    get #legend() {
        return html`<legend>${this.label}</legend>`;
    }

    render() {
        return html`
            <fieldset class="fieldset">
                ${this.label ? this.#legend : ''}
                <label><input type="radio" name="gender" value="male" @input=${this.changeValue}>Male</label>
                <label><input type="radio" name="gender" value="female" @input=${this.changeValue}>Female</label>
            </fieldset>
        `;
    }

    get #input() {
        return this.renderRoot?.querySelector('input') ?? null;
    }

    changeValue(e) {
        this.value = e.target.value
        const options = {
            bubbles: true,
            composed: true
        };
        this.dispatchEvent(new CustomEvent('value-changed', options));
    }
});
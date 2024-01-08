import { RrlElement, html, css } from '../../../rrl-element.mjs'

class MyProfileSection1 extends RrlElement {
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
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .right-layout {
                        display: flex;
                        flex-basis: 50%;
                        align-items: flex-start;
                    }

                    p {
                        font-size: 1rem;
                        margin-left: 1rem;
                    }

                    a:hover {
                        background-color: var(--button-hover-color);
                    }
                    
                    .avatar-placeholder {
                        width: 150px;
                        height: 150px;
                        border-radius: 50%;
                        background-color: var(--native-color);
                    }

                    button {
                        padding: 10px 25px;
                        background-color: var(--background-green);
                        color: var(--native-color);
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        font-weight: 600;
                    }
    
                    button:hover {
                        background-color: var(--button-hover-color);
                    }

                    button:first-child {
                        margin-right: 20px;
                    }

                    label {
                        font-size: 1.15rem;
                        margin-bottom: 5px;
                        flex-direction: column;
                        display: block;
                    }
    
                    img {
                        max-width: 100px;
                        max-height: 100px;
                        border-radius: 50%;
                        overflow: hidden;
                        background-color: var(--native-color);
                    }

                    input {
                        margin-bottom: 1.5rem;
                        margin-right: 5.5rem;
                        padding: 5px;
                        width: 300px;
                        flex-direction: column;
                        display: block;
                    }

                    input[type="file"] {
                        margin-bottom: 20px;
                        lang: en-US;
                    }
                `
            ]
        }

        constructor() {
            super();

            this.name = '';
            this.surname = '';
            this.middlename = '';
            this.email = '';
            this.phone = '';
            this.avatar = '';
        }

        render() {
            return html`
                <div class="left-layout">
                    <h1 for="avatar">Profile picture</h1>
                    <input type="file" id="avatar" accept="image/*" @change="${(e) => this.handleAvatarChange(e)}">
                    ${this.avatar
                        ? html`<img src="${this.avatar}" alt="Avatar">`
                        : html`<div class="avatar-placeholder"></div>`}
                    <p>Size: 100x100px</p>
                </div>
                <div class="right-layout">
                    <div>
                        <h1>Personal data</h1>
                    
                        <label for="name">Name:</label>
                        <input type="text" id="name" .value="${this.name}" @input="${(e) => this.name = e.target.value}">

                        <label for="surname">Surname:</label>
                        <input type="text" id="surname" .value="${this.surname}" @input="${(e) => this.surname = e.target.value}">

                        <label for="middlename">Middle name:</label>
                        <input type="text" id="middlename" .value="${this.middlename}" @input="${(e) => this.middlename = e.target.value}">

                        <label for="email">EMail:</label>
                        <input type="email" id="email" .value="${this.email}" @input="${(e) => this.email = e.target.value}">

                        <label for="phone">Telephone:</label>
                        <input type="tel" id="phone" .value="${this.phone}" @input="${(e) => this.phone = e.target.value}">   
                    </div>
                    
                    <div>
                        <h1>Change password</h1>

                        <label for="old-password">Old Password:</label>
                        <input type="password" id="old-password">

                        <label for="new-password">New Password:</label>
                        <input type="password" id="new-password">

                        <label for="confirm-password">Confirm Password:</label>
                        <input type="password" id="confirm-password">

                        <div class="button-container">
                            <button @click="${this.handleSave}">Save</button>
                            <button @click="${this.handleCancel}">Cancel</button>
                        </div>
                    </div>
                </div>
            `;
        }

        handleAvatarChange(event) {
            const fileInput = event.target;
            const file = fileInput.files[0];
    
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.avatar = e.target.result;
                    this.requestUpdate(); // Обновить компонент, чтобы перерисовать изображение
                };
                reader.readAsDataURL(file);
            }
        }

        handleSave() {
            console.log('Saving data:', this.name, this.surname, this.middlename, this.email, this.phone, this.avatar);
        }
    
        handleCancel() {
            console.log('Canceling changes');
        }

        firstUpdated() {
            super.firstUpdated();
        }
}

customElements.define("my-profile-section-1", MyProfileSection1);
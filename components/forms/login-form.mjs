
import { RrlElement, html, css } from '../../js/rrl-element.mjs';

import { formStyles } from './form-css.mjs'

//import { default as wsClient, sendMessage, setDialog, repairDialog, setForm} from '../../js/ws-client.mjs'

import '../dialogs/modal-dialog.mjs';

import '../input/input.mjs';
import '../input/password.mjs';

class LoginForm extends RrlElement {
    static get properties() {
        return {
            version: { type: String, default: '1.0.0', save: true, category: 'settings' },
            opened: { type: Boolean, default: false, category: 'settings' },
            login: { type: String, default: ''},
            password: {type: String, default: ''}
        }
    }

    static get styles() {
        return [
            formStyles,
            css`
                :host {
                    user-select: none;
                }
                .icon-font-2.user {
                    color: red;
                    font-family: FontAwesome;
                }
                .icon-font-2.user::before {
                    font-family: FontAwesome;
                    content:"\f001";
                }
            `
        ]
    }

    constructor() {
        super();
        this.version = "1.0.0";
    }

    render() {
        return html`
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
           <div id="form-background" class="form-background" style="${this.opened ? 'display: block' : ''}">
            <modal-dialog></modal-dialog>
            <cancel-dialog></cancel-dialog>
            <close-dialog></close-dialog>
            <form class="form animate" method="post" id="form">
                <div class="form-header">
                    <div class="form-tabs no-select">
                        <div class="form-tab" selected>
                            <span id="db-tab" class="form-tab-link select">Sing in</span>
                        </div>
                    </div>
                    <span id="close" class="close-button no-select" title="Закрыть"  @click=${()=>this.close()}>&times;</span>
                </div>

                <div class="form-body">
                    <div id="db-tab-section" class="form-tab-section selected">
                        <rrl-input type="text" placeholder="Логин" label="Пользователь" class="notoggled" icon="{}" name="user" fill="gray" size="28" scale="0.9" rotate="0" speed="0" blink="0" blval="1;0;0;1" path=""></rrl-input>
                        <rrl-password type="password" label="Пароль" visibleIcon="eye-regular" invisibleIcon="eye-slash-regular" class="notoggled" icon="{}" name="lock" fill="gray" size="28" scale="0.9" rotate="0" speed="0" blink="0" blval="1;0;0;1" path=""></rrl-password>

                        <div class="login-options">
                            <div class="checkbox-remember">
                                <input type="checkbox" name="remember">
                                <label for="remember"><b>Remember me</b></label>
                            </div>
                            <a href="http://localhost/forgot" class="forgot-password" title="Forgot Password?">Forgot Password?</a>
                        </div>

                        <button type="button" @click=${()=>this.sendLogin()}>Log In</button>
                    </div>
                </div>
            </form>
        </div>
        `;
    }

    firstUpdated() {
        super.firstUpdated();
    }

    neuroClick() {
        // let cells = this.renderRoot.querySelectorAll(".cell");
        // const id = Math.floor(Math.random() * cells.length);
        // if (id != this.odd)
        //     cells[id].dispatchEvent(new CustomEvent("click", { bubbles: true, composed: true}));
    }
    open() {
        this.opened = true;
        setDialog(this.renderRoot.querySelector('modal-dialog'))
        setForm(this);
    }
    close() {
        this.opened = false
        repairDialog()
    }

    sendLogin() {
        sendMessage("login", {login: this.login, password: this.password})
    }

    async authOk(message) {
        console.log(JSON.stringify(message))
        const dialog =  this.renderRoot.querySelector('modal-dialog');
        let modalResult = await dialog.show(message.text);
        if (modalResult === "Ok") {
            this.close();
        }
    }

    async modalDialogShow() {
        const dialog =  this.renderRoot.querySelector('modal-dialog');
        let modalResult = await dialog.show("Подключение прошло удачно");
        if (modalResult === "Ok") {
            this.close();
        }
    }

    updateLoginValue (e) {
        this.login = e.target.value
        console.log(this.login)
    }

    updatePasswordValue (e) {
        this.password = e.target.value
        console.log(this.password)
    }
}

customElements.define("login-form", LoginForm);
import { BaseElement, html, css } from '../../js/base-element.mjs';

import '../icon/icon.mjs'

customElements.define('project-button', class ProjectButton extends BaseElement {
    static get properties() {
        return {
            _useInfo: { type: Boolean, default: true },
            label: { type: String, default: '' },
            textAlign: { type: String, default: 'center' },
            name: { type: String, default: '', isIcon: true },
            fill: { type: String, default: '' },
            color: { type: String, default: 'gray' },
            borderColor: { type: String, default: '' },
            back: { type: String, default: '#fdfdfd' },
            size: { type: Number, default: 24 },
            width: { type: String, default: '' },
            height: { type: String, default: '' },
            swh: { type: String, default: '' },
            border: { type: String, default: '1px' },
            radius: { type: String, default: '2px' },
            br: { type: String, default: '' },
            scale: { type: String, default: '0.9' },
            rotate: { type: Number, default: 0 },
            speed: { type: Number, default: 0 },
            blink: { type: Number, default: 0 },
            blval: { type: String, default: '1;0;0;1' },
            padding: { type: String, default: '' },
            toggledClass: { type: String, default: 'none' },
            notoggledClass: { type: String, default: 'notoggled' },
            toggled: { type: Boolean, default: false, reflect: true },
            path: { type: String, default: '' },
            icon: { type: Object, default: undefined },
            projectAvatar: { type: String, default: '' }, 
            statusIcon: { type: String, default: '' }, 
            statusColor: { type: String, default: 'green' }
        }
    }

    static get styles() {
        return css`
            :host {
                display: inline-block;
                vertical-align: middle;
                margin: 1px;
                user-select: none;
            }
            .project-btn {
                display: flex;
                align-items: center;
                padding: 0 5px;
                cursor: pointer;
                height: 100%;
            }
            .project-btn:hover {
                transition: .3s;
                filter: brightness(85%);
            }
            .project-btn:active {
                transition: .1s;
                filter: brightness(70%);
            }
            .project-btn:focus {
                outline:none;
            }
            .left90 {
                transition: .3s;
                transform: rotate(-90deg);
            }
            .right90 {
                transition: .3s;
                transform: rotate(90deg);
            }
            .left360 {
                transition: .3s;
                transform: rotate(-360deg);
            }
            .right360 {
                transition: .3s;
                transform: rotate(360deg);
            }
            .notoggled {
                transition: .3s;
                transform: rotate(0deg);
            }
            .ontoggled {
                transition: .3s;
                background-color: lightgray;
            }
            ._white {
                transition: .3s;
                background-color: white;
            }
            .project-avatar {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-size: cover;
                position: relative;
                display: inline-block;
                vertical-align: middle;
                margin-right: 10px;
            }
            .status-icon {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                position: absolute;
                right: 0;
                bottom: 0;
                border: 2px solid white;
            }
            .status-green {
                background-color: green;
            }
            .status-gear {
                background-image: url('path_to_your_gear_icon.png');
                background-size: cover;
            }
            .status-empty {
                background-color: transparent;
            }
            
        `;
    }
    firstUpdated(setPath = false) {
        super.firstUpdated();
        if (this.br) {
            let arr = this.br.split(':');
            this.border = arr[0] || this.border;
            this.radius = arr[1] || this.radius;
        }
        if (this.swh) {
            let arr = this.swh.split(':');
            this.size = arr[0] || this.size;
            this.width = arr[1] || this.width;
            this.height = arr[2] || this.height;
        }
    }
    get _icon() {
        let _icon = '{}';
        this.fill = this.fill || this.color;
        this.size = this.size || this.height || this.width;
        if (this.icon) _icon = JSON.stringify(this.icon);
        return html`<project-icon class="${this.toggled ? this.toggledClass : this.notoggledClass}" icon=${_icon} icon-name="${this.name}" fill="${this.fill}" size="${this.size}" scale="${this.scale}"
            rotate="${this.rotate}" speed="${this.speed}" blink="${this.blink}" blval="${this.blval}" path="${this.path}"></simple-icon>`;
    }
    render() {
        return html`
            <div id="project-btn" class="project-btn" tabindex="0" style="
                    text-align: ${this.textAlign};
                    border: ${this.border} solid ${this.borderColor || this.color || this.fill};
                    border-radius: ${this.radius};
                    background-color: ${this.back};
                    overflow: hidden;
                    justify-content: center;
                    padding: ${this.padding}"
                    @click="${() => this.toggled = !this.toggled}">
                <div class="project-avatar" style="background-image: url('${this.projectAvatar}');">
                    <div class="status-icon ${this.statusIcon}" style="background-color: ${this.statusColor};"></div>
                </div>
                ${this.icon || this.name ? this._icon : ''}
                <div style="display: inline-block; vertical-align: middle;">
                    <div style="color: ${this.color}; user-select: none;">
                        ${this.label}
                    </div>
                    <div style="color: ${this.statusColor}; font-size: 0.8em; user-select: none;">
                        ${this.statusIcon === 'gear' ? 'В процессе' : this.statusIcon === 'green' ? 'Выполнен' : 'Неопределенный'}
                    </div>
                </div>
                <slot></slot>
            </div>
        `;
    }    
});

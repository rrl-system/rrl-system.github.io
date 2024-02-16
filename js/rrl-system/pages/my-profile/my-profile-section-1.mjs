import { BaseElement, html, css } from '../../../base-element.mjs'

import '../../../../components/dialogs/confirm-dialog.mjs'
import '../../../../components/inputs/simple-input.mjs'
import '../../../../components/inputs/upload-input.mjs'
import '../../../../components/inputs/download-input.mjs'
import '../../../../components/inputs/birthday-input.mjs'
import '../../../../components/inputs/gender-input.mjs'
import '../../../../components/inputs/avatar-input.mjs'
import '../../../../components/buttons/statistic-button.mjs'

class MyProfileSection1 extends BaseElement {
        static get properties() {
            return {
                version: { type: String, default: '1.0.0', save: true },
                dataSet: {type: Object, default: {}},
                isModified: {type: Boolean, default: false},
                isReady: {type: Boolean, default: true},
                avatar: {type: Object, default: {}},
                projectCount: {type: BigInt, default: 0},
                isFirstUpdated: {type: Boolean, default: false}
            }
        }

        static get styles() {
            return [
                BaseElement.styles,
                css`
                    :host {
                        display: grid;
                        width: 100%;
                        grid-template-columns: 3fr 9fr;
                        grid-template-rows: 50px 1fr 50px;
                        grid-template-areas:
                            "header1 header2"
                            "sidebar content"
                            "footer  footer";
                        gap: 0 20px;
                        background: linear-gradient(180deg, var(--header-background-color) 0%, var(--gradient-background-color) 100%);
                    }

                    header{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }

                    #project-header{
                        grid-area: header1;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }

                    #project-header p {
                        width: 100%;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        font-size: 1rem;
                        margin: 0;
                    }

                    #property-header{
                        grid-area: header2;
                    }

                    .left-layout {
                        grid-area: sidebar;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        overflow-y: auto;
                        overflow-x: hidden;
                        background: rgba(255, 255, 255, 0.1);
                        gap: 10px;
                    }
                    .avatar {
                        width: 100%
                    }

                    avatar-input {
                        width: 80%;
                        margin: auto;
                        aspect-ratio: 1 / 1;
                        overflow: hidden;
                        border-radius: 50%;
                    }

                    img {
                        width: 100%;
                    }

                    .right-layout {
                        overflow-y: auto;
                        overflow-x: hidden;
                        grid-area: content;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-right: 20px;
                        background: rgba(255, 255, 255, 0.1);
                    }

                    h1 {
                        font-size: 3.4375rem;
                        font-weight: 700;
                        text-transform: uppercase;
                        margin: 20px 0 0;
                    }

                    /* width */
                    ::-webkit-scrollbar {
                      width: 10px;
                    }

                    /* Track */
                    ::-webkit-scrollbar-track {
                      box-shadow: inset 0 0 5px grey;
                      border-radius: 5px;
                    }

                    /* Handle */
                    ::-webkit-scrollbar-thumb {
                      background: red;
                      border-radius: 5px;
                    }

                    h2 {
                        font-weight: 300;
                        line-height: 1.2;
                        font-size: 1.25rem;
                    }

                    p {
                        font-size: 1.25rem;
                        margin: 20px 207px 20px 0;
                        overflow-wrap: break-word;
                    }

                    a {
                        display: inline-block;
                        text-transform: uppercase;
                        color: var(--native-color);
                        margin: 20px auto 0 0;
                        background-color: var(--background-green);
                        letter-spacing: 1px;
                        text-decoration: none;
                        white-space: nowrap;
                        padding: 10px 30px;
                        border-radius: 0;
                        font-weight: 600;
                    }

                    a:hover {
                        background-color: var(--button-hover-color);
                    }

                    footer {
                        grid-area: footer;
                        display: flex;
                        align-items: center;
                        justify-content: end;
                        margin-right: 20px;
                        gap: 10px;
                    }

                    footer simple-button {
                        height: 40px;
                    }
                    #drop_zone {
                        border: 5px solid blue;
                        width: 200px;
                        height: 100px;
                    }
                    .label {
                        display: block;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        margin-top: 8px;
                        font-weight: bold;
                        color: var(--form-label-input-color, white);
                    }
                    .right-container {
                        width: 600px;
                    }
                    .statistic {
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                        align-items: center;
                        gap: 10px;


                    }
                    .name-group {
                        display: flex;
                        gap: 20px;
                    }
                `
            ]
        }

        constructor() {
            super();

        }

        async showProject(index, projectId) {
            if (this.isModified) {
                const modalResult = await this.confirmDialogShow('Проект был изменен. Сохранить сделанные изменения?')
                if (modalResult === 'Ok')
                    this.saveProject().then(() => this.currentProject = this.dataSet[index]);
            }
            else {
                this.currentProject = this.dataSet[index]
            }
        }

        get #userName() {
            if (localStorage.getItem('rememberMe')) {
                return localStorage.getItem('loginInfo')
            }
            else {
                return sessionStorage.getItem('loginInfo')
            }
        }

        render() {
            return html`
                <confirm-dialog></confirm-dialog>
                <header id="project-header"><p>Profile</p></header>
                <header id="property-header">Personal data</header>
                <div class="left-layout">
                    <div class="avatar">
                        ${this.isFirstUpdated ? html`<avatar-input id="avatar" .currentObject=${this} .value=${this.avatar} @input=${this.validateAvatar}></avatar-input>` : ''}
                    </div>
                    <div class="label">
                        ${JSON.parse(this.#userName).login}
                    </div>
                    <div class="statistic">
                        <statistic-button label="Projects" @click=${this.certificatesClick} max=${this.projectCount} duration="5000"></statistic-button>
                        <statistic-button label="Sales" @click=${this.certificatesClick} max=${this.projectCount} duration="5000"></statistic-button>
                        <statistic-button label="Wallet" @click=${this.certificatesClick} max=${this.projectCount} duration="5000"></statistic-button>
                    </div>
                </div>
                <div class="right-layout">
                    <div class="right-container">
                        <div class="name-group">
                            <simple-input label="First Name:" id="firstName" icon-name="user" .value=${this.dataSet?.personalInfo?.firstName} @input=${this.validateInput}></simple-input>
                            <simple-input label="Last Name:" id="lastName" icon-name="user-group-solid" .value=${this.dataSet?.personalInfo?.lastName} @input=${this.validateInput}></simple-input>
                        </div>
                        <simple-input label="NickName:" id="nickName" icon-name="user-alien-solid" .value=${this.dataSet?.personalInfo?.nickName} @input=${this.validateInput}></simple-input>
                        <simple-input label="Email:" id="email" icon-name="envelope1" .value="${this.dataSet?.personalInfo?.email}" @input=${this.validateInput}></simple-input>
                        <gender-input label="Gender:" id="gender" icon-name="gender" .value="${this.dataSet?.personalInfo?.gender}" @input=${this.validateInput}></gender-input>
                        <birthday-input label="Data of Birth:" id="birthday" .value="${this.dataSet?.personalInfo?.birthday}" @input=${this.validateInput}></birthday-input>
                    </div>
                </div>
                <footer>
                    ${ this.isModified ? html`
                            <simple-button label="Сохранить" @click=${this.saveProfile}></simple-button>
                            <simple-button label="Отменить" @click=${this.cancelProfile}></simple-button>
                        ` : ''
                    }
                </footer>
            `;
        }

        validateAvatar(e) {
            this.oldValues ??= new Map();
            const userProfile = this
            if (!this.oldValues.has(e.target))
                this.oldValues.set(e.target, userProfile[e.target.id])
            else {
                if (this.oldValues.get(e.target) === e.target.value) {
                    this.oldValues.delete(e.target)
                }
            }
            userProfile[e.target.id] = e.target.value
            this.isModified = this.oldValues.size !== 0;
        }

        validateInput(e) {
            this.oldValues ??= new Map();
            const userProfile =this.dataSet.personalInfo
            if (!this.oldValues.has(e.target))
                this.oldValues.set(e.target, userProfile[e.target.id])
            else {
                if (this.oldValues.get(e.target) === e.target.value) {
                    this.oldValues.delete(e.target)
                }
            }
            userProfile[e.target.id] = e.target.value
            this.isModified = this.oldValues.size !== 0;
        }

        async getNewFileHandle() {
            const options = {
              types: [
                {
                  description: 'Text Files',
                  accept: {
                    'text/plain': ['.txt'],
                  },
                },
                {
                  description: 'Neural Models',
                  accept: {
                    'application/octet-stream': ['.pkl'],
                  },
                },

              ],
            };
            const handle = await window.showSaveFilePicker(options);
            return handle;
        }

        async downloadFile() {
            const token = await this.getToken();
            const projectId = this.currentProject._id;
            // const fileHandle = await window.getNewFileHandle();
            fetch(`http://localhost:7000/api/download/${projectId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка при загрузке файла: ' + response.statusText);
                }
                return response.blob();
            })
            .then(async blob => {
                if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                    window.navigator.msSaveOrOpenBlob(blob, 'model.pkl');
                } else {
                    const options = {
                        suggestedName: 'model',
                        types: [
                            {
                                description: 'Neural Model',
                                accept: {
                                  'application/octet-stream': ['.pkl']
                                }
                            },
                            {
                              description: 'Text Files',
                              accept: {
                                'text/plain': ['.txt', '.text'],
                                'text/html': ['.html', '.htm']
                              }
                            },
                            {
                              description: 'Images',
                              accept: {
                                'image/*': ['.png', '.gif', '.jpeg', '.jpg']
                              }
                            }
                            ,
                            {
                              description: 'Images 2',
                              accept: {
                                'image/png': ['.png', '.gif', '.jpeg', '.jpg']
                              }
                            },
                        ],
                        excludeAcceptAllOption: true
                    };
                    // ,
                    //         {
                    //             description: 'Text Files',
                    //             accept: {
                    //                 'text/plain': ['.txt'],
                    //             },
                    //         },
                    try {
                        // Для других браузеров
                        const fileHandle = await window.showSaveFilePicker(options);
                        const writable = await fileHandle.createWritable();
                        await writable.write(blob);
                        await writable.close();
                    } catch (err){
                        console.error(err);
                        // Для других браузеров
                        const downloadUrl =  window.URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = downloadUrl;
                        a.download = 'model.pkl';
                        document.body.appendChild(a);
                        a.click();
                        setTimeout(() => {
                            window.URL.revokeObjectURL(downloadUrl);
                            document.body.removeChild(a);
                        }, 0);
                    }
                }
            })
            .catch(error => {
                console.error('Ошибка:', error);
            });
        }

        async getToken() {
            return localStorage.getItem('rememberMe') ?
                localStorage.getItem('accessUserToken') :
                sessionStorage.getItem('accessUserToken')
        }
        async getUserInfo() {
            return sessionStorage.getItem('userProfile') ? JSON.parse(sessionStorage.getItem('userProfile')) : await this.getUserProfile()
        }

        async confirmDialogShow(message) {
            return await this.renderRoot.querySelector('confirm-dialog').show(message);
        }

        async getUserProfile() {
            const token = await this.getToken();
            return fetch('http://localhost:7000/api/user-profile', {
                headers: {
                  'Authorization': `Bearer ${token}`
                }

            })
            .then(response => {
                if (response.status === 419){
                    return this.refreshToken().then( token =>
                        fetch('http://localhost:7000/api/user-profile', {
                            headers: {
                            'Authorization': `Bearer ${token}`
                            }

                        }).then(response => response.json())
                    )
                }
                else {
                    return response.json()
                }
            })
            .then(json => {
                if (json.error) {
                    throw Error(json.error)
                }
                return json;
            })
            .then(userProfile => this.saveDataSet(userProfile))
            .catch(err => {console.error(err.message)});
        }

        async saveDataSet(userProfile) {
            this.dataSet = userProfile;
            sessionStorage.setItem('userProfile', JSON.stringify(userProfile));
            return this.dataSet;
        }
        refreshToken() {
            return fetch('http://localhost:7000/api/refresh-token', {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                credentials: "include",
            })
            .then(response => response.json())
            .then(json => {
                if (json.error) {
                    throw Error(json.error)
                }
                return json.token
            })
            .then(token => this.saveToken(token))
            .catch(err => {console.error(err.message)});
        }
        async saveToken(token) {
            if (localStorage.getItem('rememberMe')) {
                localStorage.setItem('accessUserToken', token)
            }
            else {
                sessionStorage.setItem('accessUserToken', token)
            }
            return token;
        }
        async saveProfile() {
            const token = await this.getToken();
            const result = await this.uploadAvatarFile();
            if (!result) return;
            return fetch(`http://localhost:7000/api/user-profile`, {
                method: "PUT",
                headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(this.dataSet)
            })
            .then(response => response.json())
            .then(json => {
                if (json.error) {
                    throw Error(json.error)
                }
                return json;
            })
            .then(profileHeader => this.afterSave(profileHeader))
            // .then(() => this.modalDialogShow())
            .catch(err => {console.error(err)});
        }

        async uploadAvatarFile() {
            const uploadInput = this.renderRoot?.querySelector('avatar-input')
            if (uploadInput.value.constructor.name !== 'File') {
                return true;
            }
            const token = await this.getToken();
            const formData = new FormData();
            formData.append("file", uploadInput.value);
            return fetch(`http://localhost:7000/api/upload/avatar`, {
                method: "POST",
                headers: {
                  'Authorization': `Bearer ${token}`,
                },
                body: formData
            })
            .then(response => response.json())
            .then(json => {
                if (json.error) {
                    throw Error(json.error)
                }
                return json;
            })
            // .then(projectHeader => this.updateDataset(projectHeader))
            // .then(() => this.modalDialogShow())
            .catch(err => {console.error(err)});
        }

        async afterSave(profileHeader) {
            this.dataSet._rev = profileHeader.rev;
            sessionStorage.setItem('userProfile', JSON.stringify(this.dataSet));
            //const uploadInput = this.renderRoot?.querySelector('upload-input')
            //uploadInput.file = null;
            this.oldValues?.clear();
            this.isModified = false;
        }

        async cancelProfile() {
            const modalResult = await this.confirmDialogShow('Вы действительно хотите отменить все изменения?')
            if (modalResult !== 'Ok')
                return
            this.oldValues.forEach( (value, key) => {
                const currentObject = key.currentObject ?? this.dataSet.personalInfo
                currentObject[key.id] = value;
            });
            this.oldValues.clear();
            this.isModified = false;
        }

        async firstUpdated() {
            super.firstUpdated();
            this.dataSet = await this.getUserInfo();
            this.avatar = await this.downloadAvatar();
            this.projectCount = await this.getProjectCount();
            this.isFirstUpdated = true;
        }

        async getProjectCount() {
            const token = await this.getToken();
            return fetch('http://localhost:7000/api/projects/count', {
                headers: {
                  'Authorization': `Bearer ${token}`
                }

            })
            .then(response => {
                return response.json()
            })
            .then(json => {
                if (json.error) {
                    throw Error(json.error)
                }
                return json;
            })
            .then(projectCount => this.saveProjectCount(projectCount))
            .catch(err => {console.error(err.message)});
        }

        async saveProjectCount(projectCount) {
            return this.projectCount = projectCount.doc_count;
        }

        async downloadAvatar() {
            const token = await this.getToken();
            return fetch(`http://localhost:7000/api/upload/avatar`, {
                method: "GET",
                headers: {
                  'Authorization': `Bearer ${token}`,
                }
            })
            .then(response => response.blob())
            .then(blob => {
                // if (json.error) {
                //     throw Error(json.error)
                // }
                return blob;
            })
            // .then(projectHeader => this.updateDataset(projectHeader))
            // .then(() => this.modalDialogShow())
            .catch(err => {console.error(err)});
        }
}

customElements.define("my-profile-section-1", MyProfileSection1);
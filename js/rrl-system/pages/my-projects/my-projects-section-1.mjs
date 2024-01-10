import { BaseElement, html, css } from '../../../base-element.mjs'

import '../../../../components/dialogs/confirm-dialog.mjs'
import '../../../../components/inputs/simple-input.mjs'
import '../../../../components/inputs/upload-input.mjs'

class MyProjectsSection1 extends BaseElement {
        static get properties() {
            return {
                version: { type: String, default: '1.0.0', save: true },
                dataSet: {type: Array, default: []},
                currentProject: {type: String, default: ""},
                isModified: {type: Boolean, default: ""},
                // isValidate: {type: Boolean, default: false, local: true},
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
                            "header1  header2"
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

                        align-items: center;
                        overflow-y: auto;
                        overflow-x: hidden;
                        background: rgba(255, 255, 255, 0.1);
                    }

                    .left-layout simple-button {
                        width: 100%;
                        height: 40px;
                    }

                    img {
                        width: 100%;
                    }

                    .right-layout {
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

        render() {
            return html`
                <confirm-dialog></confirm-dialog>
                <header id="project-header"><p>Проект: ${this.currentProject.name}</p></header>
                <header id="property-header">Project property</header>
                <div class="left-layout">
                    ${this.dataSet.map((project, index) =>
                        html`<simple-button label=${project.name} title=${project._id} @click=${() => this.showProject(index, project._id)}></simple-button>`)}
                </div>
                <div class="right-layout">
                    <div>
                        <h2>Project property</h2>
                        <simple-input id="name" icon-name="user" placeholder="Название" .value=${this.currentProject.name} @value-changed=${this.validateInput}></simple-input>
                        <simple-input id="path" icon-name="bars" placeholder="Project" .value=${this.currentProject.path} @value-changed=${this.validateInput}></simple-input>
                        <upload-input id="filename" .value=${this.currentProject.filename} @value-changed=${this.validateInput}></upload-input>
                    </div>
                </div>
                <footer>
                    <simple-button label=${this.isModified ? "Сохранить": "Удалить"} @click=${this.isModified ? this.saveProject: this.deleteProject}></simple-button>
                    <simple-button label=${this.isModified ? "Отменить": "Добавить"} @click=${this.isModified ? this.cancelProject: this.addProject}></simple-button>
                </footer>
            `;
        }


        // async uploadFile(file) {
        //     const token = await this.getToken();
        //     const formData = new FormData();
        //     formData.append('file', file);

        //     return fetch(`http://localhost:7000/api/project/${this.currentProject._id}`, {
        //         method: "POST",
        //         headers: {
        //           'Authorization': `Bearer ${token}`
        //         },
        //         body: formData
        //     })

        //     .then(response => response.json())
        //     .then(json => {
        //         if (json.error) {
        //             throw Error(json.error)
        //         }
        //         return json;
        //     })
        //     .then(() => this.fetchExistingFiles())
        //     .catch(err => {console.error(err.message)});
        // }

        // fetchExistingFiles() {
        //     const token = this.getToken();

        //     return fetch(`http://localhost:7000/api/project/${this.currentProject._id}/files`, {
        //         headers: {
        //           'Authorization': `Bearer ${token}`
        //         }
        //     })
        //     .then(response => response.json())
        //     .then(json => {
        //         if (json.error) {
        //             throw Error(json.error)
        //         }
        //         return json.files;
        //     })
        //     .then(files => {
        //         this.displayFiles(files); // Обновляем отображаемые файлы
        //     })
        //     .catch(err => {console.error(err.message)});
        // }


        // displayFiles(files) {
        //     const uploadedFilesList = this.shadowRoot.getElementById('uploaded_files');

        //     if (!uploadedFilesList) {
        //         console.error("Element to display uploaded files is not found!");
        //         return;
        //     }

        //     // Очищаем список перед отображением новых элементов
        //     uploadedFilesList.innerHTML = '';

        //     // Добавляем все файлы в список
        //     files.forEach(file => {
        //         const fileItem = document.createElement('div');
        //         fileItem.textContent = file.name;
        //         uploadedFilesList.appendChild(fileItem);
        //     });
        // }

        validateInput(e) {
            if (e.target.value !== "") {
                this.oldValues ??= new Map();
                const currentProject = e.target.currentObject ?? this.currentProject
                if (!this.oldValues.has(e.target))
                    this.oldValues.set(e.target, currentProject[e.target.id])
                else {
                    if (this.oldValues.get(e.target) === e.target.value) {
                        this.oldValues.delete(e.target)
                    }
                }
                currentProject[e.target.id] = e.target.value
                this.isModified = this.oldValues.size !== 0;
            }
        }

        async getToken() {
            return localStorage.getItem('rememberMe') ?
                localStorage.getItem('accessUserToken') :
                sessionStorage.getItem('accessUserToken')
        }

        async confirmDialogShow(message) {
            return await this.renderRoot.querySelector('confirm-dialog').show(message);
        }

        async getProjectList() {
            const token = await this.getToken();
            return fetch('http://localhost:7000/api/projects', {
                headers: {
                  'Authorization': `Bearer ${token}`
                }

            })
            .then(response => response.json())
            .then(json => {
                if (json.error) {
                    throw Error(json.error)
                }
                return json.rows;
            })
            .then(projects => this.saveDataSet(projects))
            // .then(() => this.modalDialogShow())
            .catch(err => {console.error(err.message)});
        }

        async saveDataSet(projects) {
            if (projects.length === 0)
                return;
            this.dataSet = projects.map(project =>
                project.doc
            ).sort( (a, b) => b._id.localeCompare(a._id) )
            this.currentProject = this.dataSet[0];
        }

        async addProject() {
            const token = await this.getToken();
            const project = {name: "Новый проект"}
            return fetch(`http://localhost:7000/api/project`, {
                method: "POST",
                headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(project)
            })
            .then(response => response.json())
            .then(json => {
                if (json.error) {
                    throw Error(json.error)
                }
                return json.id;
            })
            .then(projectId => this.getProject(projectId))
            .then(project => this.addToDataset(project))
            // .then(() => this.modalDialogShow())
            .catch(err => {console.error(err.message)});
        }

        async saveProject() {
            const token = await this.getToken();
            const result = await this.uploadFile();
            if (!result) return;
            return fetch(`http://localhost:7000/api/project/${this.currentProject._id}`, {
                method: "PUT",
                headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(this.currentProject)
            })
            .then(response => response.json())
            .then(json => {
                if (json.error) {
                    throw Error(json.error)
                }
                return json;
            })
            .then(projectHeader => this.afterSave(projectHeader))
            // .then(() => this.modalDialogShow())
            .catch(err => {console.error(err)});
        }

        async uploadFile() {
            const token = await this.getToken();
            const formData = new FormData();
            const uploadInput = this.renderRoot?.querySelector('upload-input')
            formData.append("file", uploadInput.file);
            return fetch(`http://localhost:7000/api/upload/${this.currentProject._id}`, {
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

        async deleteProject() {
            const modalResult = await this.confirmDialogShow('Вы действительно хотите удалить этот проект?')
            if (modalResult !== 'Ok')
                return;
            const token = await this.getToken();
            try {
                await this.deleteProjectFiles(token)
            } catch(err) {
                console.error(err.message)
                return
            }
            return fetch(`http://localhost:7000/api/project/${this.currentProject._id}?rev=${this.currentProject._rev}`, {
                method: "DELETE",
                headers: {
                  'Authorization': `Bearer ${token}`
                }
            })
            .then(response => response.json())
            .then(json => {
                if (json.error) {
                    throw Error(json.error)
                }
                return json;
            })
            .then(project => this.deleteFromDS(project))
            // .then(() =>c.modalDialogShowShow())
            .catch(err => {console.error(err.message)});
        }

        async deleteProjectFiles(token) {
            return fetch(`http://localhost:7000/api/upload/${this.currentProject._id}`, {
                method: "DELETE",
                headers: {
                  'Authorization': `Bearer ${token}`
                }
            })
            .then(response => response.json())
            .then(json => {
                if (json.error) {
                    throw Error(json.error)
                }
                return json;
            })
        }


        async cancelProject() {
            const modalResult = await this.confirmDialogShow('Вы действительно хотите отменить все изменения?')
            if (modalResult !== 'Ok')
                return
            this.oldValues.forEach( (value, key) => {
                const currentProject = key.currentObject ?? this.currentProject
                currentProject[key.id] = value;
                key.value = value;
            });
            this.oldValues.clear();
            this.isModified = false;
        }

        async deleteFromDS(project) {
            const currentIndex = this.dataSet.indexOf(this.currentProject)
            this.currentProject = this.dataSet.length === 1 ? {} :
                currentIndex === 0 ? this.dataSet[currentIndex + 1] : this.dataSet[currentIndex - 1]
            this.dataSet.splice(currentIndex, 1)
            return project
        }

        async addToDataset(project) {
            this.dataSet.unshift(project);
            this.currentProject = this.dataSet[0]
            return project
        }

        async afterSave(projectHeader) {
            this.currentProject._rev = projectHeader.rev;
            const uploadInput = this.renderRoot?.querySelector('upload-input')
            uploadInput.file = null;
            this.oldValues?.clear();
            this.isModified = false;
        }

        async getProject(projectId) {
            const token = await this.getToken();
            return fetch(`http://localhost:7000/api/project/${projectId}`, {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
            })
            .then(response => response.json())
            .then(json => {
                if (json.error) {
                    throw Error(json.error)
                }
                return json;
            })
            .then(project => {
                console.log(project)
                return project
            })
            // .then(() =>c.modalDialogShowShow())
            .catch(err => {console.error(err.message)});
        }

        async firstUpdated() {
            super.firstUpdated();
            await this.getProjectList();
        }
}

customElements.define("my-projects-section-1", MyProjectsSection1);
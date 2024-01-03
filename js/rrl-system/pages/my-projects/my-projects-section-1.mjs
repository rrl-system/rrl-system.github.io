import { RrlElement, html, css } from '../../../rrl-element.mjs'

class MyProjectsSection1 extends RrlElement {
        static get properties() {
            return {
                version: { type: String, default: '1.0.0', save: true },
                dataSet: {type: Array, default: []},
                currentProject: {type: String, default: ""},
            }
        }

        static get styles() {
            return [
                RrlElement.styles,
                css`
                    :host {
                        display: grid;
                        grid-template-columns: 3fr 9fr;
                        grid-template-rows: 50px 1fr 50px;
                        grid-template-areas:
                            "header  header"
                            "sidebar content"
                            "footer  footer";
                        gap: 0 20px;
                        background: linear-gradient(180deg, var(--header-background-color) 0%, var(--gradient-background-color) 100%);
                    }

                    header {
                        grid-area: header;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
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


                    .left-layout rrl-button {
                        width: 100%;
                    }

                    img {
                        width: 100%;
                    }

                    .right-layout {
                        grid-area: content;
                        display: flex;
                        flex-basis: 70%;
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
                `
            ]
        }

        constructor() {
            super();
        }

        async showProject(index, projectId) {
            this.currentProject = this.dataSet[index];
        }

        render() {
            return html`
                <header>Прокеты: ${this.currentProject.name}</header>
                <div class="left-layout">
                    ${this.dataSet.map((project, index) =>
                        html`<rrl-button label=${project.name} title=${project._id} height="40px" @click=${() => this.showProject(index, project._id)}></rrl-button>`)}
                </div>
                <div class="right-layout">
                    <div>
                        <h2>Innovative programming</h2>
                        <h1>Reinforcement<br>learning<br>systems</h1>
                        <p>The future is already here. Аrtificial intelligence never sleeps and never gets bored</p>
                        <a href="#my-pride">Learn more</a>
                    </div>
                </div>
                <footer>
                    <rrl-button label="Удалить" height="40px" @click=${() => this.deleteProject()}></rrl-button>
                    <rrl-button label="Добавить" height="40px" @click=${() => this.addProject()}></rrl-button>
                </footer>
            `;
        }
        async getToken() {
            return localStorage.getItem('rememberMe') ?
                localStorage.getItem('accessUserToken') :
                sessionStorage.getItem('accessUserToken')
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
            this.dataSet = projects.map(project =>
                project.doc
            ).sort( (a, b) => b._id.localeCompare(a._id) )
        }

        async addProject() {
            const token = await this.getToken();
            const project = {name: "Новый проект"}
            return fetch(`http://localhost:7000/api/project`, {
                method: "POST",
                headers: {
                  'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(project)
            })
            .then(response => response.json())
            .then(json => {
                if (json.error) {
                    throw Error(json.error)
                }
                return json;
            })
            .then(projects => console.log(projects))
            // .then(() => this.modalDialogShow())
            .catch(err => {console.error(err.message)});
        }

        async deleteProject() {
            const token = await this.getToken();
            return fetch(`http://localhost:7000/api/project/${this.currentProject._id}:${this.currentProject._rev}`, {
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
                return json.rows;
            })
            .then(projects => console.log(projects))
            // .then(() => this.modalDialogShow())
            .catch(err => {console.error(err.message)});
        }

        async getProject() {
            const token = await this.getToken();
            return fetch(`http://localhost:7000/api/project/${this.currentProject._id}}`, {
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
            .then(projects => console.log(projects))
            // .then(() => this.modalDialogShow())
            .catch(err => {console.error(err.message)});
        }

        async firstUpdated() {
            super.firstUpdated();
            await this.getProjectList();
        }
}

customElements.define("my-projects-section-1", MyProjectsSection1);
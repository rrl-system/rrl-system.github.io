import { RrlElement, html, css } from './rrl-element.mjs'

import '../components/button/button.mjs';
import '../components/icon/icon.mjs';
import '../components/forms/login-form.mjs';
import '../components/forms/sign-up-form.mjs';
import '../components/forms/game-find-form.mjs';
// import { default as wsClient, sendMessage, setDialog, repairDialog, setForm, addGame, sendStep, setGameForm} from './ws-client.mjs'

import { rrlSystemStyles } from './rrl-system-css.mjs';

class RrlSystem extends RrlElement {
    static get properties() {
        return {
            row: { type: Number, default: 8, save: true, category: 'settings' },
            column: { type: Number, default: 8, save: true, category: 'settings' },
            autoClose: { type: Boolean, default: true, category: 'settings' },
            timeToClose: { type: Number, default: 750, category: 'settings' },
            fontSize: { type: Number, default: 32 },
            isOk: { type: Number, default: 0 },
            isError: { type: Number, default: 0 },
            isInit: { type: Boolean, default: true, category: 'settings' },
            step: { type: Number, default: 0 },
            cards: { type: Array },
            card1: { type: Object },
            card2: { type: Object },
            solved: { type: Array, default: [] },
            end: { type: Boolean },
            version: { type: String, default: '1.0.0', save: true, category: 'settings' },
            squares: {type: Array}
        }
    }

    rowStart;
    colStart;
    static get styles() {
        return [
            rrlSystemStyles,
            css`
                :host {
                    position: relative;
                    display: flex;
                    flex-direction: column;cur
                    justify-content: center;
                    height: 100%;
                    box-sizing: border-box;
                    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
            `
        ]
    }

    constructor() {
        super();
        this.version = "1.0.0";
        this.squares = [[new Set(['br']), new Set(['bn']), new Set(['bb']), new Set(['bq']), new Set(['bk']),  new Set(['bb']),  new Set(['bn']), new Set(['br'])],
                        [new Set(['bp']), new Set(['bp']), new Set(['bp']), new Set(['bp']), new Set(['bp']),  new Set(['bp']),  new Set(['bp']), new Set(['bp'])],
                        [new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()],
                        [new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()],
                        [new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()],
                        [new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()],
                        [new Set(['wp']), new Set(['wp']), new Set(['wp']), new Set(['wp']), new Set(['wp']),  new Set(['wp']),  new Set(['wp']), new Set(['wp'])],
                        [new Set(['wr']), new Set(['wn']), new Set(['wb']), new Set(['wq']), new Set(['wk']),  new Set(['wb']),  new Set(['wn']), new Set(['wr'])]
                    ]
    }

    render() {
        return html`
            <header>
                <div style="display: flex; flex-direction: column; flex: 1; width: 100%">
                    <div class='txt' style="width: 100%; ">RRL System</div>
                </div>
                <rrl-button name='refresh' border='none' size=28 @click=${() => document.location.reload()} title='refresh' style='margin-right: 8px'></rrl-button>
                <rrl-button name='face' border='none' size=28 @click=${() => this.gameFind()} title='Нейросеть' style='margin-right: 8px'></rrl-button>
                <rrl-button name='screenshot' border='none' size=28 @click=${() => this.login()} title='Подключиться' style='margin-right: 8px'></rrl-button>
                <rrl-button name='signUp' border='none' size=28 @click=${() => this.signUp()} title='Зарегистрироваться' style='margin-right: 8px'></rrl-button>
            </header>
            <login-form></login-form>
            <sign-up-form></sign-up-form>
            <game-find-form></game-find-form>
            <div id="board" class='board'>
                <h1>Добро пожаловать на мой сайт</h1>
            </div>
        `;
    }

    firstUpdated() {
        super.firstUpdated();
        setTimeout(() => this.init(), 100);
        window.addEventListener('resize', () => CHESS.throttle('resize', () => this.fontSize = this._fontSize, 300), false);
        setGameForm(this)
    }

        enemyStep(msg) {
        const step = msg.data;
        //this.squares[step.rowStart][step.rowStart].delete('selected');
        //this.squares[step.rowStart][step.colStart].clear();
        [this.squares[step.rowStart][step.colStart],
        this.squares[step.rowEnd][step.colEnd]] =
        [this.squares[step.rowEnd][step.colEnd],
        this.squares[step.rowStart][step.colStart]]
        this.requestUpdate();
    }

    dragStart(e, rowIndex, colIndex) {
        this.rowStart = rowIndex;
        this.colStart = colIndex;
        this.squares[rowIndex][colIndex].add('selected');
        //e.dataTransfer.effectAllowed = 'move';
        this.requestUpdate();
    }

    dragEnter(e, rowIndex, colIndex) {
        if (this.squares[rowIndex][colIndex].size === 0) {
            this.squares[rowIndex][colIndex].add((rowIndex + colIndex) % 2 === 0 ? 'white-over' : 'black-over');
            this.requestUpdate();
        }
    }

    dragOver(e, rowIndex, colIndex) {
        if (e.preventDefault) {
            e.preventDefault();
        }
    }

    dragEnd(e, rowIndex, colIndex) {
        this.squares[rowIndex][colIndex].delete('selected');
        this.requestUpdate();
    }

    dragLeave(e, rowIndex, colIndex) {
        this.squares[rowIndex][colIndex].delete((rowIndex + colIndex) % 2 === 0 ? 'white-over' : 'black-over');
        this.requestUpdate();
    }

    drop(e, rowIndex, colIndex) {
        if (this.rowStart === rowIndex && this.colStart === colIndex) {
            return;
        }
        this.squares[this.rowStart][this.colStart].delete('selected');
        this.squares[rowIndex][colIndex].clear();
        [this.squares[rowIndex][colIndex], this.squares[this.rowStart][this.colStart]] = [this.squares[this.rowStart][this.colStart], this.squares[rowIndex][colIndex]]
        this.requestUpdate();
        const step = {
            piece: [...this.squares[rowIndex][colIndex]][0],
            rowStart: this.rowStart,
            colStart: this.colStart,
            rowEnd: rowIndex,
            colEnd: colIndex
        }
        sendStep(step)
    }

    updated(e) {
        if (e.has('row') || e.has('column')) {
            this.row = this.row < 2 ? 2 : this.row > 10 ? 10 : this.row;
            this.column = this.column < 2 ? 2 : this.column > 10 ? 10 : this.column;
        }
        //if (e.has('row') || e.has('column')) this.init();
    }

    get _url() { return this.$url.replace('js/rrl.js', '') }

    get odd() { return (this.row * this.column) % 2 === 0 ? '' : Math.floor(this.row * this.column / 2) }

    get _fontSize() { return Math.min(this.$qs('#board').offsetWidth / this.column + this.column * 4, this.$qs('#board').offsetHeight / this.row + this.row * 4) }

    init() {
        this._confetti && clearInterval(this._confetti);
        this.fontSize = this._fontSize;
        this.isOk = this.isError = 0;
        this.card1 = this.card2 = undefined;
        this.solved = [];
        this.cards = [];
        const images = [];
        let url = this._url + 'cards/cards-';
        for (let i = 1; i <= 140; i++) {
            if (i === 1 || i === 17 || i === 72 || i === 140)
            images.push(url + (i < 10 ? '00' + i : i < 100 ? '0' + i : i) + '.jpg');
        }
        let length = (this.row * this.column) - (this.odd ? 1 : 0);
        this.step = 360 / (length / 2);
        let unique = [];
        const uniqueCards = [];
        for (let i = 0; i < length / 2; i++) {
            const color = i * this.step;
            if (unique.length === 0)
                unique = [...Array(images.length).keys()];
            const randomNumber = Math.floor(Math.random() * unique.length);
            const random = images[unique[randomNumber]];
            uniqueCards.push({ v: random, c: color }, { v: random, c: color })
            unique[randomNumber] = unique[unique.length - 1];
            unique.pop();

        }
        this.cards = [];
        while (uniqueCards.length !== 0) {
            const randomNumber = Math.floor(Math.random() * uniqueCards.length);
            this.cards.push(uniqueCards[randomNumber]);
            uniqueCards[randomNumber] = uniqueCards[uniqueCards.length - 1];
            uniqueCards.pop();
        }
        this.odd && this.cards.splice(this.odd, 0, -1);
        this.$update();
        this.isInit = false;
    }
    onclick(e, id, value) {

    }

    neuroClick() {
        let cells = this.renderRoot.querySelectorAll(".cell");
        const id = Math.floor(Math.random() * cells.length);
        if (id != this.odd)
            cells[id].dispatchEvent(new CustomEvent("click", { bubbles: true, composed: true}));
    }
    gameFind() {
        this.renderRoot.querySelector("game-find-form").open();
    }
    login() {
        this.renderRoot.querySelector("login-form").open();
    }
    signUp() {
        this.renderRoot.querySelector("sign-up-form").open();
    }
}

customElements.define("rrl-system", RrlSystem);
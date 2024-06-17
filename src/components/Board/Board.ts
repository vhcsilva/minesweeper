import { applicationState, subscribe } from '@/store/index'
import { setAttributes } from '@/utils/set-attributes'

export class Board extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    subscribe(this)
  }

  connectedCallback() {
    this.render()
  }

  render() {
    if (!this.shadowRoot) return

    this.shadowRoot.innerHTML = ''

    applicationState.games.forEach(game => {
      const appGame = this.ownerDocument.createElement('app-game')
      setAttributes(appGame, {
        'game-uuid': game.uuid,
      })
      this.shadowRoot?.appendChild(appGame)
    })
  }
}

customElements.define('app-board', Board)
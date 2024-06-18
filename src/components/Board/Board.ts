import { applicationState, subscribe } from '@/store/index'
import { setAttributes } from '@/utils/set-attributes'
import { loadCSS } from '@/utils/load-css'

import styles from '@/components/Board/Board.css'
import template from '@/components/Board/Board.template.html'
import { getFromShadowById } from '@/utils/get-from-shadow-by-id'

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

    this.shadowRoot.innerHTML = template

    loadCSS(this, styles)

    const board = getFromShadowById(this, 'app-board')

    applicationState.games.forEach(game => {
      const appGame = this.ownerDocument.createElement('app-game')
      setAttributes(appGame, {
        'game-uuid': game.uuid,
      })
      board?.appendChild(appGame)
    })
  }
}

customElements.define('app-board', Board)
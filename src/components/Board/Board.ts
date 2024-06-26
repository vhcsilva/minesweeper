import { applicationState, subscribe } from '@/store/index'
import { setAttributes } from '@/utils/set-attributes'
import { loadCSS } from '@/utils/load-css'

import styles from '@/components/Board/Board.css'
import template from '@/components/Board/Board.template.html'
import { getFromShadowById } from '@/utils/get-from-shadow-by-id'

export class Board extends HTMLElement {
  sortedBy = applicationState.sortedBy

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

    const needsToResort = this.sortedBy !== applicationState.sortedBy
    if (needsToResort)
      this.sortedBy = applicationState.sortedBy

    if (!this.shadowRoot.innerHTML || needsToResort)
      this.shadowRoot.innerHTML = template

    loadCSS(this, styles)

    const board = getFromShadowById(this, 'app-board')

    board?.querySelectorAll(`app-game`)?.forEach(element => {
      if (!applicationState.games.find(({ uuid }) => uuid === element.getAttribute('game-uuid')))
        element.remove()
    })

    applicationState.games.forEach(game => {
      const isRendered = board?.querySelector(`app-game[game-uuid="${game.uuid}"]`)

      if (isRendered) return

      const appGame = this.ownerDocument.createElement('app-game')
      setAttributes(appGame, {
        'game-uuid': game.uuid
      })
      board?.appendChild(appGame)
    })
  }
}

customElements.define('app-board', Board)
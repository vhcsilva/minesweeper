import { applicationState, subscribe } from '@/store/index'
import { getFromShadowById } from '@/utils/get-from-shadow-by-id'

import template from '@/components/Game/Game.template.html'
import styles from '@/components/Game/Game.css'
import { loadCSS } from '@/utils/load-css'
import { GameLayout } from '@/utils/constants'

interface GameAttributes {
  uuid: string;
}

export class Game extends HTMLElement {
  uuid: string = ''

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    subscribe(this)
  }

  static get observedAttributes() {
    return ['game-uuid']
  }

  attributeChangedCallback(prop: string, _: unknown, value: string) {
    const changedAttribute = prop.replace('game-', '') as keyof GameAttributes
    this[changedAttribute] = value
    this.render()
  }

  render() {
    if (this.shadowRoot) this.shadowRoot.innerHTML = template

    loadCSS(this, styles)

    const game = applicationState.games.find(({ uuid }) => uuid === this.uuid)

    if (!game) return

    const gameName = getFromShadowById(this, 'game-name')
    if (gameName)
      gameName.textContent = game.name

    const gameDifficulty = getFromShadowById(this, 'game-difficulty')
    if (gameDifficulty)
      gameDifficulty.textContent = game.difficulty

    const tilesContainer = getFromShadowById(this, 'game-tiles')
    if (tilesContainer) {
      tilesContainer.classList.add(`game-tiles-${game.difficulty}`)

      const { rows, cols } = GameLayout[game.difficulty]

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const tile = this.ownerDocument.createElement('app-game-tile')
          tilesContainer.appendChild(tile)
        }
      }
    }
  }
}

customElements.define('app-game', Game)
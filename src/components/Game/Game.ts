import { applicationState, dispatch, subscribe } from '@/store/index'
import { getFromShadowById } from '@/utils/get-from-shadow-by-id'

import template from '@/components/Game/Game.template.html'
import styles from '@/components/Game/Game.css'

import { loadCSS } from '@/utils/load-css'
import { GameLayout } from '@/utils/constants'
import { setAttributes } from '@/utils/set-attributes'

import { removeGame } from '@/store/actions'

import { GameStatus } from '@/types/minesweeper'

import TrashIcon from '../../../assets/icons/trash.svg'
import SunglassesEmoji from '../../../assets/icons/sunglasses-emoji.svg'
import HappyEmoji from '../../../assets/icons/happy-emoji.svg'
import AstonishedEmoji from '../../../assets/icons/astonished-emoji.svg'

interface GameAttributes {
  uuid: string;
}

const emojiMapping = {
  [GameStatus.inProgress]: HappyEmoji,
  [GameStatus.lost]: AstonishedEmoji,
  [GameStatus.win]: SunglassesEmoji,
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

  onRemoveClick() {
    dispatch(removeGame(this.uuid))
  }

  render() {
    if (this.shadowRoot) this.shadowRoot.innerHTML = template

    loadCSS(this, styles)

    const game = applicationState.games.find(({ uuid }) => uuid === this.uuid)

    if (!game) return

    const gameName = getFromShadowById(this, 'game-name')
    if (gameName)
      gameName.textContent = game.name

    const mineCount = getFromShadowById(this, 'mines-count')
    if (mineCount)
      mineCount.textContent = `Mines: ${game.board.mines - game.board.flags}`

    const gameEmoji = getFromShadowById(this, 'game-emoji')
    if (gameEmoji)
      gameEmoji.innerHTML = emojiMapping[game.status]

    const removeButton = getFromShadowById(this, 'remove-button')
    if (removeButton) {
      removeButton.innerHTML = TrashIcon
      removeButton.addEventListener('click', () => this.onRemoveClick())
    }

    const tilesContainer = getFromShadowById(this, 'game-tiles')
    if (tilesContainer) {
      tilesContainer.classList.add(`game-tiles-${game.difficulty}`)

      const { rows, cols } = GameLayout[game.difficulty]

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const tile = game.board.tiles[row][col]

          const tileComponent = this.ownerDocument.createElement('app-game-tile')
          setAttributes(tileComponent, {
            'game-uuid': game.uuid,
            'game-status': game.status,
            'tile-mine-count': tile.mineCount.toString(),
            'tile-row': tile.row.toString(),
            'tile-col': tile.col.toString(),
            'tile-has-flag': tile.hasFlag.toString(),
            'tile-is-mine': tile.isMine.toString(),
            'tile-is-revealed': tile.isRevealed.toString(),
          })

          tilesContainer.appendChild(tileComponent)
        }
      }
    }
  }
}

customElements.define('app-game', Game)